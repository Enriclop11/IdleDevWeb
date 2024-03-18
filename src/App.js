import React, { useState } from 'react';
import Stats from './components/Stats';
import Button from './components/Button';

function App() {
  const [lc, setLC] = useState(0);
  const [htmlUpgradeLevel, setHtmlUpgradeLevel] = useState(0);
  const [cssUpgradeLevel, setCssUpgradeLevel] = useState(0);

  const handleProgramHTML = () => {
    setLC(prevLC => prevLC + 10);
  };

  const handleHtmlUpgrade = () => {
    const upgradeCost = 100 * Math.pow(2, htmlUpgradeLevel);
    if (lc >= upgradeCost) {
      setLC(prevLC => prevLC - upgradeCost);
      setHtmlUpgradeLevel(prevLevel => prevLevel + 1);
      startHtmlAutoGeneration();
    } else {
      alert('Insufficient LC');
    }
  };

  const handleCssUpgrade = () => {
    const upgradeCost = 150 * Math.pow(2, cssUpgradeLevel);
    if (lc >= upgradeCost) {
      setLC(prevLC => prevLC - upgradeCost);
      setCssUpgradeLevel(prevLevel => prevLevel + 1);
      startCssAutoGeneration();
    } else {
      alert('Insufficient LC');
    }
  };
  const startHtmlAutoGeneration = () => {
    setInterval(() => {
      setLC(prevLC => prevLC + 5 * Math.pow(2, htmlUpgradeLevel));
    }, 5000);
  };
  
  const startCssAutoGeneration = () => {
    setInterval(() => {
      setLC(prevLC => prevLC + 8 * Math.pow(2, cssUpgradeLevel));
    }, 5000);
  };
  

  return (
    <div className="container">
      <Stats lc={lc} />
      <Button onClick={handleProgramHTML}>Programar web</Button>
      <div className="upgrade">
        <Button onClick={handleHtmlUpgrade}>Upgrade HTML ({100 * Math.pow(2, htmlUpgradeLevel)} LC)</Button>
      </div>
      <div className="upgrade">
        <Button onClick={handleCssUpgrade}>Upgrade CSS ({150 * Math.pow(2, cssUpgradeLevel)} LC)</Button>
      </div>
    </div>
  );
}

export default App;