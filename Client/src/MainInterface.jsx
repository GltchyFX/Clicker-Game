// eslint-disable-next-line react/prop-types
export default function MainInterface({clicks, onButtonClick}){
  return(
    <div
      className='mainUI'
    >
      <h1
        className='instructionHeader'
      >
        Click the Button
      </h1>
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