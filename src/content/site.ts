// All editable wedding content lives here.
// Anything marked TODO is placeholder text waiting on Swathi & Taha.
// Photos: drop files into /public/photos and set `src` (e.g. "/photos/engagement-1.jpg").

export type Photo = { src?: string; alt: string };

export const couple = {
  bride: "Swathi",
  groom: "Taha",
  monogram: "S & T",
};

export const wedding = {
  // TODO: real date & time (keep the +05:30 Sri Lanka offset)
  date: "2027-08-21T16:00:00+05:30",
  dateLabel: "Saturday, 21 August 2027", // TODO
  city: "Negombo, Sri Lanka",
  rsvpBy: "April 2027",
  hero: { alt: "Swathi and Taha at their engagement" } as Photo,
};

export const story = {
  title: "Our Story",
  photos: [
    { alt: "Swathi and Taha — story photo 1" },
    { alt: "Swathi and Taha — story photo 2" },
    { alt: "Swathi and Taha — story photo 3" },
  ] as Photo[],
  // TODO: Swathi to write. Wrap names in **double asterisks** to bold them.
  paragraphs: [
    "Our story began in [year] at [place]. **Swathi** remembers [first impression]; **Taha** remembers [his version of the story].",
    "What started as [how it started] quickly became [what it became]. Over the years we have [shared adventures, cities, inside jokes].",
    "Along the way our families became one big, loud, wonderful family — and that is exactly who we want around us as we take the next step.",
  ],
};

export const engagement = {
  title: "The Engagement",
  dateLabel: "[Engagement date]", // TODO
  photo: { alt: "Engagement photo in brown and white" } as Photo,
  // TODO: Swathi to write
  paragraphs: [
    "On [date], [how the proposal happened — the setting, the surprise, who was in on it].",
    "We celebrated in brown and white with the people we love most — and now we would love for you to celebrate the rest with us in Sri Lanka.",
  ],
};

export type WeddingEvent = {
  name: string;
  dayLabel: string;
  time: string;
  venue: string;
  what: string;
  explainer: string;
  dressCode: string;
  palette: { name: string; hex: string }[];
  moodboard: Photo[];
};

export const events: WeddingEvent[] = [
  {
    name: "Sangeet",
    dayLabel: "Friday, 20 August 2027", // TODO
    time: "6:00 PM onwards", // TODO
    venue: "[Venue], Negombo", // TODO
    what: "An evening of music & dance",
    explainer:
      "The Sangeet (literally “music”) is a joyful pre-wedding night where both families come together to sing, dance and perform for the couple. Expect choreographed family performances, an open dance floor, good food and a lot of laughter — no rhythm required, just enthusiasm.",
    dressCode: "Festive & colourful — Indo-western, lehengas, kurtas or cocktail wear",
    palette: [
      { name: "Marigold", hex: "#D9A441" },
      { name: "Rose", hex: "#C98B7F" },
      { name: "Emerald", hex: "#3F6B55" },
      { name: "Champagne", hex: "#E8D6B5" },
    ],
    // TODO: mood board images from Swathi
    moodboard: [
      { alt: "Sangeet mood board 1" },
      { alt: "Sangeet mood board 2" },
      { alt: "Sangeet mood board 3" },
      { alt: "Sangeet mood board 4" },
      { alt: "Sangeet mood board 5" },
    ],
  },
  {
    name: "Wedding",
    dayLabel: "Saturday, 21 August 2027", // TODO
    time: "4:00 PM", // TODO
    venue: "[Wedding hotel], Negombo", // TODO
    what: "The ceremony & celebration",
    explainer:
      "The wedding brings together our families’ traditions in one ceremony, followed by dinner and celebration. [TODO: Swathi to describe the key rituals guests will see — e.g. the procession, the vows, the exchange of garlands — so first-timers know what is happening.]",
    dressCode: "Traditional or formal — sarees, lehengas, sherwanis, kurtas or suits",
    palette: [
      { name: "Cocoa", hex: "#6E4B36" },
      { name: "Ivory", hex: "#F8F3EC" },
      { name: "Sand", hex: "#DCC9B2" },
      { name: "Gold", hex: "#B8935A" },
    ],
    // TODO: mood board images from Swathi
    moodboard: [
      { alt: "Wedding mood board 1" },
      { alt: "Wedding mood board 2" },
      { alt: "Wedding mood board 3" },
      { alt: "Wedding mood board 4" },
      { alt: "Wedding mood board 5" },
    ],
  },
];

export const wearWhatYouWant =
  "These are just ideas to inspire you — at the end of the day, wear whatever you feel wonderful in. We just want you there.";

