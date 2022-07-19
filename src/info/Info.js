import self from "../img/portfolio.png";
import mock2 from "../img/mock2.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  
  
  initials: "Reacjs", 
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
  baseColor: colors[0],
  portfolio: [

    {
      title: "Project 1",
      live: "#", 
      source: "#", 
      image: mock2,
    },
    {
      title: "Project 2",
      live: "#",
      source: "#",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "#",
      source: "#",
      image: mock2,
    },
    {
      title: "Project 4",
      live: "#",
      source: "#",
      image: mock5,
    },
    {
      title: "Project 5",
      live: "#",
      source: "#",
      image: mock5,
    },
  ],
};
