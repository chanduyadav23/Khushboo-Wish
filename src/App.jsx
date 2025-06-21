import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [step, setStep] = useState(0);

  const handleGiftClick = () => setStep(1);
  const handleCakeClick = () => setStep(2);

  return (
    <div className="container">
      {/* Background Video */}
      {step > 0 && (
        <video autoPlay loop muted className="background-video">
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gift */}
      {step === 0 && <div className="gift" onClick={handleGiftClick}>🎁</div>}

      {/* Cake */}
      {step === 1 && <div className="cake" onClick={handleCakeClick}>🎂</div>}

      {/* Celebration Message */}
      {step === 2 && (
        <div className="celebration">
          <div className="emojis">🎉🎈💖✨🥳</div>
          <h1>Khushboo, you are the sweetest gift in my life.</h1>
          <div className="message-box">
            <p>Wishing you a very Happy Birthday, Khushboo 🎂<br />
            May your day be filled with smiles, love, and sweet memories.<br />
            You’re truly a beautiful soul — stay happy, always.</p>
            <p>May Lord Krishna bless you with endless joy, love, and peace.<br />
            You deserve all the happiness in the world and I feel lucky to know you.</p>
            <p>Happy Birthday Khushboo 🤗🎂❤️</p>
            <footer>— From Chandu Yadav ❤️</footer>
          </div>
          <div className="btn-container">
              <a className="wish-btn" href="/gallery.html">Click for a Sweet Surprise 💝</a>
            </div>
        </div>
      )}
    </div>
  );
}
