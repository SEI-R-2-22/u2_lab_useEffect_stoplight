const StopLight = ({lights, setLights}) => {
console.log(lights)
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
            onClick={()  => {
            if (lights.red && lights.yellow && lights.green){
              setLights({red: false, yellow: false, green: false})
              console.log("set all to false")
            } else if (lights.red && lights.yellow) {
              setLights({...lights, green: true})
              console.log("set green light to true")
            } else if (lights.red){
              setLights({...lights, yellow: true})
              console.log("set yellow to true")
            } else  {
              console.log("set red to true")
              setLights({...lights, red: true})
            }
          }}>
          Countdown
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopLight
