// eslint-disable-next-line react/prop-types
export default function MainInterface({clicks, onButtonClick}){
  return(
    <div>
      <h1
        className='mainUI instructionHeader'
      >
        Click the Button
      </h1>
      <button
        className='mainUI clickButton'
        onClick={onButtonClick}
      >
        Click Me
      </button>
      <h3
        className='mainUI clicksHeader'
      >
        Clicks: {clicks}
      </h3>
    </div>
  );
}