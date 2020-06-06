import {searchResult,seachInput} from './elemnts.js';
export let searchData=()=>  seachInput.value
export function displayData(recipes) {
    let newData='';
    for(let i=0;i<recipes.length;i++){
        newData+=`
            <a  href="#${recipes[i].recipe_id}" > 
            <div class="media py-2 border-bottom" >
            <img  src="${recipes[i].image_url}" class="align-self-center mr-3 theImg" alt="...">
            <div class="media-body">
              <h5 class="mt-0">${recipes[i].title}</h5>
              <p>${recipes[i].publisher}</p>
        
            </div>
          </div>
          </a>
            `
  
        }
        document.getElementById("searchResult").innerHTML=newData;
    }

