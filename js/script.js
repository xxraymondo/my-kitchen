import {displayData,searchData}from './view/viewModel.js';
import {ApiData} from './model/searchModel.js';
import {seachButton} from './view/elemnts.js'
import {getId} from './model/searchRecipe.js'
import {displayRecipe} from './view/viewId.js'
let display=()=>{
    let _searchData=searchData()
    let _ApiData=new ApiData(_searchData);
    _ApiData.getApiData(displayData);

}

seachButton.addEventListener("click",display)
let disId=()=>{
 let link =window.location.hash.replace("#","")
let _getId=new getId(link);
_getId.getAptId(displayRecipe)
}
window.addEventListener("hashchange",disId)





















// let displayId=()=>{let recipeId=window.location.hash.replace("#","");
// let _recipeSearch=new recipeSearch(recipeId);
// _recipeSearch.getRecipesApi(displayRecipe);
// console.log(recipeId)
// }

// window.addEventListener('hashchange',displayId)
