import React, {useContext} from 'react'


import UseScreenSize from './../Functions/ScreenSize';
import draculaText from './Dracula';
import { bookSelect } from './../Functions/BookSelect.js'
import { BookContext }  from './../Context/BookContext.js'



export function ReturnPages(newBook){

    const bookPages = bookSelect();   
    const BookValue = useContext(BookContext);


    let returnList = [];
    let book = newBook;
    let bookText = "";
    switch(BookValue){
        case "Dracula":
            bookText = draculaText;
            break;
        default:
            bookText = draculaText; //"Failed to load: " + BookValue;
            break;
    }


    const pages = bookText.split('(NP)');
    const ScreenSize = UseScreenSize();

    const charDensity = ScreenSize.charDensity
    let pageNumber = 0;

    pages.forEach(function(newPage, nidx, narray){
        const lines = newPage.split('(BR)');
        let page = "";
        const newLine = "\n\n";

        let linesSize = lines.size;
    
        lines.forEach(function(element, idx, array){
            linesSize = linesSize - element.size;
            page = page + element + newLine;
   
            if(page.length > charDensity || linesSize === 0){    
                returnList.push(page);
                page = "";
                pageNumber ++;
            }

            if (idx === array.length - 1){ 
                returnList.push(page);
                page = "";
                pageNumber ++;
            }
        });

    });
    if(pageNumber%2===1){
        returnList.push("");
    }

    return returnList;
}


