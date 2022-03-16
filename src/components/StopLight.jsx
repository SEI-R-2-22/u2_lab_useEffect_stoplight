const StopLight = ({lights, setLights}) => {

  
  return (
    <div className="action-area">
      <h1>Stoplight useEffect</h1>
      <div className="stoplight-container">
        <div className="stoplight">
          <div className={lights.red ? 'red' : undefined}></div>
          <div className={lights.yellow ? 'yellow' : undefined}></div>
          <div className={lights.green ? 'green' : undefined}></div>
        </div>
        <div>
          <button
            className="countdown"
            // onCLick here
            onClick={()=> {
              if(lights.red === true && lights.yellow === true && lights.green === true) {
                setLights({red: false, yellow: false, green: false})
              } else if (lights.red === true && lights.yellow === true) {
                setLights({...lights, green: true})
              } else if (lights.red === true) {
                setLights({...lights, yellow: true})
              } else {
                setLights({...lights, red: true})
              }
            }}
          >
          {lights.red && lights.yellow && lights.green ? "Reset" : "Countdown"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopLight
