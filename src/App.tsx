import React from 'react';
import Header from 'components/header';
import Giraff from 'assets/Giraff_only.svg';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>MiniGenie.</h1>
          <h2>
            Our shop is coming soon <br />
            to help you {''}
            <span className="Slogan">
              <br />
              &quot;Raising the <span>future</span>&quot;
            </span>
          </h2>
        </section>
        <section>
          <Giraff className="Logo" />
        </section>
      </main>
    </>
  );
}
