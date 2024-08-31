
import pizza from './pizza_image2.png'
import './App.css';
import PizzaList from './pizzerias/pizzeriaslist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
          Web app for pizza lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList />
      </header>
      
    </div>
  );
}

export default App;
