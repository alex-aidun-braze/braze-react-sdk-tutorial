// @ts-check

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import * as braze from "@braze/web-sdk";
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    braze.subscribeToContentCardsUpdates(function (event) {
      setCards(event.cards);
    });
    braze.requestContentCardsRefresh();

    braze.subscribeToInAppMessage(function (inAppMessage) { 
      if (inAppMessage instanceof braze.InAppMessage) { 
        const extras = inAppMessage.extras;
        if (extras) {
          for (const key in extras) {
            if (key == 'display' && extras[key] == 'homepage'){
              braze.showInAppMessage(inAppMessage);
            }
          }
        }
      }})
    braze.openSession();
  }, [setCards]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/contentcards' element={<ContentCards cards={cards} />} />
      </Routes>
    </Router>
  );
}

export default App;