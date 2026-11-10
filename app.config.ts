export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "evento livre",
  description:
    "Plataforma para encontrar eventos de meu interesse pelo mundo, mas que mostre os que tenha perto de mim",
  emoji: "📍",
  accent: "#ea580c",
  upcomingFeatures: [
    {
      title: "Pick your interests",
      description:
        "Choose categories like music, tech or sports and save them to your profile.",
    },
    {
      title: "Events near me",
      description:
        "Use your location to list events within a distance you choose.",
    },
    {
      title: "World events map",
      description: "Browse a map with pins for events happening around the world.",
    },
    {
      title: "Search and filters",
      description: "Find events by city, date and category.",
    },
    {
      title: "Save favorite events",
      description: "Keep the events you like in a personal list.",
    },
    {
      title: "Event details page",
      description:
        "See an event's date, place, description and a link to get tickets.",
    },
  ] satisfies Feature[],
};
