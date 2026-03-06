
import './App.css'

function App() {

  const handleGrandParent = () => {
    console.log("grandParent");

  }
  const handlearent = () => {
    console.log("Parent");

  }
  const handleChild = (e) => {
    console.log("child");
    // e.stopPropagation()
  }
  return (
    <>
      <section style={{ width: "500px", height: "500px", background: "red", color: "white" }} onClickCapture={handleGrandParent}>
        <div>
          Grand Parent Click
        </div>
        <section style={{ width: "300px", height: "300px", background: "black", color: "white", margin: "0px auto" }} onClickCapture={handlearent} >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            Parent Click
          </div>
          <section style={{ width: "200px", height: "200px", background: "purple", color: "white", margin: "0px auto" }} onClickCapture={handleChild}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              child Click
            </div>
          </section>
        </section>
      </section>
    </>
  )
}

export default App
