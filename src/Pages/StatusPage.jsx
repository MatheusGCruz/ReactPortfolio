import React, {useContext} from 'react'
import useScreenSize from './../Functions/ScreenSize';
import { BookContext } from '../Context/BookContext';



function StatusPage () {
    const screenSize = useScreenSize();
    const book = useContext(BookContext);

return (
    <div>

          <h1> Var Values</h1>
          <div> screenSize.width = {screenSize.width}          </div>
          <div> screenSize.height = {screenSize.height}          </div>
          <div> screenSize.font = {screenSize.font}</div>
          <div> screenSize.verticalPadding = {screenSize.verticalPadding}</div>
          <div> screenSize.horizontalPadding = {screenSize.horizontalPadding}</div>
          <div> screenSize.charDensity = {screenSize.charDensity}    </div>
          <div> Book = {book}</div>
    </div>
  )
}

export default StatusPage;