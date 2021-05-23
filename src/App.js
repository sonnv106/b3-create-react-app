import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["Go to market", "Buy food", "Make dinner"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {todos.map(todo=>
            <li>{todo}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
