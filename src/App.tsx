import React from 'react';
import Header from 'components/header';
import Giraff from 'assets/Giraff_only.svg';
import './App.css';
import { Anchor, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>MiniGenie.</h1>
          <h2>
            <span className="Slogan">
              <br />
              Raising the <span>future</span>
            </span>
          </h2>
          <Group>
            <Anchor component={Link} to="/support">
              Support
            </Anchor>
            <Anchor component={Link} to="/policy">
              Privacy Policy
            </Anchor>
          </Group>
        </section>
        <section>
          <Giraff className="Logo" />
        </section>
      </main>
    </>
  );
}
