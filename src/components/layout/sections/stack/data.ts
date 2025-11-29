// data.ts

import { TreeNodeT } from "./types";

export const initialTreeData: TreeNodeT[] = [
  {
    id: "css",
    name: "CSS",
    children: [
      { id: "scss", name: "Scss / Sass", children: [] },
      { id: "tailwind", name: "Tailwind", children: [] },
      { id: "styled", name: "Styled components", children: [] },
    ],
  },
  {
    id: "js",
    name: "Js",
    children: [
      {
        id: "ts",
        name: "Typescript",
        children: [],
      },
      {
        id: "react",
        name: "React",
        children: [],
      },
      {
        id: "next",
        name: "Next.js",
        children: [],
      },
      {
        id: "libs",
        name: "Libraries",
        children: [
          { id: "react-query", name: "React query", children: [] },
          { id: "rtk", name: "Redux / RTK", children: [] },
          { id: "zustand", name: "Zustand", children: [] },
          { id: "mui", name: "material-ui", children: [] },
          { id: "jest", name: "Jest", children: [] },
          { id: "framer", name: "Framer-motion", children: [] },
        ],
      },
    ],
  },
  {
    id: "building",
    name: "Build tools",
    children: [
      {
        id: "webpack",
        name: "Webpack",
        children: [],
      },
      {
        id: "vite",
        name: "Vite",
        children: [],
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    children: [
      {
        id: "java",
        name: "Java",
        children: [],
      },
      {
        id: "node",
        name: "Node.js",
        children: [],
      },
    ],
  },
];
