import * as React from "react";
import "./PortfolioPage.css";

//Assets
import SchieEX from "../../assets/schieex2.png";
import EivindsCafe from "../../assets/eivindscafe2.png";
import Bright from "../../assets/bright.png";
import GreekBook from "../../assets/greekbook.png";
import Eminus from "../../assets/eminus.png";

//Components
import PortfolioDisplay from "../../components/PortfolioDisplay/PortfolioDisplay";

const projectInfo = [
  {
    title: "SchieEX, a “fake” crypto trading platform",
    desc:
      "This project was our exam delivery for Native Android Development, \n" +
      "where we created an application for buying crypto prices.\n" +
      "We used the coincap.io API to get coin prices in real-time, allowing the application to be as realistic as possible. The backend was used with SQlite, so the user could have persistant storage.",
    image: SchieEX,
    url: "https://github.com/JSourianos/androidexam",
  },
  {
    title: "Eivinds Cafe, UX Interface Exam",
    desc:
      "This project was our exam delivery for “Grensesnittdesign”, which was a course in User Experience Design.\n" +
      "We used class-based React to design the frontend.",
    image: EivindsCafe,
    url: "https://grensesnitt-exam.netlify.app/",
  },
  {
    title: "BR!GHT, Agile Project Exam",
    desc:
      "This project was a huge group project in collaboration with BR!GHT, which is a Norwegian based company that sells solar-powered lamps to poor countries in Africa.\n" +
      "\n" +
      "We used React Native to create this application. UX was a big part of the solution, as we had to adjust for the possibility that people might not know how to read. We solved this with tons of user testing, and designed the app in such a way that you wouldn’t need to know how to read to use it.",
    image: Bright,
    url: "https://github.com/Ammar1992-MK/pro201-smidigprosjekt",
  },
  {
    title: "GreekBook, Web Development Exam",
    desc:
      "This project was a solo exam, where I created a small application that allows you to register a user with Google, and enter the application. The app allows for chatting, with a group chat and private chat. The library that was used for chatting was Socket.io, and the entire app was written with React, using hooks.\n" +
      "\n" +
      "This app also has testing in it, where Jest was the technology used for writing tests.",
    image: GreekBook,
    url: "https://github.com/JSourianos/GreekBook",
  },
  {
    title: "Eminus, eCommerce Website",
    desc: "Eminus is a Norwegian clothing business, who specializes in Vintage Clothing and resell. I function as the main developer of the website, and I also manage some of the business aspects, such as receving payments and organizing the designers, making sure that clothes being sold from the website reaches the customer.",
    image: Eminus,
    url: "https://www.eminus.no",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <div className="container">
        <h3>Some of my proudest projects</h3>
        <div className="display-container">
          {projectInfo.map((project) => {
            return (
              <PortfolioDisplay
                href={project.url}
                title={project.title}
                desc={project.desc}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
