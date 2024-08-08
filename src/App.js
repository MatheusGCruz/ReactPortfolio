import logo from './logo.svg';
import './App.css';



import HTMLFlipBook  from "react-pageflip";
import Videos from "./Pages/Videos"
import Music from "./Pages/Music"
import Dracula from './Pages/Dracula/Dracula';
import DraculaP1 from './Pages/Dracula/DraculaP1';
import DraculaP2 from './Pages/Dracula/DraculaP2';
import DraculaP3 from './Pages/Dracula/DraculaP3';
import DraculaP4 from './Pages/Dracula/DraculaP4';
import DraculaP5 from './Pages/Dracula/DraculaP5';
import DraculaP6 from './Pages/Dracula/DraculaP6';
import DraculaP7 from './Pages/Dracula/DraculaP7';
import DraculaP8 from './Pages/Dracula/DraculaP8';
import DraculaP9 from './Pages/Dracula/DraculaP9';

function App() {
  const pages = ['page 5', 'page 6', 'page 7', 'page 8']
  const widthValue = 1000;
  const heightValue = 1000;

  return (
    <div className="App">
      <HTMLFlipBook         
          width={widthValue}
          height={heightValue}
          clickEventForward='false'
          isUserTouch='false'>
        <div > Side-Cover</div> 
        <div className="frontCover"> 
          <image src="./Images/Celestial.png"></image>
        </div> 
        <div className="leftPage"> <Music /></div>
	      <div className="rightPage"><Videos /></div>
	      <div className="leftPage">  </div>
	      <div className="rightPage"> <Dracula/> </div>
        <div className="leftPage"> <DraculaP1/> </div>
	      <div className="rightPage"> <DraculaP2/> </div>
        <div className="leftPage"> <DraculaP3/> </div>
	      <div className="rightPage"> <DraculaP4/> </div>
        <div className="leftPage"> <DraculaP5/> </div>
	      <div className="rightPage"> <DraculaP6/> </div>
        <div className="leftPage"> <DraculaP7/> </div>
	      <div className="rightPage"> <DraculaP8/> </div>
        <div className="leftPage"> <DraculaP9/> </div>
	      <div className="rightPage"> </div>

        { pages.map( (page) => <div className="flipPage"> {page} </div>) }
	      <div className="backCover"> BackCover </div>
	      <div > side End </div>

      </HTMLFlipBook>

    </div>    
  );
}

export default App;
