import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export function App() {

  return (
    <>

        <div className="container-fluid">

            <div className="row">

                <Header/>

                <LeftSide/>

                <RightSide/>

            </div>

        </div>

    </>

  );
}

export default App;