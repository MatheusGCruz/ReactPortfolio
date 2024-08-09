import './App.css';



import HTMLFlipBook  from "react-pageflip";
import Videos from "./Pages/Videos"
import Music from "./Pages/Music"
import {returnPages} from './Files/DraculaPages';
import useScreenSize from './Functions/ScreenSize';

function App() {
  const widthValue = 1000;
  const heightValue = 800;

  const draculaPages = returnPages();
  const screenSize = useScreenSize();
  let pageIndex = 0;



  return (
    <div className="App">
      <HTMLFlipBook         
          width={screenSize.width} 
          height={screenSize.height}
          clickEventForward='false'
          isUserTouch='false'
          showCover='true'
          
          >
        <div className="frontCover"> 
        </div> 
        <div className="leftPage"> <Music /></div>
	      <div className="rightPage"><Videos /></div>
	      <div className="leftPage">  
          <h1>Var Values</h1>
          <div> widthValue = {widthValue}          </div>
          <div> heightValue = {heightValue}          </div>
          <div> screenSize.width = {screenSize.width}          </div>
          <div> screenSize.height = {screenSize.height}          </div>
          <div>screenSize.font = {screenSize.font}</div>
          <div>screenSize.verticalPadding = {screenSize.verticalPadding}</div>
          <div>screenSize.horizontalPadding = {screenSize.horizontalPadding}</div>
        </div>
	      <div className="draculaCover"> </div>

        { draculaPages.map( (page) => {
          pageIndex = pageIndex + 1;
          if(pageIndex%2===0){
            return <div className="rightPage"> <div style={{fontSize:screenSize.font, margin:screenSize.verticalPadding, textAlign:'justify', 
              paddingTop:screenSize.verticalPadding,
              paddingBottom:screenSize.verticalPadding,
              paddingRight:screenSize.horizontalPadding,
              paddingLeft:screenSize.horizontalPadding}}>{page}</div></div>
          }
          else{
            return <div className="leftPage"> <div style={{fontSize:screenSize.font, margin:screenSize.verticalPadding, textAlign:'justify', 
              paddingTop:screenSize.verticalPadding,
              paddingBottom:screenSize.verticalPadding,
              paddingRight:screenSize.horizontalPadding,
              paddingLeft:screenSize.horizontalPadding}}>{page}</div> </div>
          }        
          
          }) }
	      <div className="backCover"> BackCover </div>

      </HTMLFlipBook>

    </div>    
  );
}

export default App;
