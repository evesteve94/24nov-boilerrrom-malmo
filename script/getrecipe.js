
//hämta info från json
async function getRecipe(string){
    //hämta vår array
    const response = await fetch('./data/recipes.json');
    
    //if-sats för response
    if(response.ok){
        let ingString = '';
        const recipes = await response.json();
        console.log(recipes);
        recipeContainer.innerHTML = '';
        if(string == 'kladdkaka'){
            //loopa ingredients
            recipes.kladdkaka.ingredients.forEach(function(item){
                ingString +=` <p>${item.baseAmount} ${item.unit} ${item.name} </p>`;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.kladdkaka.recipeName}</h3>
            <p><strong>Portioner: ${recipes.kladdkaka.portions}</strong></p> Ingredienser:
            ${ingString}
            </div>`; 
        }
        if (string == 'banankaka'){
            //loopa ingredients
            recipes.banankaka.ingredients.forEach(function(item){
                ingString +=` <p>${item.baseAmount} ${item.unit} ${item.name} </p>`;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.banankaka.recipeName}</h3>
            <p><strong>Portioner: ${recipes.banankaka.portions}</strong></p> Ingredienser:
            ${ingString}
            </div>`;             
        }
        if (string == 'tiramisu'){
            //loopa ingredients
            recipes.tiramisu.ingredients.forEach(function(item){
                ingString +=` <p>${item.baseAmount} ${item.unit} ${item.name} </p>`;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.tiramisu.recipeName}</h3>
            <p><strong>Portioner: ${recipes.tiramisu.portions}</strong></p> Ingredienser:
            ${ingString}
            </div>`;  
        }
        if (string == 'kanelbullar'){
            //loopa ingredients
            recipes.kanelbullar.ingredients.forEach(function(item){
                ingString +=` <p>${item.baseAmount} ${item.unit} ${item.name} </p>`;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.kanelbullar.recipeName}</h3>
            <p><strong>Portioner: ${recipes.kanelbullar.portions}</strong></p> Ingredienser:
            ${ingString}
            </div>`;            
        }
        if (string == 'lemon'){
            //loopa ingredients
            recipes.lemon.ingredients.forEach(function(item){
                ingString +=` <p>${item.baseAmount} ${item.unit} ${item.name} </p>`;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.lemon.recipeName}</h3>
            <p><strong>Portioner: ${recipes.lemon.portions}</strong></p> Ingredienser:
            ${ingString}
            </div>`;              
        }
    } else{
        console.log(`HTTP error message: ${response.status}`)
    }
}
