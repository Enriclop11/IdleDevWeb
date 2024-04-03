import React, {} from 'react';
import Stats from './components/Stats';
import Button from './components/Button';
import lc from "./model/LC";
import UpgradesList from "./model/Upgrades";
import UpgradeComponent from "./components/UpgradeComponent";

function App() {
    const handleProgramHTML = () => {
      lc.addLc(10);
      lc.saveInLocalStorage();
    }

    const resetGame = () => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <div className="container">
        <Button onClick={resetGame}>Reset Game</Button>
      <Stats/>
      <Button onClick={handleProgramHTML}>Programar web</Button>
        <div className="upgradesList">
            {UpgradesList.map((upgrade, index) => (
                <UpgradeComponent key={index} upgrade={upgrade}/>
            ))}
        </div>
    </div>
  );
}

export default App;
