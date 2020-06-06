import {seachInput} from '../view/elemnts.js';
export class ApiData{
    constructor(searchText){
        this.query=searchText
    }
    searchResult() {
       let _searchInput=seachInput.value;
       return _searchInput
   } 
    getApiData(callback){
        let http=new XMLHttpRequest();
        http.open('get' , ` /search?&q=${this.query}`);
        http.send();
        http.addEventListener("readystatechange",function () {
            if(http.status==200&&http.readyState==4){
              let recipes= JSON.parse(http.response).recipes;
              callback(recipes)
              console.log(recipes)
            }
        })
    }
}






