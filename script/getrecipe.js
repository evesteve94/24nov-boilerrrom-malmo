//hämta info från json
async function getRecipe(){
    //hämta vår array
    const response = await fetch('./data/recipes.json');
    
    //if-sats för response
    if(response.ok){
        
    } else{
        console.log(`HTTP error message: ${response.status}`)
    }
}