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

const vocabData = [
  { word: "Apfel", translation: "Apple", category: "Food" },
  { word: "Banane", translation: "Banana", category: "Food" },
  { word: "Orange", translation: "Orange", category: "Food" },
  { word: "Erdbeere", translation: "Strawberry", category: "Food" },
  { word: "Traube", translation: "Grape", category: "Food" },
  { word: "Ananas", translation: "Pineapple", category: "Food" },
  { word: "Kirsche", translation: "Cherry", category: "Food" },
  { word: "Wassermelone", translation: "Watermelon", category: "Food" },
  { word: "Pfirsich", translation: "Peach", category: "Food" },
  { word: "Birne", translation: "Pear", category: "Food" },
  { word: "Kaffee", translation: "Coffee", category: "Food" },
  { word: "Vasser", translation: "Water", category: "Food" },
  { word: "Bier", translation: "Beer", category: "Food" },
  { word: "Wein", translation: "Wine", category: "Food" },
  { word: "Brot", translation: "Bread", category: "Food" },
  { word: "Butter", translation: "Butter", category: "Food" },
  { word: "Käse", translation: "Cheese", category: "Food" },
  { word: "Fleisch", translation: "Meat", category: "Food" },
  { word: "Salat", translation: "Salad", category: "Food" },
  { word: "Suppe", translation: "Soup", category: "Food" },
  { word: "Reis", translation: "Rice", category: "Food" },
  { word: "Nudeln", translation: "Pasta", category: "Food" },
  { word: "Fisch", translation: "Fish", category: "Food" },
  { word: "Hähnchen", translation: "Chicken", category: "Food" },
  { word: "Schinken", translation: "Ham", category: "Food" },
  { word: "Wurst", translation: "Sausage", category: "Food" },
  { word: "Zucker", translation: "Sugar", category: "Food" },
  { word: "Salz", translation: "Salt", category: "Food" },
  { word: "Pfeffer", translation: "Pepper", category: "Food" },
  { word: "Öl", translation: "Oil", category: "Food" },
  { word: "Essig", translation: "Vinegar", category: "Food" },

  { word: "Hund", translation: "Dog", category: "Animals" },
  { word: "Vogel", translation: "Bird", category: "Animals" },
  { word: "Fisch", translation: "Fish", category: "Animals" },
  { word: "Pferd", translation: "Horse", category: "Animals" },
  { word: "Kuh", translation: "Cow", category: "Animals" },
  { word: "Schaf", translation: "Sheep", category: "Animals" },
  { word: "Hase", translation: "Rabbit", category: "Animals" },
  { word: "Maus", translation: "Mouse", category: "Animals" },
  { word: "Vieh", translation: "Livestock", category: "Animals" },
  { word: "Katze", translation: "Cat", category: "Animals" },
  { word: "Esel", translation: "Donkey", category: "Animals" },
  { word: "Zebra", translation: "Zebra", category: "Animals" },
  { word: "Löwe", translation: "Lion", category: "Animals" },
  { word: "Tiger", translation: "Tiger", category: "Animals" },
  { word: "Elefant", translation: "Elephant", category: "Animals" },
  { word: "Affe", translation: "Monkey", category: "Animals" },
  { word: "Känguru", translation: "Kangaroo", category: "Animals" },
  { word: "Giraffe", translation: "Giraffe", category: "Animals" },
  { word: "Nashorn", translation: "Rhinoceros", category: "Animals" },
  { word: "Krokodil", translation: "Crocodile", category: "Animals" },
  { word: "Schlange", translation: "Snake", category: "Animals" },
  { word: "Frosch", translation: "Frog", category: "Animals" },
  { word: "Eule", translation: "Owl", category: "Animals" },
  { word: "Fuchs", translation: "Fox", category: "Animals" },
  { word: "Bär", translation: "Bear", category: "Animals" },
  { word: "Igel", translation: "Hedgehog", category: "Animals" },
  { word: "Käfer", translation: "Beetle", category: "Animals" },
  { word: "Schmetterling", translation: "Butterfly", category: "Animals" },
  { word: "Spinne", translation: "Spider", category: "Animals" },
  { word: "Ameise", translation: "Ant", category: "Animals" },
  { word: "Biene", translation: "Bee", category: "Animals" },
  { word: "Wespe", translation: "Wasp", category: "Animals" },

  { word: "Hallo", translation: "Hello", category: "Greetings" },
  { word: "Guten Tag", translation: "Good Day", category: "Greetings" },
  { word: "Guten Morgen", translation: "Good Morning", category: "Greetings" },
  { word: "Guten Abend", translation: "Good Evening", category: "Greetings" },
  { word: "Tschüss", translation: "Bye", category: "Greetings" },
  { word: "Hallo", translation: "Hello", category: "Greetings" },
  { word: "Guten Morgen", translation: "Good Morning", category: "Greetings" },
  { word: "Guten Tag", translation: "Good Day", category: "Greetings" },
  { word: "Guten Abend", translation: "Good Evening", category: "Greetings" },
  { word: "Gute Nacht", translation: "Good Night", category: "Greetings" },
  { word: "Tschüss", translation: "Bye", category: "Greetings" },
  { word: "Auf Wiedersehen", translation: "Goodbye", category: "Greetings" },
  { word: "Wie geht's?", translation: "How are you?", category: "Greetings" },
  { word: "Mir geht's gut.", translation: "I am fine.", category: "Greetings" },
  { word: "Danke", translation: "Thank you", category: "Greetings" },
  { word: "Bitte", translation: "Please", category: "Greetings" },
  { word: "Entschuldigung", translation: "Excuse me", category: "Greetings" },
  { word: "Ja", translation: "Yes", category: "Greetings" },
  { word: "Nein", translation: "No", category: "Greetings" },
  { word: "Vielleicht", translation: "Maybe", category: "Greetings" },
  {
    word: "Ich verstehe nicht.",
    translation: "I don't understand.",
    category: "Greetings",
  },
  {
    word: "Sprechen Sie Englisch?",
    translation: "Do you speak English?",
    category: "Greetings",
  },
  {
    word: "Ich spreche ein wenig Deutsch.",
    translation: "I speak a little German.",
    category: "Greetings",
  },
  {
    word: "Wie heißen Sie?",
    translation: "What is your name?",
    category: "Greetings",
  },
  { word: "Ich heiße...", translation: "My name is...", category: "Greetings" },
  {
    word: "Freut mich, Sie kennenzulernen.",
    translation: "Nice to meet you.",
    category: "Greetings",
  },
  {
    word: "Woher kommen Sie?",
    translation: "Where are you from?",
    category: "Greetings",
  },
  {
    word: "Ich komme aus...",
    translation: "I come from...",
    category: "Greetings",
  },
  {
    word: "Wie alt sind Sie?",
    translation: "How old are you?",
    category: "Greetings",
  },
  {
    word: "Ich bin ... Jahre alt.",
    translation: "I am ... years old.",
    category: "Greetings",
  },
  {
    word: "Was machen Sie beruflich?",
    translation: "What do you do?",
    category: "Greetings",
  },
  {
    word: "Ich bin ...",
    translation: "I am ...",
    category: "Greetings",
  },
  {
    word: "Ich bin Student.",
    translation: "I am a student.",
    category: "Greetings",
  },
  {
    word: "Ich arbeite als...",
    translation: "I work as...",
    category: "Greetings",
  },

  { word: "Stuhl", translation: "Chair", category: "Everyday Objects" },
  { word: "Tisch", translation: "Table", category: "Everyday Objects" },
  { word: "Lampe", translation: "Lamp", category: "Everyday Objects" },
  { word: "Bett", translation: "Bed", category: "Everyday Objects" },
  { word: "Sofa", translation: "Sofa", category: "Everyday Objects" },
  { word: "Regal", translation: "Shelf", category: "Everyday Objects" },
  { word: "Fenster", translation: "Window", category: "Everyday Objects" },
  { word: "Tür", translation: "Door", category: "Everyday Objects" },
  { word: "Teppich", translation: "Carpet", category: "Everyday Objects" },
  { word: "Spiegel", translation: "Mirror", category: "Everyday Objects" },
  {
    word: "Kühlschrank",
    translation: "Refrigerator",
    category: "Everyday Objects",
  },
  { word: "Herd", translation: "Stove", category: "Everyday Objects" },
  {
    word: "Mikrowelle",
    translation: "Microwave",
    category: "Everyday Objects",
  },
  {
    word: "Waschmaschine",
    translation: "Washing Machine",
    category: "Everyday Objects",
  },
  {
    word: "Geschirrspüler",
    translation: "Dishwasher",
    category: "Everyday Objects",
  },
  {
    word: "Fernseher",
    translation: "Television",
    category: "Everyday Objects",
  },
  { word: "Computer", translation: "Computer", category: "Everyday Objects" },
  { word: "Telefon", translation: "Phone", category: "Everyday Objects" },
  { word: "Tastatur", translation: "Keyboard", category: "Everyday Objects" },
  { word: "Maus", translation: "Mouse", category: "Everyday Objects" },
  { word: "Drucker", translation: "Printer", category: "Everyday Objects" },
  { word: "Bleistift", translation: "Pencil", category: "Everyday Objects" },
  { word: "Papier", translation: "Paper", category: "Everyday Objects" },
  { word: "Heft", translation: "Notebook", category: "Everyday Objects" },
  { word: "Buch", translation: "Book", category: "Everyday Objects" },
  { word: "Stift", translation: "Pen", category: "Everyday Objects" },
  { word: "Radiergummi", translation: "Eraser", category: "Everyday Objects" },
  { word: "Lineal", translation: "Ruler", category: "Everyday Objects" },
  { word: "Schere", translation: "Scissors", category: "Everyday Objects" },
  { word: "Kleber", translation: "Glue", category: "Everyday Objects" },
  { word: "Ordner", translation: "Folder", category: "Everyday Objects" },
  {
    word: "Aktenvernichter",
    translation: "Shredder",
    category: "Everyday Objects",
  },
  { word: "Tacker", translation: "Stapler", category: "Everyday Objects" },
  { word: "Notizblock", translation: "Notepad", category: "Everyday Objects" },
  { word: "Lesen", translation: "Reading", category: "Hobbies" },
  { word: "Schreiben", translation: "Writing", category: "Hobbies" },
  { word: "Sport", translation: "Sports", category: "Hobbies" },
  { word: "Musik", translation: "Music", category: "Hobbies" },
  { word: "Tanzen", translation: "Dancing", category: "Hobbies" },
  { word: "Reisen", translation: "Traveling", category: "Hobbies" },
  { word: "Kochen", translation: "Cooking", category: "Hobbies" },
  { word: "Fotografieren", translation: "Photography", category: "Hobbies" },
  { word: "Malen", translation: "Painting", category: "Hobbies" },
  { word: "Gärtnern", translation: "Gardening", category: "Hobbies" },
  { word: "Schwimmen", translation: "Swimming", category: "Hobbies" },
  { word: "Laufen", translation: "Running", category: "Hobbies" },
  { word: "Fahrradfahren", translation: "Cycling", category: "Hobbies" },
  { word: "Angeln", translation: "Fishing", category: "Hobbies" },
  { word: "Wandern", translation: "Hiking", category: "Hobbies" },
  { word: "Spielen", translation: "Playing", category: "Hobbies" },
  {
    word: "Filme schauen",
    translation: "Watching Movies",
    category: "Hobbies",
  },
  {
    word: "Serien schauen",
    translation: "Watching Series",
    category: "Hobbies",
  },
  {
    word: "Videospiele spielen",
    translation: "Playing Video Games",
    category: "Hobbies",
  },
  {
    word: "Brettspiele spielen",
    translation: "Playing Board Games",
    category: "Hobbies",
  },
  {
    word: "Musikinstrument spielen",
    translation: "Playing Musical Instruments",
    category: "Hobbies",
  },
  { word: "Singen", translation: "Singing", category: "Hobbies" },
  { word: "Schach spielen", translation: "Playing Chess", category: "Hobbies" },
  { word: "Karten spielen", translation: "Playing Cards", category: "Hobbies" },
  { word: "Lernen", translation: "Learning", category: "Hobbies" },
  { word: "Meditation", translation: "Meditation", category: "Hobbies" },
  { word: "Yoga", translation: "Yoga", category: "Hobbies" },
  { word: "Fitness", translation: "Fitness", category: "Hobbies" },
  { word: "Wellness", translation: "Wellness", category: "Hobbies" },
  { word: "Entspannung", translation: "Relaxation", category: "Hobbies" },
  {
    word: "Selbstentwicklung",
    translation: "Self-Development",
    category: "Hobbies",
  },
  { word: "Essen", translation: "Eating", category: "Hobbies" },
  { word: "Arbeiten", translation: "Working", category: "Work" },
  { word: "Besprechung", translation: "Meeting", category: "Work" },
  { word: "Projekt", translation: "Project", category: "Work" },
  { word: "Kollege", translation: "Colleague", category: "Work" },
  { word: "Chef", translation: "Boss", category: "Work" },
  { word: "Büro", translation: "Office", category: "Work" },
  { word: "Aufgabe", translation: "Task", category: "Work" },
  { word: "Bericht", translation: "Report", category: "Work" },
  { word: "Präsentation", translation: "Presentation", category: "Work" },
  { word: "E-Mail", translation: "Email", category: "Work" },
  { word: "Telefonat", translation: "Phone Call", category: "Work" },
  { word: "Kunde", translation: "Customer", category: "Work" },
  { word: "Vertrag", translation: "Contract", category: "Work" },
  { word: "Rechnung", translation: "Invoice", category: "Work" },
  { word: "Budget", translation: "Budget", category: "Work" },
  { word: "Ziel", translation: "Goal", category: "Work" },
  { word: "Deadline", translation: "Deadline", category: "Work" },
  { word: "Feedback", translation: "Feedback", category: "Work" },
  { word: "Fortbildung", translation: "Training", category: "Work" },
  { word: "Bewerbung", translation: "Application", category: "Work" },
  { word: "Vorstellungsgespräch", translation: "Interview", category: "Work" },
  { word: "Einstellung", translation: "Hiring", category: "Work" },
  { word: "Entlassung", translation: "Termination", category: "Work" },
  { word: "Urlaub", translation: "Vacation", category: "Work" },
  { word: "Überstunden", translation: "Overtime", category: "Work" },
  { word: "Gehalt", translation: "Salary", category: "Work" },
  { word: "Betriebsausflug", translation: "Company Outing", category: "Work" },
  { word: "Teambuilding", translation: "Team Building", category: "Work" },
  { word: "Networking", translation: "Networking", category: "Work" },
  { word: "Karriere", translation: "Career", category: "Work" },
  { word: "Fortschritt", translation: "Progress", category: "Work" },
  { word: "Erfolg", translation: "Success", category: "Work" },

  // ...add more words and categories as needed
];
const VocabPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredVocab =
    selectedCategory === "All Categories"
      ? vocabData
      : vocabData.filter((v) => v.category === selectedCategory);

  const searchedVocab = filteredVocab.filter(
    (v) =>
      v.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="Vocabulary-container">
        <div className="Categories">
          <div className="Find">
            <div className="Find1">
              <h1>Find Words</h1>
              <div className="SearchInputWrapper">
                <img src={search} alt="search icon" className="SearchIcon" />
                <input
                  type="text"
                  name="Search"
                  className="SearchInput"
                  placeholder="Search German or English"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>{" "}
            <hr />
            <div className="Find1">
              <h1>Categories</h1>
              <ul>
                {[
                  "All Categories",
                  "Food",
                  "Animals",
                  "Everyday Objects",
                  "Greetings",
                  "Hobbies",
                  "Work",
                ].map((category) => (
                  <li key={category}>
                    <button onClick={() => setSelectedCategory(category)}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="Vocab">
          {searchedVocab.map(({ word, translation, category }, idx) => (
            <Card
              key={word + category + idx} // Add idx to make the key unique
              title={word}
              p={translation}
              category={category}
              onPronounce={() => speakGerman(word)}
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

export default VocabPage;
