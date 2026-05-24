import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './styles.css';
import './case-study.css';
import { Home } from './pages/Home';
import { CaseStudyGenAI } from './pages/CaseStudyGenAI';
import { CaseStudyAnalytics } from './pages/CaseStudyAnalytics';
import { CaseStudyRoaming } from './pages/CaseStudyRoaming';

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root in index.html');

createRoot(root).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-1" element={<CaseStudyGenAI />} />
        <Route path="/case-study-2" element={<CaseStudyAnalytics />} />
        <Route path="/case-study-3" element={<CaseStudyRoaming />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
