import './App.css';
import React, {useEffect, fetchData, useContext} from 'react'

import HTMLFlipBook  from "react-pageflip";
import Videos from "./Pages/Videos"
import Music from "./Pages/Music"
import StatusPage from './Pages/StatusPage.jsx';
import BookList from "./Components/BookList"
import {ReturnPages} from './Files/BookPages';
import useScreenSize from './Functions/ScreenSize';
import { bookSelect } from './Functions/BookSelect.js'
import MessageProvider from './Pages/TestPage.jsx'
import { BookContext } from './Context/BookContext';


export const UserContext = React.createContext(null);


function App() {
  const widthValue = 1000;
  const heightValue = 800;

  const bookPages = ReturnPages("Dracula");
  const screenSize = useScreenSize();

  const book = useContext(BookContext);

  let pageIndex = 0;


  useEffect(()=> {
    console.log('effect on message tirggered');
  }, []);


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
	      <div className="leftPage">          <BookContext.Provider value={"Dracula"}><StatusPage/></BookContext.Provider></div>

	      <div className="rightPage"></div>
        <div className="leftPage"> <BookList /></div>
        
	      <div className="draculaCover"> </div>

        { bookPages.map( (page) => {
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
