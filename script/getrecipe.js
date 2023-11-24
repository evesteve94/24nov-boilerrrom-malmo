
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
            updatePortionsBtn.disabled = false;
            //loopa ingredients
            // Ge ingrediensmängderna unika ids
            let i = 1;
            recipes.kladdkaka.ingredients.forEach(function(item){
                ingString += `<p><span id="${i}">${item.baseAmount}</span> ${item.unit} ${item.name} </p>`;
                i++;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.kladdkaka.recipeName}</h3>
            <p><strong>Portioner: ${recipes.kladdkaka.portions}</strong></p> Ingredienser:
            ${ingString}
            <p>Instruktioner: <br> ${recipes.kladdkaka.instructions}</p>
            </div>`; 
        }
        if (string == 'banankaka'){
            updatePortionsBtn.disabled = false;
            //loopa ingredients
            let i = 1;
            recipes.banankaka.ingredients.forEach(function(item){
                ingString += `<p><span id="${i}">${item.baseAmount}</span> ${item.unit} ${item.name} </p>`;
                i++;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.banankaka.recipeName}</h3>
            <p><strong>Portioner: ${recipes.banankaka.portions}</strong></p> Ingredienser:
            ${ingString}
            <p>Instruktioner: <br> ${recipes.banankaka.instructions}</p>
            </div>`;             
        }
        if (string == 'tiramisu'){
            updatePortionsBtn.disabled = false;
            //loopa ingredients
            let i = 1;
            recipes.tiramisu.ingredients.forEach(function(item){
                ingString += `<p><span id="${i}">${item.baseAmount}</span> ${item.unit} ${item.name} </p>`;
                i++;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.tiramisu.recipeName}</h3>
            <p><strong>Portioner: ${recipes.tiramisu.portions}</strong></p> Ingredienser:
            ${ingString}
            <p>Instruktioner: <br> ${recipes.tiramisu.instructions}</p>
            </div>`;  
        }
        if (string == 'kanelbullar'){
            updatePortionsBtn.disabled = false;
            //loopa ingredients
            let i = 1;
            recipes.kanelbullar.ingredients.forEach(function(item){
                ingString += `<p><span id="${i}">${item.baseAmount}</span> ${item.unit} ${item.name} </p>`;
                i++;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.kanelbullar.recipeName}</h3>
            <p><strong>Portioner: ${recipes.kanelbullar.portions}</strong></p> Ingredienser:
            ${ingString}
            <p>Instruktioner: <br> ${recipes.kanelbullar.instructions}</p>
            </div>`;            
        }
        if (string == 'lemon'){
            updatePortionsBtn.disabled = false;
            //loopa ingredients
            let i = 1;
            recipes.lemon.ingredients.forEach(function(item){
                ingString += `<p><span id="${i}">${item.baseAmount}</span> ${item.unit} ${item.name} </p>`;
                i++;
            });

            //fyller vår container
            recipeContainer.innerHTML = 
            `<div class ="recipe">
            <h3>${recipes.lemon.recipeName}</h3>
            <p><strong>Portioner: ${recipes.lemon.portions}</strong></p> Ingredienser:
            ${ingString}
            <p>Instruktioner: <br> ${recipes.lemon.instructions}</p>
            </div>`;              
        }
    } else{
        console.log(`HTTP error message: ${response.status}`)
    }
}
