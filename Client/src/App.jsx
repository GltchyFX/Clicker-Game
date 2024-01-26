import { useEffect, useState } from 'react';
import './App.css'
import MainInterface from './MainInterface';
import UpgradesInterface from './UpgradesInterface';

// eslint-disable-next-line react/prop-types
function ResetButton({onButtonClick}){
  return(
    <div>
      <button
        className='researchUI resetButton'
        onClick={onButtonClick}
      >
        RESET DATA
      </button>
    </div>
  );
}

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const localClickValue = localStorage.getItem("CLICKS");
    if(localClickValue == null){
      return 0;
    }
    return JSON.parse(localClickValue);
  });

  const [CPC, setCPC] = useState(() => {
    const localCPCValue = localStorage.getItem("CPC");
    if(localCPCValue == null){
      return 1;
    }
    return JSON.parse(localCPCValue);
  });

  const [upgradePrice, setUpgradePrice] = useState(() => {
    const localPriceValue = localStorage.getItem("PRICE");
    if(localPriceValue == null){
      return [100, 250, 750, 3250, 10000];
    }
    return JSON.parse(localPriceValue);
  });

  useEffect(() => {
    localStorage.setItem("CLICKS", JSON.stringify(clicks));
    localStorage.setItem("CPC", JSON.stringify(CPC));
    localStorage.setItem("PRICE", JSON.stringify(upgradePrice));
  }, [clicks, CPC, upgradePrice]);

  function clickHandler(){
    setClicks(clicks + CPC);
  }

  function upgradeHandler(id){
    if(clicks >= upgradePrice[id]){
      setClicks(clicks - upgradePrice[id]);
      let priceArray = upgradePrice.slice();
      switch(id){
        case 0:
          setCPC(CPC + 1);
          priceArray[id] = (priceArray[id] * 1.15).toFixed();
          break;
        case 1:
          setCPC(CPC + 5);
          priceArray[id] = (priceArray[id] * 1.3).toFixed();
          break;
        case 2:
          setCPC(CPC + 10);
          priceArray[id] = (priceArray[id] * 1.5).toFixed();
          break;
        case 3:
          setCPC(Number((CPC * 1.5).toFixed()));
          priceArray[id] = (priceArray[id] * 1.95).toFixed();
          break;
        case 4:
          setCPC(CPC * 2);
          priceArray[id] = (priceArray[id] * 2.25).toFixed();
      }
      setUpgradePrice(priceArray);
    }
  }

  function resetData(){
    setClicks(0);
    setCPC(1);
    setUpgradePrice([100, 250, 750, 3250, 10000]);
    localStorage.clear();
  }

  return(
    <>
      <ResetButton onButtonClick={() => resetData()}/>
      <MainInterface clicks={clicks} onButtonClick={() => clickHandler()} />
      <UpgradesInterface price={upgradePrice} onButtonClick={upgradeHandler}/>
    </>
  );
}
