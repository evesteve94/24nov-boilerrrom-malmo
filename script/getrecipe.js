//hämta info från json
async function getRecipe(string){
    //hämta vår array
    const response = await fetch('./data/recipes.json');
    
    //if-sats för response
    if(response.ok){
        const recipes = await response.json();
        console.log(recipes);
        if(string = 'kladdkaka'){
            //hämtar vi ingridienser
            // let name = recipes[0].recipeName
            //long-ass template string förslag:
            textRecipe.textContent = ``
        } 
        if (string = 'banankaka'){

        }
        if (string = 'tiramisu'){
            
        }
        if (string = 'kanelbullar'){
            
        }
        if (string = 'lemon'){
            
        }
    } else{
        console.log(`HTTP error message: ${response.status}`)
    }
}