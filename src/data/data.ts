export interface Habit {
  img: string;
  title: string;
}

export interface Experience {
  time: string;
  name: string;
  isSchool?: boolean;
  title: string;
}

export interface Skill {
  img: string;
  cat: string;
  catM: string;
  text: string;
}

export interface Work {
  img: string;
  link: string;
  title: string;
  cat: string;
  text: string;
}

export interface Data {
  habit: Habit[];
  experience: Experience[];
  skill: Skill[];
  works: Work[];
}

const data: Data = {
  habit: [
    {
      img: "img/habit_draw.svg",
      title: "Like illustration"
    },
    {
      img: "img/habit_hiking.svg",
      title: "Like Hiking"
    },
    {
      img: "img/habit_video.svg",
      title: "Like Dramas, Movie, Animate"
    },
    {
      img: "img/habit_cat.svg",
      title: "Love Cat"
    },
  ],
  experience: [
    {
      time: "JUL 2024 ‒<br>present",
      // name: "E-Commerce",
      name: "Readmoo",
      title: "Front-end Developer",
    },
    {
      time: "MAY 2021 ‒<br>APR 2023",
      // name: "E-Commerce",
      name: "PChome Corp.",
      title: "Front-end Developer",
    },
    {
      time: "SEP 2018 ‒<br>MAY 2020",
      // name: "Software company",
      name: "17 Life",
      title: "UI Designer",
    },
    {
      time: "SEP 2013 ‒<br>JUN 2017",
      name: "Shih Chien University",
      title: "Master of Design,</br>Communications Design",
      isSchool: true,
    },
    {
      time: "JUL 2012 ‒<br>FEB 2015",
      name: "SanMin Publisher",
      title: "Graphic Design",
    },
  ],
  skill: [
    {
      img: "img/icon_skill03.png",
      cat: "Front-end",
      catM: "前端開發",
      text: `React / Next.js Ecosystem、TypeScript、Tailwind、RWD、Git、AWS Amplify`,
    },
    {
      img: "img/icon_skill02.png",
      cat: "User Interface",
      catM: "介面設計",
      text: `Design System、Prototype、Wireframe、Responsive Design`,
    },
    {
      img: "img/icon_skill01.png",
      cat: "Communication",
      catM: "媒體傳達設計",
      text: `Ps、Ai、inDesign、AnimateCC、AfterEffect`,
    },
  ],
  works: [ //固定七個
    {
      img: "img/works_meowforest.jpg",
      link: "https://daylilystudio.github.io/meowforest",
      title: "Meow Forest EC",
      cat: "F2E & UI",
      text: `Vue3, Pinia, Tailwind, naive-ui`,
    },
    {
      img: "img/works_crm.gif",
      link: "https://daylilystudio.github.io/crm/",
      title: "CRM System",
      cat: "F2E & UI",
      text: `Vue3, Vuex, Typescript, Element Plus`,
    },
    {
      img: "img/works_mask.jpg",
      link: "https://daylilystudio.github.io/maskmap",
      title: "Taiwan Mask Map",
      cat: "F2E & UI",
      text: `Vue3, Tailwind, Mapbox GL JS`,
    },
    {
      img: "img/works_todolist.jpg",
      link: "https://daylilystudio.github.io/react-todolist",
      title: "Todo List",
      cat: "F2E & UI",
      text: `React (ver.18), Tailwind`,
    },
    {
      img: "img/works_daylily.jpg",
      link: "https://daylily.tw",
      title: "Daylily illustration",
      cat: "F2E & UI",
      text: `Next App Router, Cache component, Tailwind`,
    },
    {
      img: "img/works_c.jpg",
      link: "works/c/index.html",
      title: "C T K website",
      cat: "F2E & UI",
      text: `A site by custom WordPress theme`,
    },
    {
      img: "img/works_uber.jpg",
      link: "works/union/index.html",
      title: "Uber Eats",
      cat: "F2E & UI",
      text: `A campaign with GSAP.js`,
    },
  ],
};

export default data;
