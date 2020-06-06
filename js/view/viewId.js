import {recipeContanier}from './elemnts.js'

 export function displayRecipe(recipe){
    let ingredients =recipe.ingredients;
    let markup=`
    <h3 class="p-2">${recipe.title}</h3>
    <img src="${recipe.image_url}" class="w-100">
    <div id="recipe-ingredients">
    <ul class="fa-ul d-flex flex-wrap p-4">
    `;for(let i=0;i<ingredients.length;i++){

        markup+=`<li class="w-50"><span class="fa-li"><i class="fab fa-utensils"></i></span>${ingredients[i]}</li>`
    
    }
    markup+=`</ul>
    </div>
    `
    document.getElementById("recipeContanier").innerHTML=markup
}
  




























// import {recipeContanier} from './elemnts.js'
// export function displayRecipe(recipe){
//     let ingredients =recipe.ingredients;
//     let markup=`
//     <h3 class="p-2">${recipe.title}</h3>
//     <img src="${recipe.image_url}" class="w-100">
//     <div id="recipe-ingredients">
//     <ul class="fa-ul d-flex flex-wrap p-4">
//     `;for(let i=0;i<ingredients.length;i++){

//         markup+=`<li class="w-50"><span class="fa-li"><i class="fab fa-utensils"></i></span>${ingredients[i]}</li>`
    
//     }
//     markup+=`</ul>
//     </div>
//     `
//     document.getElementById("recipeContanier").innerHTML=markup
// }