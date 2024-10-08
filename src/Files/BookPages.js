import UseScreenSize from './../Functions/ScreenSize';
import draculaText from './Dracula';
import { bookSelect } from './../Functions/BookSelect.js'


export function returnPages(newBook){

    const bookPages = bookSelect();   

    let returnList = [];
    let book = newBook;
    let bookText = "";
    switch(book){
        case "Dracula":
            bookText = draculaText;
            break;
        default:
            bookText = "Failed to load" + bookPages;
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


