import Header from "./Layouts/Header";
import Content from "./Layouts/Content";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Login />
      </Content>
    </div>
  );
}

export default App;
