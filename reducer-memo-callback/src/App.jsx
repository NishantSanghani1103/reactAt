import { useReducer } from "react"

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.val
  }

}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    fname: "",
    lname: "",
    cityName: "",
    stateName: "",
    countryName: "",
    address: ""
  })
  // console.log(state);

  return (
    <>
      <div>USEREDUCER</div>
      <br /><br />
      <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: "fname" })} placeholder="Enter FirstName" name="" id="" />
      <br /><br />
      <input type="text" placeholder="Enter LastName" name="" id="" onChange={(e) => dispatch({ val: e.target.value, type: "lname" })} /><br /><br />
      <input type="text" placeholder="Enter City" name="" id="" onChange={(e) => dispatch({ val: e.target.value, type: "cityName" })} />
      <br /><br />
      <input type="text" placeholder="Enter Sate" name="" id="" onChange={(e) => dispatch({ val: e.target.value, type: "stateName" })} /><br /><br />
      <input type="text" placeholder="Enter Country" name="" id="" onChange={(e) => dispatch({ val: e.target.value, type: "countryName" })} />
      <br /><br />
      <input type="text" placeholder="Enter Address" name="" id="" onChange={(e) => dispatch({ val: e.target.value, type: "address" })} />

      <div>
        <h3>{state.fname}</h3>
        <h4>{state.lname}</h4>
        <h5>{state.cityName}</h5>
        <h5>{state.stateName}</h5>
        <h6>{state.countryName}</h6>
        <p>{state.address}</p>
      </div>
      <hr />
    </>
  )
}

export default App
