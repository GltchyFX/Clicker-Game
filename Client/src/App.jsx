import { useState } from 'react';
import './App.css'

// eslint-disable-next-line react/prop-types
function ClickerButton({clicks, onButtonClick}){
  return(
    <div>
       <button
         className='clickButton'
         onClick={onButtonClick}
       >
         Click Me
      </button>
      <h3
        className='clicksHeader'
      >
        Clicks: {clicks}
      </h3>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function UpgraderButton({price, onButtonClick}){
  return(
    <div>
        <button
          className='upgradeButton'
          onClick={onButtonClick}
        >
          x2 CpC: {price} Clicks
        </button>
      </div>
  );
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [CPC, setCPC] = useState(1);
  const [upgradePrice, setUpgradePrice] = useState(100);

  function clickHandler(){
    setClicks(clicks + CPC);
  }

  function upgradeHandler(){
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
      <ClickerButton clicks={clicks} onButtonClick={() => clickHandler()} />
      <UpgraderButton price={upgradePrice} onButtonClick={() => upgradeHandler()}/>
    </>
  );
}
