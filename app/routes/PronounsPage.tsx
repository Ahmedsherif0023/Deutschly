import React, { useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import Logo from "../../public/assets/Logo.png";
import Logo2 from "../../public/assets/Logo2.png";
import Card from "~/components/Card/Card";
import search from "../../public/assets/search.png";

const speakGerman = (text: string) => {
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  window.speechSynthesis.speak(utterance);
};

const singularPronouns = [
  { word: "ich", translation: "I" },
  { word: "du", translation: "you (informal singular)" },
  { word: "er", translation: "he" },
  { word: "sie", translation: "she" },
  { word: "es", translation: "it" },
];

const pluralPronouns = [
  { word: "wir", translation: "we" },
  { word: "ihr", translation: "you (informal plural)" },
  { word: "sie", translation: "they" },
  { word: "Sie", translation: "you (formal singular & plural)" },
];
const PronounsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="Pronouns-container">
        <div className="left-container">
          <h1>Singular Pronouns</h1>
          {singularPronouns.map((p) => (
            <Card
            key={p.word}
            title={p.word}
            p={p.translation}
            onPronounce={() => speakGerman(p.word)}
            />
          ))}
        </div>
        <div className="right-container">
          <h1>Plural Pronouns</h1>
          {pluralPronouns.map((p) => (
            <Card
              key={p.word}
              title={p.word}
              p={p.translation}
              onPronounce={() => speakGerman(p.word)}
            />
          ))}
        </div>
      </div>

      <div className="Sixth-main">
        <div className="AppName">
          <img src={Logo2} alt="Logo" />
        </div>
        <div className="Navs-head">
          <h1>Learn</h1>
          <h1>About</h1>
          <h1>Support</h1>
        </div>
        <div className="Navs">
          <ul>
            <li>
              <a href="/AlphabetPage">Alphabet</a>
            </li>
              <li>
              <a href="/PronounsPage">Pronouns</a>
            </li>
            <li>
              <a href="/VocabPage">Vocabulary</a>
            </li>
            <li>
              <a href="/SentenceFormPage">Sentences</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/OurMission">Our Mission</a>
            </li>
            <li>
              <a href="/Team">The Team</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/ContactUs">Contact Us</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PronounsPage;
