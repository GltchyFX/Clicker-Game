import UpgradeButtons from "./UpgradeButtons";

// eslint-disable-next-line react/prop-types
export default function UpgradesInterface({price, onButtonClick}){
  return(
    <div>
      <UpgradeButtons id={0} CPCIncrement={"+1"} price={price} onButtonClick={() => onButtonClick(0)} />
      <UpgradeButtons id={1} CPCIncrement={"+5"} price={price} onButtonClick={() => onButtonClick(1)}/>
      <UpgradeButtons id={2} CPCIncrement={"+10"} price={price} onButtonClick={() => onButtonClick(2)}/>
      <UpgradeButtons id={3} CPCIncrement={"1.5x"} price={price} onButtonClick={() => onButtonClick(3)}/>
      <UpgradeButtons id={4} CPCIncrement={"2x"} price={price} onButtonClick={() => onButtonClick(4)}/>
    </div>
  );
}