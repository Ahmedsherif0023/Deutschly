import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import img from "../../public/assets/Image1.jpg";

import brain from "../../public/assets/brain.png";
import book from "../../public/assets/book.png";
import community from "../../public/assets/united.png";
import chat from "../../public/assets/chat-bubble.png";
import Learn from "../../public/assets/Learn.png";

import person1 from "../../public/assets/person1.png";
import person2 from "../../public/assets/person2.png";
import Logo from "../../public/assets/Logo.png";
import Logo2 from "../../public/assets/Logo2.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deutschly" },
    { name: "description", content: "Learn German with Deutschly!" },
  ];
}

export default function Home() {
  return (
    <div>
        <Navbar />
      <div className="Home-container">
        <div className="main">
          <div className="left-section">
            <p className="headd">Unlock Fluency Faster</p>
            <h1>Master German With AI</h1>
            <p className="para">
              Deutschly uses cutting-edge AI to help you spell, build
              vocabulary, and form sentences with confidence. Personalized
              learning for rapid progress.
            </p>
            <a href="/VocabPage">
              {" "}
              <button>Start Learning Now</button>
            </a>
          </div>
          <div className="right-section">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="Second-main">
          <h1>Key Learning Modules</h1>
          <div className="Cards">
            <div className="card">
              <img src={book} alt="" />
              <h1>AI Alphabet Speller</h1>
              <p>
                Learn the German alphabet with AI pronunciation and interactive
                spelling practice.
              </p>
            </div>
            <div className="card">
              <img src={chat} alt="" />
              <h1>Instant Translations</h1>
              <p>
                Get accurate English translations for every word and sentence
                instantly.
              </p>
            </div>
            <div className="card">
              <img src={community} alt="" />
              <h1>Community Support</h1>
              <p>
                Connect with other learners and get help from instructors in our
                supportive community.
              </p>
            </div>
            <div className="card">
              <img src={brain} alt="" />
              <h1>Vocabulary Builder</h1>
              <p>
                Expand your German vocabulary with categorized lists and AI
                audio for perfect pronunciation.
              </p>
            </div>
          </div>
        </div>
        <div className="Third-main">
          <div className="left-section">
            <img src={Learn} alt="Learn image" />
          </div>
          <div className="right-section">
            <h1>How Deutshcly Accelerates Your Learning</h1>
            <p>
              Our AI-powered platform breaks down the complexities of German,
              making it accessible and engaging. From fundamental sounds to
              forming complex sentences, we guide you every step of the way with
              smart tools and clear explanations.
            </p>
            <div className="points">
              <div className="point">
                <div className="point-header">
                  <div className="circle">1</div>
                  <h1>AI Pronunciation</h1>
                </div>
                <p>Hear authentic German spoken by advanced AI.</p>
              </div>
              <div className="point">
                <div className="point-header">
                  <div className="circle">2</div>
                  <h1>Interactive Practice</h1>
                </div>
                <p>Engage with spelling, vocabulary, and sentence exercises.</p>
              </div>
              <div className="point">
                <div className="point-header">
                  <div className="circle">3</div>
                  <h1>Instant Translations</h1>
                </div>
                <p>Understand everything with clear English translations.</p>
              </div>
              <div className="point">
                <div className="point-header">
                  <div className="circle">4</div>
                  <h1>Track Your Growth</h1>
                </div>
                <p>Monitor progress and get personalized insights.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Fourth-main">
          <h1>What Our Learners Say</h1>
          <div className="cards">
            <div className="cardd">
              <p>
                "Deutschly has been a game-changer! The AI pronunciation is spot
                on, and practicing sentences feels like having a personal
                tutor."
              </p>
              <div className="person">
                <img src={person1} alt="1st person image" />
                <p>David P.</p>
              </div>
            </div>
            <div className="cardd">
              <p>
                "I finally feel confident speaking German. The vocabulary
                builder's audio is incredibly helpful, and the translation
                feature saves so much time."
              </p>
              <div className="person">
                <img src={person1} alt="1st person image" />
                <p>David P.</p>
              </div>
            </div>
            <div className="cardd">
              <p>
                "As a complete beginner, I was intimidated, but German Genie
                makes learning fun and easy. The alphabet speller is fantastic!"
              </p>
              <div className="person">
                <img src={person2} alt="2nd person image" />
                <p>Emily L.</p>
              </div>
            </div>
            <div className="cardd">
              <p>
                "The progress tracker keeps me motivated, and the personalized
                suggestions help me focus on areas where I need improvement."
              </p>
              <div className="person">
                <img src={person2} alt="2nd person image" />
                <p>Emily L.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Fifth-main">
          <div className="left-section">
            <h1>Stay Updated with Deutschly</h1>
            <p>
              Get tips, updates, and special offers delivered to your inbox.
            </p>
          </div>
          <div className="right-section">
            <form>
              <input type="text" placeholder="Enter your email address" />
              <button> Subscribe</button>
            </form>
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
      </div>
        <Footer />
    </div>
  );
}
