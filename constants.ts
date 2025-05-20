// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Ranjeet Kumar Verma",
  description:
    "I like to take responsibility for crafting aesthetic and intuitive user experiences through thoughtful UX/UI design..",
  siteUrl: "https://ranjeetverma.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "a UX/UI designer",
  "I design interfaces",
  "I shape experiences",
  "I build design systems",
  "I create interactions",

];

export const EMAIL = "ranjeetkumarverma8811@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "http://www.linkedin.com/in/ranjeet-kumar-verma-66a866278",
  // github: "https://github.com/ayush013",
  // medium: "https://alphaayush.medium.com/",
  // instagram: "https://www.instagram.com/alphaayush/",
  // facebook: "https://www.facebook.com/ayush013",
  // dribbble: "https://dribbble.com/alphaayush",
  behance: "https://www.behance.net/ranjeetkumarverma88",
  // twitter: "https://twitter.com/ayush013",
  // topmate: "https://www.topmate.io/alphaayush/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Dharastha Land Registration",
    image: "/projects/Dharashtra.jpg",
    blurImage: "/projects/blur/Dharashtra.jpg",
    description: "Dharastha Landregistration app | UX/UI Case Study |.",
    gradient: ["#81B99A", "#B4DA45"],
    url: "https://www.behance.net/gallery/225922221/DHARASTHA-Land-Registration-App-UXUI-Case-Study-",
    tech: ["figma", "illustrator","AdobePhotoshop"],
  },
  {
    name: "Dharastha Website",
    image: "/projects/d1.jpg",
    blurImage: "/projects/blur/d1.jpg",
    description: "Dharasrtha Website UI Design",
    gradient: ["#B4DA45", "#81B99A"],
    url: "https://www.behance.net/gallery/226192271/DHARASTHA-Landing-page-Website-UI-design",
    tech: ["figma", "illustrator"],
  },
  {
    name: "Redesigning the Resort Experience",
    image: "/projects/redesign.jpg",
    blurImage: "/projects/blur/resedign.jpg",
    description: "A Digital Transformation Through UX & Smart Technology",
    gradient: ["#418891", "#FEF5ED"],
    url: "https://www.behance.net/gallery/226275993/Rededign-the-Resort-Experience-UXUI-Case-Study-",
    tech: ["figma", "AdobePhotoshop"],
  },
  
  {
    name: "Valorant Agents",
    image: "/projects/valo.jpg",
    blurImage: "/projects/blur/valo.jpg",
    description: "Valorant Agents | Landing page | UI design",
    gradient: ["#ff4654", "#131a2c"],
    url: "https://www.behance.net/gallery/204077611/VALORANT-AGENTS-(webpage-design-concept)",
    tech: ["figma", "AdobePhotoshop"],
  },
  {
    name: "Adidas Shoes Landing Page",
    image: "/projects/adid.jpg",
    blurImage: "/projects/blur/adid.jpg",
    description: "Adidas Shoes Landing Page  Design Concept | Website UI Design |",
    gradient: ["#9e9e9e", "#2f2f2f"],
    url: "https://www.behance.net/gallery/203748749/ADIDAS-SHOES-WEBSITE-DESIGN-CONCEPT-UI-DESIGN/",
    tech: ["figma", "AdobePhotoshop"],
  },
  {
    name: "Social Media Post",
    image: "/projects/socialm.jpg",
    blurImage: "/projects/blur/socialm.jpg",
    description: "Social Media Creative Post Design",
    gradient: ["#2f2f2f", "#38b3dd"],
    url: "https://www.behance.net/gallery/221897853/SOCIAL-MEDIA-POST-CREATIVE",
    tech: ["AdobePhotoshop", "illustrator", "aftereffects"],
  },
  {
    name: "Sri Ram Jewellers",
    image: "/projects/jewel.jpg",
    blurImage: "/projects/blur/jewel.jpg",
    description: "Logo Design",
    gradient: ["#172839", "#334659"],
    url: "https://www.behance.net/gallery/172979779/Sri-Ram-JEWELRY-BRAND",
    tech: ["AdobePhotoshop", "illustrator"],
  },
  // {
  //   name: "Alpha Aesthetics",
  //   image: "/projects/alpha.jpg",
  //   blurImage: "/projects/blur/alpha-blur.jpg",
  //   description: "Designed and developed the platform",
  //   gradient: ["#172839", "#334659"],
  //   url: "https://alpha-aesthetics.ayushsingh.net/",
  //   tech: ["illustrator", "javascript", "angular"],
  // },
  // {
  //   name: "Amantrya - Polling Web App",
  //   image: "/projects/farewell18.jpg",
  //   blurImage: "/projects/blur/farewell18-blur.jpg",
  //   description: "Dark mode dated from 2017 🔥",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://farewell18.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "BDC 2018 Web Portal",
  //   image: "/projects/bdc18.jpg",
  //   blurImage: "/projects/blur/bdc18-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#470700", "#712A23"],
  //   url: "https://bdc2018.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Scrolls 2017 - Website",
  //   image: "/projects/scrolls.jpg",
  //   blurImage: "/projects/blur/scrolls-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#685506", "#7B6921"],
  //   url: "https://scrolls-17.ayushsingh.net/",
  //   tech: ["angular", "html", "css"],
  // },
  // {
  //   name: "Cardize - Visiting Cards",
  //   image: "/projects/cardize.jpg",
  //   blurImage: "/projects/blur/cardize-blur.jpg",
  //   description: "First web project! Custom visiting card generator",
  //   gradient: ["#552A04", "#614023"],
  //   url: "https://cardize.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
];

