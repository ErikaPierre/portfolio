import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projet from "./components/Projet";
import Skill from "./components/Skill";

const projets = [
  {
    imageUrl: "images/airbnb-clone-2023-360e5996.jpg.jpg",
    name: "AIRBNB-CLONE-2023",
    langages: ["TAILWIND", "TYPESCRIPT", "REACT", "MONGODB"],
  },
  {
    imageUrl: "images/Section → portfolio-website-5e5ff6dc.jpg.jpg",
    name: "PORTFOLIO",
    langages: ["TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "images/Section → Pomodoro-app-bdd41802.jpg.jpg",
    name: "POMODORO APP",
    langages: ["TAILWIND", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "images/Section → In-browser-markdown-editor-5dffac4c.jpg.jpg",
    name: "EDITEUR MARKDOWN",
    langages: [" SCSS", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "images/Section → REST-Countries-API-3c61139c.jpg.jpg",
    name: "REST COUNTRIES API",
    langages: ["CSS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: "images/Section → Calculator-App-671f73d2.jpg.jpg",
    name: "APPLICATION DE CALCULATRICE",
    langages: ["SCSS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: "images/Drum-machine-39e3fb93.jpg.jpg",
    name: "DRUM MACHINE",
    langages: ["STYLED-COMPONENTS", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "images/Space-tourism-website-2d4e3d9a.jpg.jpg",
    name: "SITE DE TOURISME DANS L'ESPACE",
    langages: ["HTML", "CSS", "TYPESCRIPT"],
  },
  {
    imageUrl: "images/Section → Random-quote-app-6953f22c.jpg.jpg",
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
