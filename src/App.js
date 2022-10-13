import logo from './logo.svg';
import './App.css';
import SignMessage from './components/signMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Ethers.js</code> application
        </p>
      </header>
      <SignMessage />
    </div>
  );
}

export default App;
