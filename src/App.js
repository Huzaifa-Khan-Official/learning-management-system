import { useState } from 'react';
import './App.css';
import Router from './Configuration/Router';
import Loader from './Context/Context';

function App() {
  const [loader, setLoader] = useState(false);
  return (
    <div className="App">
      <Loader.Provider value={[loader, setLoader]}>
        <Router />
      </Loader.Provider>
    </div>
  );
}

export default App;