export const SKILLS = {
  softwareskills: [
    "figma",
    "Autocad",
    "Maya",
    "Blender",
    "illustrator",
    "AdobePhotoshop",
    "AdobeInDesign",
    "AdobePremierepro",
    "AdobeAftereffect",
    
  ],
  softskills: ["goal", "innovative", "lead", "teamwork"],
  // other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "United Pixel",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025 - PRESENT ",
    size: ItemSize.SMALL,
    subtitle:
      "Graphic Design Intern </br> Social Media Post",
    // image: "/timeline/reactindia.svg",
    slideImage: "/timeline/UPlogo.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Sattuz",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
  type: NodeTypes.CHECKPOINT,
  title: "Aug 2024 - April 2025",
  size: ItemSize.SMALL,
  subtitle: `Visual Design Intern. </br>Designed packaging and marketing visuals, created engaging social media content, and managed brand strategy and audience engagement for Sattuz. `,
  // image: "/timeline/UPlogo.jpg",

  slideImage: "/timeline/Sattuzlogo.jpg",
  shouldDrawLine: true,
  alignment: Branch.LEFT,
},
{
    type: NodeTypes.CHECKPOINT,
    title: "Excel Global Sourcing",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
},
  
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2021",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
{
    type: NodeTypes.CHECKPOINT,
    title: "Jan 2024 - April 2024",
    size: ItemSize.SMALL,
    subtitle: `Furniture/Graphic Design Intern. </br> Created 3D furniture models, designed the company catalog, edited promotional videos, and supported cohesive branding efforts.`,
    // subtitleDescription: "Jan 2024 - April 2024",
    // image: "/timeline/Sattuzlogo.jpg",
    slideImage: "/timeline/Excellogo@4x.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,

},
{
    type: NodeTypes.CHECKPOINT,
    title: "Repair My Mobile",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
},
{
    type: NodeTypes.CHECKPOINT,
    title: "Dec 2023 - Feb 2024",
    size: ItemSize.SMALL,
    subtitle:
      `Graphic Design Intern <br> Designed banners and instagram post. </br> Created Youtube thumbnail. </br> Produced and edited promotional video.`,
    // subtitledescription: "Dec 2023 - Feb 2024",
    // image: "/timeline/Excellogo@4x.jpg",
    slideImage: "/timeline/RMMlogo-3.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
},
{
    type: NodeTypes.CHECKPOINT,
    title: "Education",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
},
{
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor of Design (B.Des)",
    size: ItemSize.SMALL,
    subtitle:
      `National Institute of Fashion Technology
, </br>Patna, Bihar, India <br> 2022-2026`,
    // image: "/timeline/Excellogo@4x.jpg",
    slideImage: "/timeline/niftlogo.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
},
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Education",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
{
    type: NodeTypes.CHECKPOINT,
    title: "Intermediate",
    size: ItemSize.SMALL,
    subtitle:
      `Guru Gobind Singh Public School, </br>Chas, Bokaro, Jharkhand <br> 2019-2021`,
    // image: "/timeline/Excellogo@4x.jpg",
    slideImage: "/timeline/ggpslogo.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
},

{
    type: NodeTypes.CHECKPOINT,
    title: "Secondary",
    size: ItemSize.SMALL,
    subtitle:
      `Guru Gobind Singh Public School, </br>Chas, Bokaro, Jharkhand <br> 2019`,
    // image: "/timeline/Excellogo@4x.jpg",
    slideImage: "/timeline/ggpslogo.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
},
// {
//     type: NodeTypes.CHECKPOINT,
//     title: "2020",
//     size: ItemSize.LARGE,
//     shouldDrawLine: false,
//     alignment: Branch.LEFT,
// },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  
//   {
//     type: NodeTypes.CHECKPOINT,
//     title: "GraphicDesign Intern",
//     size: ItemSize.SMALL,
//     subtitle: `Designed banners and Instagram posts,
// Produced and edited promotional
// videos,
// Created YouTube thumbnails`,
//     image: "/timeline/RMMlogo-3.jpg",
//     slideImage: "/timeline/aftereffects.jpg",
//     shouldDrawLine: true,
//     alignment: Branch.LEFT,
//   },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2019",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
  //   image: "/timeline/dltlabs.svg",
  //   slideImage: "/timeline/dlt-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UX Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from College 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
  //   image: "/timeline/akgec.svg",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2018",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Student lead at SDC-SI",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-head.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on SVG animations",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

  //   slideImage: "/timeline/svg-lecture.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed against 20+ teams for design and development of web project from scratch",
  //   slideImage: "/timeline/ims-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Design, ABES ACM",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed in web and graphic design challenge with 100+ participants.",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Web Technologies",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
  //   slideImage: "/timeline/web-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2016",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
  //   slideImage: "/timeline/ims-16.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI/UX, Frontend Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2014",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Recognized Themer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
  //   image: "/timeline/xda.svg",
  //   slideImage: "/timeline/xda-rt.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
