export class getId{

    constructor(id){
        this.id=id
    }

    getAptId(callback){
        let http=new XMLHttpRequest();
        http.open('get' , `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.status==200&&http.readyState==4){
                let recipeId=JSON.parse(http.response).recipe;
                 callback(recipeId); 
           
            }
        })
    }
}

// export class recipeSearch{
//     constructor(searchText){
//         this.id=searchText
//     }

//     getRecipesApi(callback){
//         let http=new XMLHttpRequest();
//         http.open('get' ,`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
//         http.send();
//         http.addEventListener('readystatechange',function(){
//             if(http.status==200&&http.readyState==4){
//                 let recepieId=JSON.parse(http.response).recipe
//                 callback(recepieId)
//             }
//         })
//     }
// }