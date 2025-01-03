import App from 'App';
import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import '@fontsource/poppins';
import '@fontsource/dancing-script';
import './index.css';
import './i18n';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from 'privacy-policy';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import SupportPage from 'support';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <MantineProvider>
    <HashRouter>
      <Routes>
        <Route path="/policy/*" element={<PrivacyPolicy />} />
        <Route path="/support/*" element={<SupportPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </MantineProvider>,
);
