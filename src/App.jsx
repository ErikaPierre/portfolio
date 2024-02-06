import { useState } from "react";
import "./App.css";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projet from "./components/Projet";
import Skill from "./components/Skill";

import airbnb from "./assets/images/airbnb-clone.jpg";
import portfolio from "./assets/images/Section → portfolio-website-5e5ff6dc.jpg.jpg";
import Pomodoro from "./assets/images/Section → Pomodoro-app-bdd41802.jpg.jpg";
import markdown from "./assets/images/Section → In-browser-markdown-editor-5dffac4c.jpg.jpg";
import rest from "./assets/images/Section → REST-Countries-API-3c61139c.jpg.jpg";
import Calculator from "./assets/images/Section → Calculator-App-671f73d2.jpg.jpg";
import Drum from "./assets/images/Drum-machine-39e3fb93.jpg.jpg";
import Space from "./assets/images/Space-tourism-website-2d4e3d9a.jpg.jpg";
import Random from "./assets/images/Section → Random-quote-app-6953f22c.jpg.jpg";

const projets = [
  {
    imageUrl: airbnb,
    name: "AIRBNB-CLONE-2023",
    langages: ["TAILWIND", "TYPESCRIPT", "REACT", "MONGODB"],
  },
  {
    imageUrl: portfolio,
    name: "PORTFOLIO",
    langages: ["TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: Pomodoro,
    name: "POMODORO APP",
    langages: ["TAILWIND", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: markdown,
    name: "EDITEUR MARKDOWN",
    langages: [" SCSS", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: rest,
    name: "REST COUNTRIES API",
    langages: ["CSS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: Calculator,
    name: "APPLICATION DE CALCULATRICE",
    langages: ["SCSS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: Drum,
    name: "DRUM MACHINE",
    langages: ["STYLED-COMPONENTS", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: Space,
    name: "SITE DE TOURISME DANS L'ESPACE",
    langages: ["HTML", "CSS", "TYPESCRIPT"],
  },
  {
    imageUrl: Random,
    name: "RANDOM QUOTE APP",
    langages: ["CSS", "REACT", "API"],
  },
];

function App() {
  const [projetFilter, setProjetFilter] = useState(projets);
  const [choiceLangages, setNewChoice] = useState("");

  function filteredProjet(e) {
    e.preventDefault();
    setProjetFilter(
      projets.filter((projet) =>
        projet.langages
          .map((langage) => langage.toLowerCase())
          .includes(choiceLangages.toLowerCase())
      )
    );
    setNewChoice("");
  }

  return (
    <>
      <Header />
      <Skill />

      <div className="div_header_projet">
        <h1>Projets</h1>
        <div className="div_input_projet">
          <input
            type="text"
            placeholder="Choix du framework"
            value={choiceLangages}
            onChange={(e) => setNewChoice(e.target.value)}
          />
          <button className="div_projet_button" onClick={filteredProjet}>
            Choisir
          </button>
        </div>
      </div>

      <div className="wrapper">
        {projetFilter.map((projet) => {
          return (
            <Projet
              key={projet.name}
              imageUrl={projet.imageUrl}
              name={projet.name}
              langages={projet.langages}
            />
          );
        })}
      </div>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
