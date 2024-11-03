// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Notfound from '../src/pages/Notfound';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
      <>
      
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
        </>
    );
};

export default App;