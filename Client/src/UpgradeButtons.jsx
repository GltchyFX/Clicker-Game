// eslint-disable-next-line react/prop-types
export default function UpgradeButtons({id, CPCIncrement, price, onButtonClick}){
  return(
    <div>
      <button
        className='upgradeButton'
        id={id}
        onClick={onButtonClick}
        >
        {CPCIncrement} CpC: {price[id]} Clicks
      </button>
    </div>
  );
}