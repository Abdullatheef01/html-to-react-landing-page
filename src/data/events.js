export const categories = {
  technical: {
    label: "Technical",
    cp: "nc",
    bp: "bc",
    color: "hsl(180, 100%, 50%)",
  },

  "semi-technical": {
    label: "Semi-Technical",
    cp: "np",
    bp: "bp",
    color: "hsl(330, 100%, 58%)",
  },

  esports: {
    label: "Esports",
    cp: "npu",
    bp: "bpu",
    color: "hsl(272, 100%, 60%)",
  },

  "non-technical": {
    label: "Non-Technical",
    cp: "ng",
    bp: "bg2",
    color: "hsl(45, 100%, 50%)",
  },
};

export const events = [
  {
    id: 1,
    name: "Paper Presentation",
    animeName: "Assassin Scholars",
    category: "technical",
    image: "hammer_titan",
    teamSize: "1–3 members",
    rounds: "2 rounds — Abstract review + Presentation",
    timing: "10 min presentation + 5 min Q&A",
    rules: [
      "Topics must be related to emerging tech",
      "Plagiarism leads to disqualification",
      "Abstract must be submitted before the event",
      "Time limit strictly enforced",
    ],
  },

  {
    id: 2,
    name: "Web Design",
    animeName: "Digital Espadas",
    category: "technical",
    image: "kakashi",
    teamSize: "1–2 members",
    rounds: "Single round — 2 hours",
    timing: "2 hours total",
    rules: [
      "Topic will be given on-spot",
      "Pre-built templates not allowed",
      "Internet access allowed for reference only",
      "Responsive design gets bonus points",
    ],
  },

  {
    id: 3,
    name: "SQL Query",
    animeName: "Data Slayer",
    category: "technical",
    image: "edward_elric",
    teamSize: "Individual",
    rounds: "3 rounds — Basic, Intermediate, Advanced",
    timing: "45 minutes per round",
    rules: [
      "No external tools or notes",
      "Queries must be optimized",
      "Correct syntax and output mandatory",
      "Tie-breaker based on speed",
    ],
  },

  {
    id: 4,
    name: "Tech Quiz",
    animeName: "Aizen IQ Arena",
    category: "technical",
    image: "aizen",
    teamSize: "2 members",
    rounds: "3 rounds — MCQ, Rapid Fire, Buzzer",
    timing: "1 hour total",
    rules: [
      "No electronic devices allowed",
      "Questions cover CS, IT, current tech",
      "Negative marking in MCQ round",
      "Judge's decision is final",
    ],
  },

  {
    id: 5,
    name: "Tech Treasure Hunt",
    animeName: "One Piece Quest",
    category: "semi-technical",
    image: "luffy",
    teamSize: "3–4 members",
    rounds: "5 checkpoints across campus",
    timing: "1.5 hours",
    rules: [
      "All team members must stay together",
      "Clues involve coding puzzles and riddles",
      "GPS/phone usage not allowed",
      "First team to finish wins",
    ],
  },

  {
    id: 6,
    name: "Logo Identification",
    animeName: "Six Eye Challenge",
    category: "semi-technical",
    image: "gojo",
    teamSize: "Individual",
    rounds: "3 rounds — Easy, Medium, Hard",
    timing: "30 minutes total",
    rules: [
      "Logos from tech companies, apps, and brands",
      "Partial logos shown in harder rounds",
      "No electronic devices allowed",
      "Spelling must be accurate",
    ],
  },

  {
    id: 7,
    name: "Free Fire",
    animeName: "Akatsuki Royale",
    category: "esports",
    image: "sungjinwoo",
    teamSize: "Squad (4 members)",
    rounds: "3 matches — Points cumulative",
    timing: "Best of 3 matches",
    rules: [
      "Custom room codes shared before match",
      "Emulators not allowed",
      "Hacking leads to permanent ban",
      "Kill points + placement points",
    ],
  },

  {
    id: 8,
    name: "Chess",
    animeName: "Lelouch Strategy Arena",
    category: "esports",
    image: "lelouch",
    teamSize: "Individual",
    rounds: "Knockout format",
    timing: "10 min per player (Rapid Chess)",
    rules: [
      "Standard FIDE rules apply",
      "Touch-move rule enforced",
      "No electronic assistance",
      "Draws resolved by Armageddon",
    ],
  },

  {
    id: 9,
    name: "Vision Void",
    animeName: "Sharingan Challenge",
    category: "non-technical",
    image: "itachi",
    teamSize: "Individual",
    rounds: "Multiple tasks blindfolded",
    timing: "5 minutes per task",
    rules: [
      "Tasks include drawing, typing, and sorting",
      "No peeking — instant disqualification",
      "Audience must not assist",
      "Best accuracy wins",
    ],
  },

  {
    id: 10,
    name: "Minute to Win It",
    animeName: "One Minute Hero",
    category: "non-technical",
    image: "saitama",
    teamSize: "Individual",
    rounds: "5 mini-games, 1 min each",
    timing: "1 minute per challenge",
    rules: [
      "Must complete task within 60 seconds",
      "No retries on failed tasks",
      "Points awarded based on completion",
      "Tie-breaker: bonus sudden death round",
    ],
  },
];

export const schedule = [
  { time: "9:00 AM", event: "Registration & Check-in", eventId: null },
  { time: "9:30 AM", event: "Inauguration Ceremony", eventId: null },
  { time: "10:00 AM", event: "Paper Presentation", eventId: 1 },
  { time: "10:00 AM", event: "Web Design", eventId: 2 },
  { time: "11:00 AM", event: "SQL Query", eventId: 3 },
  { time: "11:30 AM", event: "Tech Quiz", eventId: 4 },
  { time: "12:30 PM", event: "Lunch Break", eventId: null },
  { time: "1:30 PM", event: "Tech Treasure Hunt", eventId: 5 },
  { time: "1:30 PM", event: "Logo Identification", eventId: 6 },
  { time: "2:30 PM", event: "Free Fire Tournament", eventId: 7 },
  { time: "3:00 PM", event: "Chess Championship", eventId: 8 },
  { time: "3:30 PM", event: "Vision Void", eventId: 9 },
  { time: "4:00 PM", event: "Minute to Win It", eventId: 10 },
  {
    time: "4:30 PM",
    event: "Prize Distribution & Closing",
    eventId: null,
  },
];