import React, { useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import Logo from "../../public/assets/Logo.png";
import Logo2 from "../../public/assets/Logo2.png";
import Card from "~/components/Card/Card";
// German alphabet letters (A-Z, including Ä, Ö, Ü, ß)
const germanAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ä",
  "Ö",
  "Ü",
  "ß",
];

const germanPronounce = [
  "Ah",
  "Bay",
  "Ts-eh",
  "Day",
  "Eh",
  "Eff",
  "Ghay",
  "Ha",
  "Ee",
  "Yot",
  "Ka",
  "Ell",
  "Emm",
  "Enn",
  "Oh",
  "Pay",
  "Koo",
  "Err",
  "Ess",
  "Tay",
  "Oo",
  "Fow",
  "Vay",
  "Iks",
  "Üpsilon",
  "Tsett",
  "Eh (umlaut)",
  "Oe (umlaut)",
  "Ue(umlaut)",
  "Ess-tsett",
];

const speakGerman = (text: string) => {
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE"; // German
  window.speechSynthesis.speak(utterance);
};

const exampleWords: Record<string, { word: string; translation: string }[]> = {
  A: [
    { word: "Apfel", translation: "apple" },
    { word: "Auto", translation: "car" },
    { word: "Angst", translation: "fear" },
  ],
  B: [
    { word: "Buch", translation: "book" },
    { word: "Baum", translation: "tree" },
    { word: "Brot", translation: "bread" },
  ],
  C: [
    { word: "Café ", translation: "café" },
    { word: "Computer", translation: "computer" },
    { word: "Champignon ", translation: "mushroom" },
  ],
  D: [
    { word: "Dach", translation: "roof" },
    { word: "Dorf", translation: "village" },
    { word: "Danke", translation: "thank you" },
  ],
  E: [
    { word: "Ei", translation: "egg" },
    { word: "Essen", translation: "food / to eat" },
    { word: "Esel", translation: "donkey" },
  ],
  F: [
    { word: "Fisch", translation: "fish" },
    { word: "Freund", translation: "friend (male)" },
    { word: "Frau", translation: "woman" },
  ],
  G: [
    { word: "Garten", translation: "garden" },
    { word: "Geld", translation: "money" },
    { word: "Glück", translation: "luck / happiness" },
  ],
  H: [
    { word: "Haus", translation: "house" },
    { word: "Hund", translation: "dog" },
    { word: "Hemd", translation: "shirt" },
  ],
  I: [
    { word: "Insel", translation: "island" },
    { word: "Idee", translation: "idea" },
    { word: "Instrument", translation: "instrument" },
  ],
  J: [
    { word: "Jahr", translation: "year" },
    { word: "Junge", translation: "boy" },
    { word: "Jacke", translation: "jacket" },
  ],
  K: [
    { word: "Katze", translation: "cat" },
    { word: "Kaffee", translation: "coffee" },
    { word: "Koffer", translation: "suitcase" },
  ],
  L: [
    { word: "Liebe", translation: "love" },
    { word: "Lampe", translation: "lamp" },
    { word: "Leben", translation: "life" },
  ],
  M: [
    { word: "Mutter", translation: "mother" },
    { word: "Mann", translation: "man" },
    { word: "Milch", translation: "milk" },
  ],
  N: [
    { word: "Nacht", translation: "night" },
    { word: "Nase", translation: "nose" },
    { word: "Name", translation: "name" },
  ],
  O: [
    { word: "Obst", translation: "fruit" },
    { word: "ohr", translation: "ear" },
    { word: "oma", translation: "grandma" },
  ],
  P: [
    { word: "Papa", translation: "dad" },
    { word: "Pferd", translation: "horse" },
    { word: "Papier", translation: "paper" },
  ],
  Q: [
    { word: "Qualität", translation: "quality" },
    { word: "Quelle", translation: "source / spring" },
    { word: "Quiz", translation: "quiz" },
  ],
  R: [
    { word: "Regen", translation: "rain" },
    { word: "Rose", translation: "rose" },
    { word: "Rad", translation: "wheel / bike" },
  ],
  S: [
    { word: "Sonne", translation: "sun" },
    { word: "Stuhl", translation: "chair" },
    { word: "Schule", translation: "school" },
  ],
  T: [
    { word: "Tisch", translation: "table" },
    { word: "Tür", translation: "door" },
    { word: "Tag", translation: "day" },
  ],
  U: [
    { word: "Uhr", translation: "clock" },
    { word: "Ufer", translation: "shore / bank" },
    { word: "Umwelt", translation: "environment" },
  ],
  V: [
    { word: "Vater", translation: "father" },
    { word: "Vogel", translation: "bird" },
    { word: "Versuch", translation: "attempt / experiment" },
  ],
  W: [
    { word: "Wasser", translation: "water" },
    { word: "Welt", translation: "world" },
    { word: "Wort", translation: "word" },
  ],
  X: [
    { word: "Xylofon", translation: "xylophone" },
    { word: "Xanthin", translation: "xanthine (a chemical compound)" },
    { word: "Xenon", translation: "xenon (a chemical element)" },
  ],
  Y: [
    { word: "Yoga", translation: "yoga" },
    { word: "Yeti", translation: "yeti" },
    { word: "Yacht", translation: "yacht" },
  ],
  Z: [
    { word: "Zug", translation: "train" },
    { word: "Zeit", translation: "time" },
    { word: "Zucker", translation: "sugar" },
  ],
  Ä: [
    { word: "Ärger", translation: "anger" },
    { word: "Ähre", translation: "ear (of grain)" },
    { word: "Ärztin", translation: "female doctor" },
  ],
  Ö: [
    { word: "Öl", translation: "oil" },
    { word: "Öffnung", translation: "opening" },
    { word: "Österreich", translation: "Austria" },
  ],
  Ü: [
    { word: "Über", translation: "over/about" },
    { word: "Übung", translation: "exercise" },
    { word: "Übel", translation: "evil" },
  ],
  ß: [
    { word: "Maß", translation: "measure" },
    { word: "Fuß", translation: "foot" },
    { word: "Spaß", translation: "fun" },
  ],
};

const AlphabetPage = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  return (
    <div>
      <Navbar />
      <div className="AlphabetLearning-container">
        <div className="Headd">
          <h1>Learn the German Alphabet</h1>
          <p>Click on a letter to hear its pronunciation</p>
        </div>

        <div className="pronouncee">
          <div className="Cards">
            {germanAlphabet.map((letter, idx) => (
              <Card
                key={letter}
                title={letter}
                p={germanPronounce[idx]}
                onPronounce={() => speakGerman(letter)}
                onClick={() => setSelectedLetter(letter)}
              />
            ))}
          </div>
          <div className="WordExamples">
            {selectedLetter && (
              <div>
                <h3>Words with "{selectedLetter}"</h3>
                <ul>
                  {(exampleWords[selectedLetter] || []).map(
                    ({ word, translation }, idx) => (
                      <li
                        key={word + translation + idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span>{word}</span>
                        <span style={{ color: "#888" }}>({translation})</span>
                        <button
                          onClick={() => speakGerman(word)}
                          style={{ marginLeft: 8 }}
                        >
                          🔊
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
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

export default AlphabetPage;
