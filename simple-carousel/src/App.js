import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [activeSlide , setActiveSlide] = useState('')

  useEffect(()=>{
    setActiveSlide(document.querySelector('.carousel-cell.active'))
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

const changeWithIndex = (event)=>{
console.log(event.target.id , document.querySelector(`.index-${event.target.id}`))
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
    </>
  );
}

export default App;
