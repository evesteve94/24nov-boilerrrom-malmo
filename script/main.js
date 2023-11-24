//kopplar till alla våra html element
const kladdkakaBtn = document.getElementById('chokladkaka-btn');
const bananBtn = document.getElementById('banankaka-btn');
const tiramisuBtn = document.getElementById('tiramisu-btn');
const kanelbullarBtn = document.getElementById('kanelbullar-btn');
const lemonBtn = document.getElementById('lemon-btn');

const portionCount = document.getElementById('portion-count');
const updatePortionsBtn = document.getElementById('update-portions');

const recipeContainer = document.getElementById('recipe-container');

//eventListener för varje knapp
kladdkakaBtn.addEventListener('click', getRecipe);
bananBtn.addEventListener('click', getRecipe);
tiramisuBtn.addEventListener('click', getRecipe);
kanelbullarBtn.addEventListener('click', getRecipe);
lemonBtn.addEventListener('click', getRecipe);

//hämta värdet av portioner

//eventListener till portioner
updatePortionsBtn.addEventListener('click', function(){
    //tömmer först diven för att sen lägga till receptet
    //recipeContainer.innerHTML = '';
    //uppdateras recpetet
})