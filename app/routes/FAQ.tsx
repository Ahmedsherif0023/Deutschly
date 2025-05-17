import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import Logo from "../../public/assets/Logo.png";
import Logo2 from "../../public/assets/Logo2.png";
const FAQ = () => {
  return (
    <div>
      <Navbar />
      <div className="FAQ-container">
        <div className="FAQ">
        <div className="FAQ-head">
            <h1>❓ FAQ – Deutschly</h1>
            <p>
              Welcome to <strong>Deutschly – </strong> your beginner-friendly app
              for learning German the right way! Here are some common questions
              users ask:
            </p>
            <hr/>
          
        </div>
          <ul>
            <li>
              <h1>What is Deutschly?</h1>
              <p>
                <strong>Deutschly</strong> is a simple and fun app that helps
                you learn German from scratch. You’ll start with the alphabet,
                learn how to pronounce words, master useful vocabulary,
                understand pronouns, and build your first German sentences — all
                in one place.
                <hr/>
              </p>
            </li>
            <li>
              <h1> Is Deutschly good for beginners?</h1>
              <p>
                Absolutely! <strong>Deutschly</strong> is built for total
                beginners. No German skills needed. Just open the app and start
                learning step-by-step.
                <hr/>
              </p>
            </li>
            <li>
              <h1>What will I learn in Deutschly?</h1>
              <p>
                <ul>
                  <li>The full German alphabet.</li>
                  <li>How to pronounce each letter, word, and sentence.</li>
                  <li>Common vocabulary with audio.</li>
                  <li>German pronouns and how to use them.</li>
                  <li>How to form correct sentences in German.</li>
                  <hr/>
                </ul>
              </p>
            </li>
            <li>
              <h1>Does Deutschly teach pronunciation?</h1>
              <p>
                Yes! Every word and sentence in Deutschly includes clear{" "}
                <strong>audio pronunciation</strong> so you can listen, repeat,
                and improve your speaking skills.
                <hr/>
              </p>
            </li>
            <li>
              <h1>Is Deutschly free?</h1>
              <p>
                Yes! All essential features are completely free. In the future,
                we might add some premium features, but the basics will always
                stay free.
                <hr/>
              </p>
            </li>
            <li>
              <h1>Can I use Deutschly offline?</h1>
              <p>
                Some parts of Deutschly (like audio) need internet access. We’re
                working on adding more offline features soon!
                <hr/>
              </p>
            </li>
            <li>
              <h1> Is Deutschly suitable for kids?</h1>
              <p>
                Yes! Deutschly uses easy language, visuals, and sounds — making
                it perfect for both kids and adults starting out.
                <hr/>
              </p>
            </li>
            <li>
              <h1>How quickly can I start speaking German?</h1>
              <p>
                With just 5–10 minutes a day, you’ll start forming simple
                sentences in less than a week!
                <hr/>
              </p>
            </li>
            <li>
              <h1>Do I need to know English to use Deutschly?</h1>
              <p>
                Yes, the app currently uses English for instructions and
                translations — so basic English understanding is helpful.
                <hr/>
              </p>
            </li>
            <li>
              <h1>How can I contact the Deutschly team?</h1>
              <p>
                Have feedback, ideas, or questions? Tap “Contact Us” in the app
                menu or email us at ahmedsherifoo23@gmail.com — we’d love to hear
                from you!
                <hr/>
              </p>
            </li>
          </ul>
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

export default FAQ;
