import CartContainer from "./components/cartcontainer";
import Navbar from "./components/navbar";
import data from "./components/data";

function App() {
  return (
    <>
      <Navbar />
      <CartContainer data={data}/>
    </>
  );
}

export default App;
