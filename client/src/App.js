import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";
import Offers from "./Components/Offers";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Categories />
        <Offers />
      </main>
    </>
  );
}

export default App;
