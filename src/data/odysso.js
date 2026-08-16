export const odysso = {
  slug: "odysso",
  name: "Odysso",
  fullName: "Odysso Travel Planner",
  tagline: "Redesigning travel planning into a simpler, warmer, more human experience.",
  world: "light",
  tags: ["UI/UX", "Product Design", "Travel", "React"],
  repo: "https://github.com/Alpha77-bot/odysso-travel-planner",
  stack: ["React", "JavaScript", "HTML", "CSS"],
  overview:
    "Odysso is a travel planning web app designed to feel like planning a trip with a friend who's already been there — not like filling out forms on a corporate booking platform. The focus is on making trip planning simple, visual, and encouraging, rather than dense and transactional.",
  problem:
    "Most travel planning tools are built around inventory — flights, rooms, prices — and treat the plan itself as an afterthought. That leaves the actual planning experience feeling like spreadsheet work: lots of fields, lots of options, very little sense of the trip coming together. The goal for Odysso was to put the shape of the trip first and make the process feel encouraging rather than exhausting.",
  goal:
    "Design an interface that feels warm, visual, and easy to understand — reducing technical or corporate friction so planning a trip feels closer to daydreaming about one.",
  targetUser: {
    title: "The independent trip planner",
    detail:
      "Someone planning a trip on their own or with friends, who wants a clear, encouraging picture of the plan taking shape rather than a dense booking interface.",
  },
  journey: [
    { step: "Arrive", detail: "Lands on a warm, uncluttered start point instead of a search-heavy dashboard." },
    { step: "Frame the trip", detail: "Sets the basic shape of the trip — where, roughly when, with whom." },
    { step: "Build it out", detail: "Adds and arranges plans in a visual, low-friction way." },
    { step: "Review", detail: "Sees the trip as a clear, human-readable plan rather than a table of data." },
  ],
  informationArchitecture: [
    "Landing / entry point — sets tone before asking for any input.",
    "Trip creation — the minimum needed to start a plan.",
    "Trip view — the visual, central artifact of the product.",
    "Supporting detail views — nested under the trip rather than competing with it.",
  ],
  screens: [
    { name: "Landing", detail: "Introduces the product's warm, human tone before any input is required." },
    { name: "Trip builder", detail: "Where the shape of the trip comes together visually." },
    { name: "Trip overview", detail: "A readable summary of the plan, designed to feel like a finished itinerary, not a form." },
  ],
  uiDecisions: [
    {
      title: "Warm ivory base instead of clinical white",
      detail:
        "A soft ivory background (#F8F3E9) replaces the sterile white common to booking platforms, immediately signaling that this isn't a transactional tool.",
    },
    {
      title: "Saffron and peacock as the primary palette",
      detail:
        "Saffron for warmth and calls to action, deep peacock blue for structure and trust, with a restrained gold accent — an Indian-inspired palette used deliberately rather than decoratively.",
    },
    {
      title: "Rounded, soft-shadowed cards",
      detail:
        "Trip elements sit in rounded cards with soft, warm-toned shadows rather than hard edges, reinforcing the 'friend helping you plan' feeling over a corporate one.",
    },
    {
      title: "Plain-language labeling",
      detail:
        "Interface copy avoids travel-industry jargon in favor of language a first-time planner would use themselves.",
    },
  ],
  visualDirection:
    "The Indian-inspired palette — warm ivory, saffron, deep peacock blue, and gold — was chosen to make the product feel distinct from the blue-and-white template most travel platforms default to, and to carry warmth through every screen rather than confining it to marketing pages.",
  simplification: [
    "Reduced trip creation to the essentials, deferring detail entry until it's actually needed.",
    "Replaced dense tables with visual, card-based trip summaries.",
    "Prioritized one clear next action per screen instead of presenting every option at once.",
  ],
  implementation:
    "Built with React on the frontend, focused on componentizing the trip-building experience so the visual language (cards, color, spacing) stays consistent as the product grows. Source available on GitHub.",
  learned:
    "Odysso pushed me to think about tone as a design decision, not just a visual one — the same information can feel bureaucratic or welcoming depending entirely on layout, color, and word choice. It also reinforced how much a consistent palette does to make a product feel considered rather than assembled.",
  figmaUrl: "https://www.figma.com/file/odysso-travel-planner-ui-prototype",
  demoUrl: "https://odysso-travel.vercel.app",
  mockupImage: "/assets/odysso_mockup.jpg",
};
