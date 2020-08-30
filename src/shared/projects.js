import ourblog from "../images/ourblog.png"
import time from "../images/timetracker.png"
import tour from "../images/tour.png"
export const PROJECTS = [
  {
    id: 0,
    name: "Our Store",
    image: ourblog,
    description:
      "A store including different kinds of cupcakes, icecreams and cakes.",
    tech: ["HTML", "CSS", "Javascript"],
    githublink:"https://github.com/Sumit3107/our-store.git",
    hostedurl:"https://sumit3107.github.io/our-store/"
  },
  {
    id: 1,
    name: "Time Tracker",
    image: time,
    description: "Front End of a time tracker website made using React.",
    tech: ["HTML", "CSS", "Javascript", "React"],
    githublink:"https://github.com/Sumit3107/time-tracker.git",
    hostedurl:""
  },
  {
    id: 2,
    name: "Tour",
    image: tour,
    description: "Front End of a Tour website.",
    tech: ["HTML", "CSS", "SASS"],
    githublink:"https://github.com/Sumit3107/tour.git",
    hostedurl:"https://sumit3107.github.io/tour/"
  },
];
