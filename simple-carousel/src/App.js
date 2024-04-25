import './App.css';
import {useState} from 'react'

function App() {

  const [activeSlide , setActiveSlide] = useState('')
  return (
    <>
    <div> 
      <div className="cell-wrapper"> 
      
        <div className="active cell">1 </div>
        <div className="cell">2 </div>
        <div className="cell">3 </div>
        <div className="cell">4 </div>
        <div className="cell">5 </div>
        <div className="cell"> 6</div>
        <div className="cell">7 </div>
        <div className="cell"> 8</div>
      
      
      </div>
    </div>
    <span>prev</span>
    <span>next</span>
    </>
  );
}

export default App;
