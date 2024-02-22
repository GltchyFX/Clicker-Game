// eslint-disable-next-line react/prop-types
export default function ResearchButtons({id, text, price, onButtonClick}){
  return(
    <div>
      <button
        className='researchButton'
        id={id}
        onClick={onButtonClick}
      >
        {text[id]} {price[id]} Clicks
      </button>
    </div>
  );
}