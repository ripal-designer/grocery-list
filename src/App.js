import './App.css';

import Glist from './components/Glist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <div className='row'>
      <div class="d-flex align-self-center justify-content-center mb-3" style={{height: "100vh",
    alignItems: "center"}}>
          <Glist /> </div>
    
     </div></div>
    </div>
  );
}

export default App;