export const gettingThere = [
  {
    icon: "plane" as const,
    title: "Flying in",
    body: "Fly into Bandaranaike International Airport (CMB) in Colombo. Negombo is the closest beach town to the airport — roughly a 20–30 minute drive.",
  },
  {
    icon: "car" as const,
    title: "Airport to Negombo",
    body: "Most hotels can arrange an airport pick-up; otherwise taxis and the PickMe or Uber apps are easy options from arrivals.",
  },
  {
    icon: "passport" as const,
    title: "Visas",
    body: "Most visitors need an Electronic Travel Authorisation (ETA) before arriving. Apply only through the official Sri Lanka ETA website, and make sure your passport is valid for at least six months.",
  },
];

export const stay = {
  featured: {
    name: "[Wedding hotel name]", // TODO
    blurb:
      "The wedding and most celebrations take place here, so it is the easiest place to stay. [TODO: room block details / discount code.]",
    url: "#", // TODO: booking link
    photo: { alt: "The wedding hotel in Negombo" } as Photo,
  },
  // TODO: Swathi to confirm her picks
  nearby: [
    { name: "[Hotel option 1]", note: "Beachfront · ~5 min from the venue", url: "#" },
    { name: "[Hotel option 2]", note: "Lagoon views · ~10 min from the venue", url: "#" },
    { name: "[Hotel option 3]", note: "Boutique · walk to the beach", url: "#" },
  ],
};

export type Place = {
  region: string;
  name: string;
  distance: string;
  why: string;
  tips: string[];
  photo: Photo;
};

// TODO: Swathi to replace with her own recommendations
export const places: Place[] = [
  {
    region: "Cultural Triangle",
    name: "Sigiriya",
    distance: "≈ 3.5 hr drive from Negombo",
    why: "A 5th-century fortress on top of a 200 m rock, with frescoes and sweeping views over the jungle.",
    tips: ["Climb early to beat the heat", "Pair with Dambulla Cave Temple"],
    photo: { alt: "Sigiriya rock fortress" },
  },
  {
    region: "Hill Country",
    name: "Kandy",
    distance: "≈ 3 hr drive from Negombo",
    why: "The cultural capital, home to the Temple of the Sacred Tooth Relic and a peaceful lake in the centre of town.",
    tips: ["Peradeniya Botanical Gardens", "Evening cultural dance show"],
    photo: { alt: "Kandy lake and temple" },
  },
  {
    region: "Hill Country",
    name: "Ella",
    distance: "Scenic train from Kandy",
    why: "Tea plantations, misty hikes and the famous Nine Arch Bridge — the train ride there is half the fun.",
    tips: ["Book train seats early", "Little Adam’s Peak at sunrise"],
    photo: { alt: "Nine Arch Bridge in Ella" },
  },
  {
    region: "South Coast",
    name: "Galle Fort",
    distance: "≈ 2.5 hr drive from Negombo",
    why: "A walled colonial town by the sea with cobbled lanes, cafés, boutiques and sunset walks along the ramparts.",
    tips: ["Stay a night in the Fort", "Beach day at Unawatuna"],
    photo: { alt: "Galle Fort lighthouse" },
  },
];

export const faqs = [
  {
    q: "When should I RSVP by?",
    a: `Please let us know by ${wedding.rsvpBy} using the form below, so we can plan everything properly.`,
  },
  {
    q: "What will the weather be like?",
    a: "Negombo is warm and tropical all year, usually around 27–32°C. Pack light, breathable fabrics, sunscreen and something light for the evenings. [TODO: confirm for the wedding month.]",
  },
  {
    q: "Do I need a visa?",
    a: "Most nationalities need an ETA (Electronic Travel Authorisation) before travelling to Sri Lanka. Apply online through the official government ETA website a few weeks ahead.",
  },
  {
    q: "How do I get around?",
    a: "PickMe and Uber both work in Sri Lanka, and tuk-tuks are everywhere for short trips. For day trips, hiring a car with a driver is the most comfortable option.",
  },
  {
    q: "What currency is used?",
    a: "The Sri Lankan Rupee (LKR). Cards are accepted at hotels and larger restaurants; carry some cash for tuk-tuks and markets.",
  },
  {
    q: "Who do I contact with questions?",
    a: "Message Swathi at [number] or Taha at [number] — we are always happy to help.", // TODO
  },
];

export const navLinks = [
  { id: "story", label: "Our Story" },
  { id: "engagement", label: "Engagement" },
  { id: "invitation", label: "Invitation" },
  { id: "events", label: "Events" },
  { id: "travel", label: "Getting There" },
  { id: "stay", label: "Where to Stay" },
  { id: "explore", label: "Explore Sri Lanka" },
  { id: "faq", label: "Q&A" },
  { id: "rsvp", label: "RSVP" },
];
