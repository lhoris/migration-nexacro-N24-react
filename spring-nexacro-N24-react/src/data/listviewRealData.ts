// 원본 comp::listview.xfdl의 dsList Dataset을 그대로 옮긴 실제 데이터(3행).
export interface ListViewMovie {
  title: string;
  titleLong: string;
  year: string;
  rating: string;
  runtime: string;
  summary: string;
  smallCover: string;
  mediumCover: string;
  largeCover: string;
}

export const LISTVIEW_MOVIES: ListViewMovie[] = [
  {
    title: "Avengers: Infinity War",
    titleLong: "Avengers: Infinity War (2018)",
    year: "2018",
    rating: "8.4",
    runtime: "149",
    summary:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.",
    smallCover: "/nexacro-movies/avengers_infinity_war_2018/small-cover.jpg",
    mediumCover: "/nexacro-movies/avengers_infinity_war_2018/medium-cover.jpg",
    largeCover: "/nexacro-movies/avengers_infinity_war_2018/large-cover.jpg",
  },
  {
    title: "Black Panther",
    titleLong: "Black Panther (2018)",
    year: "2018",
    rating: "7.3",
    runtime: "134",
    summary:
      "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.",
    smallCover: "/nexacro-movies/black_panther_2018/small-cover.jpg",
    mediumCover: "/nexacro-movies/black_panther_2018/medium-cover.jpg",
    largeCover: "/nexacro-movies/black_panther_2018/large-cover.jpg",
  },
  {
    title: "Deadpool 2",
    titleLong: "Deadpool 2 (2018)",
    year: "2018",
    rating: "7.7",
    runtime: "119",
    summary:
      "After losing Vanessa (Morena Baccarin), the love of his life, 4th-wall breaking mercenary Wade Wilson aka Deadpool (Ryan Reynolds) must assemble a team and protect a young, full-figured mutant Russell Collins aka Firefist (Julian Dennison) from Cable (Josh Brolin), a no-nonsense, dangerous cyborg from the future, and must also learn the most important lesson of all: to be part of a family again.",
    smallCover: "/nexacro-movies/deadpool_2_2018/small-cover.jpg",
    mediumCover: "/nexacro-movies/deadpool_2_2018/medium-cover.jpg",
    largeCover: "/nexacro-movies/deadpool_2_2018/large-cover.jpg",
  },
];
