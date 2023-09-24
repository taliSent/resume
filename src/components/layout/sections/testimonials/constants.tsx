import React from "react";
const PHOTO_PATH = "img/testimonials";
const CARDS = [
  {
    photoSrc: `${PHOTO_PATH}/Denis.jpg`,
    coworkerName: "Denis Dyagilev",
    coworkerPosition: "frontend developer",
    text: (
      <>
        I am a frontend developer. I would like to share my experience of
        working with Natalia. During my work at Cinimex, I worked with Natalia
        on the same project. It was comfortable to work, and I was pleased that
        Natalia helps the rest of the team members.
        <br />
        The code is written thoughtfully and at the same time readable. I think
        that Natalia is an excellent developer and I would gladly agree to work
        together again.
      </>
    ),
    telegram: "purpleleech",
    linkedIn: "https://www.linkedin.com/in/denis-dyagilev-63b562168",
    instagram: "purpleleech",
  },
  {
    photoSrc: `${PHOTO_PATH}/Masha.jpg`,
    coworkerName: "Maria Condaurova",
    coworkerPosition: "frontend developer",
    text: (
      <>
        I've been working with Natalia in Cinimex for about half a year. Natalia
        appeared to be a responsible developer. She responded appropriately to
        the code-review, made suggestions to tasks solution.
        <br />
        She might want to speak louder on meet-ups :)
        <br />I got a positive impression of working with Natalia :)
      </>
    ),
    linkedIn: "https://www.linkedin.com/mwlite/in/мария-кондаурова-6610a7217",
    habr: "https://career.habr.com/momomash",
  },
  {
    photoSrc: `${PHOTO_PATH}/Sveta.jpg`,
    coworkerName: "Svetlana Pedan",
    coworkerPosition: "senior QA",
    text: (
      <>
        I like that Natalia tests her tasks on stands. Before her, developers
        have almost never done that, and now they took that as a rule. It's good
        that she isn't afraid to ask questions. They're problems with estimation
        of tasks, but I think it'll go away with the dive in. Communication with
        Natalia is very comfortable.
      </>
    ),
  },
];

export default CARDS;
