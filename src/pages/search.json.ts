export async function GET() {
  const pages = [
    {
      title: "Åbningstider",
      url: "/besoeg/aabningstider",
      text: "åbningstider besøg planlæg besøg",
    },
    {
      title: "Find vej og parkering",
      url: "/besoeg/findvej",
      text: "find vej parkering adresse transport",
    },
    {
      title: "Praktisk info og hjælp",
      url: "/besoeg/praktiskinfo",
      text: "praktisk info hjælp tilgængelighed",
    },
    {
      title: "Billedskolen",
      url: "/besoeg/billedskolen",
      text: "billedskolen børn unge undervisning",
    },
    {
      title: "Udstillinger",
      url: "/udstillinger/aktuelle",
      text: "aktuelle kommende tidligere udstillinger kunst",
    },
    {
      title: "Kalender",
      url: "/kalender",
      text: "kalender arrangementer events aktiviteter",
    },
    {
      title: "Museet",
      url: "/ommuseet/om",
      text: "museet om vejen kunstmuseum",
    },
    {
      title: "Vision",
      url: "/ommuseet/vision",
      text: "vision vejen kunstmuseum",
    },
    {
      title: "Samling",
      url: "/ommuseet/samling",
      text: "samling værker kunstnere materialer perioder",
    },
    {
      title: "Historie",
      url: "/ommuseet/historie",
      text: "historie tidslinje niels hansen jacobsen",
    },
  ];

  return new Response(JSON.stringify(pages), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
