import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/components/home/home.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Home />); //etiquetas de autocierre

