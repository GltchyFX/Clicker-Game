import { useState } from 'react';
import './App.css'

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [CPC, setCPC] = useState(1);
  const [upgradePrice, setUpgradePrice] = useState(100);

  function handleClicks(){
    setClicks(clicks + CPC);
  }

  function handleUpgrades(){
    if(clicks >= upgradePrice){
      setClicks(clicks - upgradePrice);
      setCPC(CPC * 2);
      setUpgradePrice((upgradePrice * 1.5).toFixed());
    }
  }

  return(
    <>
      <div>
        <h1
          className='instructionHeader'
        >
          Click the Button
        </h1>
      </div>
      <div>
        <button
          className='clickButton'
          onClick={handleClicks}
        >
          Click Me
        </button>
        <h3
          className='clicksHeader'
        >
          Clicks: {clicks}
        </h3>
      </div>
      <div>
        <button
          className='upgradeButton'
          onClick={handleUpgrades}
        >
          x2 CpC: {upgradePrice} Clicks
        </button>
      </div>
    </>
  );
}
