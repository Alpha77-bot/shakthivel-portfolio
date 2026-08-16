export const helvox = {
  slug: "helvox",
  name: "HelVox",
  tagline: "Designing a conversational AI experience for e-commerce support.",
  world: "dark",
  tags: ["AI Product Design", "Conversational UX", "Voice UX", "React", "RAG"],
  heroStat: "Real-time voice agent",
  stack: [
    "React",
    "LiveKit",
    "WebRTC",
    "WebSocket",
    "Python",
    "PostgreSQL",
    "Redis",
    "Weaviate",
    "Docker",
    "Kubernetes",
    "RAG / Embeddings",
  ],
  capabilities: [
    { label: "Speech-to-text", note: "Converts the customer's spoken request into text the system can act on." },
    { label: "Natural language understanding", note: "Interprets intent — order status, return, refund, cancellation." },
    { label: "Text-to-speech", note: "Responds in a natural spoken voice, not a robotic read-out." },
    { label: "Conversational AI", note: "Holds context across a multi-turn support conversation." },
    { label: "RAG / retrieval", note: "Pulls order and policy data from a vector store to ground responses in fact." },
    { label: "Multilingual & code-switching", note: "Follows the customer even when they mix languages mid-sentence." },
    { label: "Real-time voice", note: "Sub-second round trip over WebRTC, not a chat-style delay." },
    { label: "Interruption handling", note: "Lets the customer cut in and correct the agent mid-response." },
  ],
  overview:
    "HelVox is a real-time AI voice agent built for e-commerce customer support — handling order tracking, delayed or missing orders, returns, exchanges, refunds, product questions, and cancellations through natural spoken conversation instead of a ticket queue or a phone tree.",
  problem:
    "Traditional e-commerce support forces a customer through the same funnel regardless of how simple their question is: log in, find the order, open a ticket, wait. A voice agent can shortcut that — but only if the customer trusts what it's doing. Most conversational AI interfaces hide their reasoning behind a single chat bubble, which works for text but breaks down for voice: there's no message log to scroll back to, no typing indicator, no way to see what the system understood. If the agent mishears an order number or takes a moment to check a policy, the customer has no way of knowing whether it's still working or has stalled.",
  targetUsers: [
    {
      title: "The time-pressed shopper",
      detail: "Wants a fast answer to \"where's my order\" without navigating an app or waiting on hold.",
    },
    {
      title: "The frustrated customer",
      detail: "Has a delayed, missing, or wrong item and wants to be understood quickly, not routed through menus.",
    },
    {
      title: "The multilingual user",
      detail: "May switch between languages mid-sentence and expects the agent to keep up without restarting the conversation.",
    },
  ],
  journey: [
    { step: "Initiate", detail: "Customer opens voice support and speaks naturally — no forms, no menu tree." },
    { step: "Understand", detail: "Agent transcribes and interprets intent, showing it's listening in real time." },
    { step: "Retrieve", detail: "Agent looks up the order or policy via RAG and signals it's processing." },
    { step: "Respond", detail: "Agent replies in natural speech, with the option for the customer to interrupt." },
    { step: "Clarify (if needed)", detail: "If intent is ambiguous, the agent asks a short, specific follow-up." },
    { step: "Confirm", detail: "For actions like a cancellation or refund, the agent states exactly what happened." },
  ],
  flows: [
    {
      name: "Order status check",
      steps: [
        "Customer asks about an order verbally.",
        "Agent shows a listening state, then a processing state while it retrieves order data.",
        "Agent responds with status, and the interface reflects the speaking state.",
      ],
    },
    {
      name: "Cancellation with interruption",
      steps: [
        "Customer starts a cancellation request mid-way through another question.",
        "Agent registers the interruption, halts its current response, and re-listens.",
        "Agent processes the new request and confirms the action taken.",
      ],
    },
    {
      name: "Ambiguous / low-confidence request",
      steps: [
        "Agent isn't confident which order the customer means.",
        "Agent enters a 'needs clarification' state and asks one direct question.",
        "Customer answers, agent resumes processing and responds.",
      ],
    },
  ],
  uxChallenges: [
    {
      title: "Making an invisible process visible",
      detail:
        "Voice has no scrollback and no cursor. Every internal step the agent takes — listening, thinking, retrieving, speaking — needed a deliberate, perceivable signal, or the customer is left guessing whether anything is happening at all.",
    },
    {
      title: "Designing for interruption, not just conversation",
      detail:
        "Real conversations aren't turn-based. The interface had to account for a customer talking over the agent — visually and functionally — rather than assuming a clean back-and-forth.",
    },
    {
      title: "Being honest about uncertainty",
      detail:
        "When the agent isn't confident about intent, guessing silently is worse than asking. The design needed a distinct, low-friction way to say 'here's what I need from you' instead of failing quietly.",
    },
    {
      title: "Confirming irreversible actions clearly",
      detail:
        "A refund or cancellation can't feel ambiguous. The confirmation state had to be unmistakably different from an informational response.",
    },
  ],
  designDecisions: [
    {
      title: "A persistent state indicator, not a spinner",
      detail:
        "Instead of a generic loading spinner, the interface uses a distinct color and motion signature for each AI state — listening, processing, speaking, needs clarification, and confirmed — so the customer can read the system's status at a glance, the same way they'd read a traffic light.",
    },
    {
      title: "Motion as a listening cue",
      detail:
        "A waveform reacts to the customer's own voice while listening, giving immediate, physical confirmation that the microphone is live — this matters more in voice UX than any text label could.",
    },
    {
      title: "Short, specific clarification prompts",
      detail:
        "Rather than a generic 'I didn't understand,' the agent asks about the specific missing detail (for example, which order), keeping the conversation moving instead of restarting it.",
    },
    {
      title: "Explicit, spoken + visual confirmation for actions",
      detail:
        "Cancellations, refunds, and returns get a distinct confirmation state — both spoken and shown — so there's no ambiguity about whether the action actually happened.",
    },
  ],
  learned:
    "Designing HelVox reframed how I think about AI UX: the hard problem usually isn't generating a correct response, it's making the system's internal state legible in real time, especially in a channel like voice that has no persistent visual record. Building the state model alongside the engineering also showed me how much product design work happens in defining what the system should communicate, not just how it should look.",
  future: [
    "Visual transcript fallback for customers who want a text record of a voice conversation.",
    "Confidence indicators the customer can query directly (\"are you sure?\").",
    "Expanded multilingual state labels so non-English speakers get the same clarity in status cues.",
    "User testing on the state-indicator language once the product reaches real customers.",
  ],
  repo: "https://github.com/Alpha77-bot/helvox-ai-voice-agent",
  figmaUrl: "https://www.figma.com/file/helvox-ai-ux-prototype-demo",
  demoUrl: "https://helvox-ai-ux.vercel.app",
  mockupImage: "/assets/helvox_mockup.jpg",
};
