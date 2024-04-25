import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [activeSlide , setActiveSlide] = useState('')
  const [slideLength , setSlideLength] = useState('')

  useEffect(()=>{
    setActiveSlide(document.querySelector('.carousel-cell.active'))
    setSlideLength(document.querySelectorAll('.carousel-cell').length)
  },[])

  const moveNext = ()=>{
    if(activeSlide.nextSibling){
      activeSlide.classList.remove('active')
      activeSlide.nextSibling?.classList.add('active')
      setActiveSlide(activeSlide.nextSibling)
    }
    else{
     alert('You reach at the end')
    }
  } 
  const moveBack = ()=>{
    if(activeSlide.previousSibling){
      activeSlide.classList.remove('active')
      activeSlide.previousSibling.classList.add('active')
      setActiveSlide(activeSlide.previousSibling)
    }
    else{
      alert('You reach at the end')
     }
   
  } 
const addSlide = ()=>{
  const wrapper = document.querySelector('.carousel-cell--wrapper');
  const newDiv = document.createElement('div');
  newDiv.className = `carousel-cell index-${slideLength + 1}`;
  newDiv.textContent = slideLength + 1;
  wrapper.appendChild(newDiv);
  setSlideLength(slideLength + 1)
  
}
const removeSlide = ()=>{
  if(slideLength > 1){
    document.querySelectorAll('.carousel-cell')[slideLength - 1].remove()
   console.log(slideLength , document.querySelectorAll('.carousel-cell')[slideLength - 1])
   setSlideLength(document.querySelectorAll('.carousel-cell').length)
  }
  else{
    alert('You should have atleat one slide ')
  }
}
const changeWithIndex = (event)=>{
console.log(event.target.id , document.querySelector(`.index-${event.target.id}` , slideLength ))
activeSlide.classList.remove('active')
document.querySelector(`.index-${event.target.id}`).classList.add('active')
      setActiveSlide(document.querySelector(`.index-${event.target.id}`))
}
  

  return (
    <>
    <div className='carousel'> 
      
      <div className="carousel-cell--wrapper"> 
        <div className="carousel-cell active index-1">1 </div>
        <div className="carousel-cell index-2" >2 </div>
        <div className="carousel-cell index-3">3 </div>
        <div className="carousel-cell index-4">4 </div>
        <div className="carousel-cell index-5">5 </div>
        <div className="carousel-cell index-6"> 6</div>
        <div className="carousel-cell index-7">7 </div>
        <div className="carousel-cell index-8"> 8</div>
      </div>
      <div className='nextprewbuttons'>
        <span onClick={moveBack} >&#8678;</span>
        <span onClick={moveNext} >&#8680;</span>
    </div>
    </div>
    <div className='slide-with--index'>
  {Array.from(document.querySelectorAll('.carousel-cell')).map((element, index) => (
    <span onClick={(event)=>{changeWithIndex(event)}} key={index} id={index + 1}>{index + 1}</span>
  ))}
</div>
<div className='add-or--remove'>
 <button onClick={removeSlide}> Remove slide </button>
 <button onClick={addSlide}> Add slide</button>
</div>

    </>
  );
}

export default App;
