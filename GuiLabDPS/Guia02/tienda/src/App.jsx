import "./App.css";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="App">
      <h2>Lista de productos</h2>
      <div className="App-content">
        <ProductList />
      </div>
    </div>
  );
};

export default App;
