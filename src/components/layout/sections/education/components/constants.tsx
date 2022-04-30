import { ProgressUnitProps } from "./ProgressUnit/ProgressUnit"

export const PROGRESS_WORK: ProgressUnitProps[] = [
  {
    name: "Frontend developer",
    place: "Cinimex",
    years: "2019-present",
    achievement: "Developed a\xa0bank application that allows user to configure, watch as\xa0PDF and\xa0sign documents",
    isMirrored: true,
  },
  {
    name: "SQL Developer",
    place: "AT Consulting",
    achievement: "Developed a\xa030-pages printed form with around 50\xa0SQL queries, each with complex business logic.",
    years: "2019",
    isMirrored: true,
  },
  {
    name: "QA Engineer",
    place: "AT Consulting",    
    achievement: "Fixed critical bugs in\xa0autotests.",
    years: "2018-2019",
    isMirrored: true,
  },
  {
    name: "Researcher",
    place: "MSU",
    years: "2014-2016",
    isLast: true,
    isMirrored: true,
  },
];

export const PROGRESS_EDUCATION: ProgressUnitProps[] = [
  {
    name: "React Marathon",
    place: "Zar Zacharov",
    achievement: "A month of\xa0intense work on a\xa0card game.",
    years: "2021",
  }, {
    name: "Learn React Part II Course",
    place: "Codeacademy",
    achievement: "Built several educational React applications",
    years: "2021",
  }, {
    name: "Learn React Course",
    place: "Codeacademy",
    years: "2021",
  },
  {
    name: "Bachelor of Physics",
    place: "MSU",    
    years: "2012-2016",
    achievement: "Predicted electron fluxes with neural networks, data proccesed with\xa0Python & Numpy",
    isLast: true,
  },
]
