export interface ISlang {
  term: string;
  type: "acronym" | "words";
  definition: string;
}

export const slang: ISlang[] = [
  {
    term: "yellow blaze",
    type: "words",
    definition:
      "Following the general direction of the trail, but doing so by either hitch hiking or driving.",
  },
  {
    term: "blue blaze",
    type: "words",
    definition:
      "A hiking trail that is a branch off of the official trail, often to a road or parking lot, but could also be an alternate route.",
  },
  {
    term: "pink blaze",
    type: "words",
    definition:
      "Finding a love interest on trail and adjusting your hiking pace or plan to hike with them.",
  },
  {
    term: "ultralight",
    type: "words",
    definition:
      "Having a backpack that weighs less than 10 pounds (4.5 kg), when the weight of food and water is not considered.",
  },
  {
    term: "FKT",
    type: "acronym",
    definition:
      "Stands for \"Fastest Known Time\". This is the fastest any has thru hiked a trail. Often qualified with catgories such as supported, unsupported, women's, men's, etc.",
  },
  {
    term: "LNT",
    type: "acronym",
    definition:
      'Stands for "Leave No Trace". It means to leave a trail in the same state you found it by not leaving any trash, and consciously minimizing your impact.',
  },
  {
    term: "NOBO",
    type: "acronym",
    definition:
      "North bound. It means you are hiking towards the nothern terminus of a trail.",
  },
  {
    term: "SOBO",
    type: "acronym",
    definition:
      "South bound. It means you are hiking towards the southern terminus of a trail.",
  },
  {
    term: "cowboy camping",
    type: "words",
    definition: "Sleeping under the stars, without a tent or being in ",
  },
];
