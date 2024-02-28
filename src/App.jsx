import { useState, useEffect } from 'react';
import './App.css';
import CRT from './CRT';

function App() {
 const [selectedIndex, setSelectedIndex] = useState(0);

 const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 3));
        break;
      case 'ArrowDown':
        setSelectedIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
        break;
      default:
        break;
    }
 };

 useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
 }, []);

 const itemsToDisplay = [
    (selectedIndex - 1 + 4) % 4,
    selectedIndex,
    (selectedIndex + 1) % 4,
 ];

 return (
    < >
      <div className="crt-container">
        <CRT>
          <pre className="ascii-art">
            {`██╗░░░██╗░░░██╗░░░░█████╗░░░░░██████╗
██║░░░██║░░░██║░░░██╔══██╗░░░██╔════╝
╚██╗░██╔╝░░░██║░░░██║░░██║░░░╚█████╗░
░╚████╔╝░░░░██║░░░██║░░██║░░░░╚═══██╗
░░╚██╔╝░░██╗██║██╗╚█████╔╝██╗██████╔╝
░░░╚═╝░░░╚═╝╚═╝╚═╝░╚════╝░╚═╝╚═════╝░`}
          </pre>
          {itemsToDisplay.map((index) => (
            <div
              key={index}
              className={`m ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => console.log(`Item ${index} clicked`)}
            >
              {['create account', 'login', 'enter', 'settings'][index]}
            </div>
          ))}
        </CRT>
        <p className="footer">Property of VIOS (Virtual Icon Of Skrylla)</p>
        <div className="instructions">Use the arrow keys to navigate. Press Enter to select.</div>
      </div>
    </>
 );
}

export default App;
