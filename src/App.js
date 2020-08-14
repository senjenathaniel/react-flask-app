import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      const [currentTime, setCurrentTime] = useState(0);

      useEffect(() => {
        fetch('/time').then(res.json()).then(data => {
          setCurrentTime(data.time)
        })
      }, [])

      return (
      <div className="App">
        <header className="App-header">
          <p>The current time is {currentTime} </p>
        </header>
      </div>
      )
    </div>
  );
}

export default App;
