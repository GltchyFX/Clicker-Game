import ResearchButtons from "./ResearchButtons";

// eslint-disable-next-line react/prop-types
export default function ResearchInterface({text, price, onButtonClick}){
  return(
    <div
      className='researchUI'
    >
      <ResearchButtons id={0} text={text} price={price} onButtonClick={() => onButtonClick(0)}/>
      <ResearchButtons id={1} text={text} price={price} onButtonClick={() => onButtonClick(1)}/>
    </div>
  );
}