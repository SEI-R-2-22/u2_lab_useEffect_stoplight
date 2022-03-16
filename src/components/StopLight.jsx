import React from 'react'

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
            onClick={() => {
              if(lights.red || lights.yellow || lights.green) {
                setLights ({red: false, yellow: false, green: false})
                console.log('all red')}

                if(lights.red && lights.yellow && !lights.green) {
                  setLights ({...lights, green: true})
                  console.log('green light')}

                  if(lights.red && !lights.yellow && !lights.green) {
                    setLights ({...lights, yellow: true})
                    console.log('yellow light')}

                    if(!lights.red && !lights.yellow && !lights.green) {
                      setLights ({...lights, red:true})
                      console.log('red light')}
                      
            }
          }
          
          >
           {lights.red && lights.yellow && lights.green ? "Reset" : "Countdown"}
          </button>
        </div>
      </div>
    </div>
  )
}


export default StopLight


   // const [lights, setLights] = useState({red: false, yellow: false, green: false})

    // useEffect(() => {
    //   console.log(lights)
      
    // }, [lights])

    // const changeLight = () => {
    //   if(lights.red && lights.yellow && lights.green) {
    //     setLights ({red: false, yellow: false, green: false})
    //     console.log('all grey')}

    //     if(lights.red && lights.yellow && lights.green) {
    //       setLights ({...lights, green: true})
    //       console.log('green light')}

    //       if(lights.red && lights.yellow && lights.green) {
    //         setLights ({...lights, yellow: true})
    //         console.log('yellow light')}

    //         if(lights.red && lights.yellow && lights.green) {
    //           setLights ({...lights, red:true})
    //           console.log('red light')}
      

    
 