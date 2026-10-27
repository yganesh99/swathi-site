"use server";

export type RsvpState = { status: "idle" | "success" | "error"; message: string };

const MAX = 500;

function field(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim().slice(0, MAX);
}

// Public form: no auth by design. Validates input, drops bots via honeypot,
// and forwards the row to a Google Apps Script web app that appends it to a Sheet.
export async function submitRsvp(_prev: RsvpState, form: FormData): Promise<RsvpState> {
  if (field(form, "company")) return { status: "success", message: "Thank you!" };

  const name = field(form, "name");
  const email = field(form, "email");
  const attending = field(form, "attending");
  const guests = Number(field(form, "guests") || "1");

  if (!name) return { status: "error", message: "Please tell us your name." };
  if (!/^\S+@\S+\.\S+$/.test(email))
    return { status: "error", message: "Please enter a valid email address." };
  if (attending !== "yes" && attending !== "no")
    return { status: "error", message: "Please let us know if you can make it." };
  if (!Number.isInteger(guests) || guests < 1 || guests > 10)
    return { status: "error", message: "Number of guests should be between 1 and 10." };

  const row = {
    submittedAt: new Date().toISOString(),
    name,
    email,
    phone: field(form, "phone"),
    attending,
    guests: attending === "yes" ? guests : 0,
    events: form.getAll("events").map(String).join(", "),
    dietary: field(form, "dietary"),
    message: field(form, "message"),
  };

  const endpoint = process.env.RSVP_WEBHOOK_URL;
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[rsvp] RSVP_WEBHOOK_URL not set — would have saved:", row);
      return { status: "success", message: thanks(name, attending) };
    }
    console.error("[rsvp] RSVP_WEBHOOK_URL is not configured");
    return { status: "error", message: "RSVPs aren’t open just yet — please try again soon." };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...row, secret: process.env.RSVP_WEBHOOK_SECRET ?? "" }),
    });
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
  } catch (err) {
    console.error("[rsvp] failed to save", err);
    return {
      status: "error",
      message: "Something went wrong saving your RSVP. Please try again, or message us directly.",
    };
  }

  return { status: "success", message: thanks(name, attending) };
}

function thanks(name: string, attending: string) {
  const first = name.split(" ")[0];
  return attending === "yes"
    ? `Thank you, ${first}! We can’t wait to celebrate with you in Sri Lanka.`
    : `Thank you, ${first}. We’ll miss you, and we’re grateful you let us know.`;
}
