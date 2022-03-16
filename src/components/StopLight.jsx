import { useEffect } from "react"

const StopLight = ({lights, setLights}) => { // removed props

  useEffect(()=>{
    console.log(lights)
  },[lights])
 
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
          <button onClick = {()=>{
            if(lights.red === true && lights.yellow === true && lights.green === true){
              setLights({red: false, yellow: false, green: false})
            }
            if(lights.red === true && lights.yellow === true && lights.green === false){
              setLights({...lights, green: true})
            }
            if(lights.red === true && lights.yellow === false && lights.green === false){
              setLights({...lights, yellow: true})
            }
            if(lights.red === false && lights.yellow === false && lights.green === false){
              setLights({...lights, red: true})
            }
          }}
            className="countdown"
            // onCLick here
          >
          {lights.red && lights.yellow && lights.green ? "Reset" : "Countdown"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopLight
