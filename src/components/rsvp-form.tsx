"use client";

import { useActionState, useState } from "react";
import { submitRsvp, type RsvpState } from "@/app/actions/rsvp";
import { events } from "@/content/site";

const initial: RsvpState = { status: "idle", message: "" };

const input =
  "w-full border-0 border-b border-sand bg-transparent px-0 py-2.5 text-lg text-espresso placeholder:text-espresso/35 focus:border-cocoa focus:outline-none focus:ring-0";
const label = "eyebrow block !text-[0.65rem]";

export function RsvpForm() {
  const [state, action, pending] = useActionState(submitRsvp, initial);
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  if (state.status === "success") {
    return (
      <div role="status" className="py-12 text-center">
        <p className="font-script text-5xl text-cocoa">Thank you</p>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-8">
      {/* Honeypot: hidden from people, tempting for bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className={label}>Full name</span>
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="grid gap-1">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
      </div>

      <label className="grid gap-1">
        <span className={label}>WhatsApp number (optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={input} placeholder="+94 …" />
      </label>

      <fieldset>
        <legend className={label}>Will you be joining us?</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["yes", "Joyfully accepts"],
            ["no", "Regretfully declines"],
          ].map(([value, text]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3 border border-sand px-4 py-3.5 transition-colors has-[:checked]:border-cocoa has-[:checked]:bg-cocoa has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="attending"
                value={value}
                required
                onChange={() => setAttending(value as "yes" | "no")}
                className="sr-only"
              />
              <span className="font-display italic">{text}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {attending === "yes" && (
        <>
          <div className="grid gap-8 sm:grid-cols-[10rem_1fr]">
            <label className="grid gap-1">
              <span className={label}>Guests incl. you</span>
              <input name="guests" type="number" min={1} max={10} defaultValue={1} className={input} />
            </label>
            <fieldset>
              <legend className={label}>Events you’ll attend</legend>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {events.map((e) => (
                  <label key={e.name} className="flex items-center gap-2 text-lg">
                    <input
                      type="checkbox"
                      name="events"
                      value={e.name}
                      defaultChecked
                      className="h-4 w-4 accent-cocoa"
                    />
                    {e.name}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <label className="grid gap-1">
            <span className={label}>Dietary requirements</span>
            <input name="dietary" className={input} placeholder="Vegetarian, allergies, halal…" />
          </label>
        </>
      )}

      <label className="grid gap-1">
        <span className={label}>A note for the couple (optional)</span>
        <textarea name="message" rows={3} className={`${input} resize-none`} />
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-center text-base text-[#9a3b2a]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mx-auto mt-2 border border-cocoa bg-cocoa px-12 py-4 text-sm uppercase tracking-[0.3em] text-paper transition hover:bg-espresso disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send RSVP"}
      </button>
    </form>
  );
}
