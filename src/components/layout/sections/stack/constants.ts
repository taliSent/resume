const cssNodes = [
  {
    id: "css",
    position: { x: 100, y: 0 },
    data: { label: "CSS" },
  },
  {
    id: "scss",
    position: { x: 100, y: 100 },
    data: { label: "Scss / Sass" },
  },
  {
    id: "tailwind",
    position: { x: 300, y: 100 },
    data: { label: "Tailwind" },
  },
  {
    id: "styled",
    position: { x: -100, y: 100 },
    data: { label: "Styled components" },
  },
];

const cssEdges = [
  {
    id: "css-scss",
    source: "css",
    target: "scss",
  },
  {
    id: "css-tailwind",
    source: "css",
    target: "tailwind",
  },
  {
    id: "css-styled",
    source: "css",
    target: "styled",
  },
];

const jsNodes = [
  {
    id: "js",
    position: { x: 700, y: 0 },
    data: { label: "Js" },
  },
  {
    id: "ts",
    position: { x: 700, y: 100 },
    data: { label: "Typescript" },
  },
  {
    id: "react",
    position: { x: 500, y: 100 },
    data: { label: "React" },
  },
  {
    id: "next",
    position: { x: 500, y: 200 },
    data: { label: "Next.js" },
  },
];

const jsEdges = [
  {
    id: "js-ts",
    source: "js",
    target: "ts",
  },
  {
    id: "js-react",
    source: "js",
    target: "react",
  },
  {
    id: "react-next",
    source: "react",
    target: "next",
  },
  {
    id: "ts-libs",
    source: "ts",
    target: "libs",
  },
];

const libNodes = [
  {
    id: "libs",
    position: { x: 700, y: 300 },
    data: { label: "Libraries" },
  },
  {
    id: "react-query",
    position: { x: 700, y: 400 },
    data: { label: "React query" },
  },
  {
    id: "rtk",
    position: { x: 500, y: 400 },
    data: { label: "Redux / RTK" },
  },
  {
    id: "zustand",
    position: { x: 300, y: 400 },
    data: { label: "Zustand" },
  },
  {
    id: "mui",
    position: { x: 900, y: 400 },
    data: { label: "material-ui" },
  },
  {
    id: "jest",
    position: { x: 1100, y: 400 },
    data: { label: "Jest" },
  },
  {
    id: "framer",
    position: { x: 1300, y: 400 },
    data: { label: "Framer-motion" },
  },
];

const libsEdges = [
  {
    id: "libs-react-query",
    source: "libs",
    target: "react-query",
  },
  {
    id: "libs-rtk",
    source: "libs",
    target: "rtk",
  },
  {
    id: "libs-zustand",
    source: "libs",
    target: "zustand",
  },
  {
    id: "libs-mui",
    source: "libs",
    target: "mui",
  },
  {
    id: "libs-jest",
    source: "libs",
    target: "jest",
  },
  {
    id: "libs-framer",
    source: "libs",
    target: "framer",
  },
];

const otherLanguages = [
  {
    id: "java",
    position: { x: 900, y: 0 },
    data: { label: "Java" },
  },
  {
    id: "node",
    position: { x: 1100, y: 0 },
    data: { label: "Node.js" },
  },
];

export const nodes = [...cssNodes, ...jsNodes, ...libNodes, ...otherLanguages];
export const edges = [...cssEdges, ...jsEdges, ...libsEdges];
