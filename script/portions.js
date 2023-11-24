//definiera vår funktion 
function calculatePortions(portions) {
    // id = document.querySelector("h3");
    // recipe = id.textContent;

    const amount1 = document.getElementById("1");
    const amount2 = document.getElementById("2");
    const amount3 = document.getElementById("3");

    // if(recipe == "Kladdkaka") {
    //     amount1.textContent = recipes.kladdkaka.ingredients[0].baseAmount;
    //     amount2.textContent = recipes.kladdkaka.ingredients[1].baseAmount;
    //     amount3.textContent = recipes.kladdkaka.ingredients[2].baseAmount;
    // }



    amount1.textContent = Number(amount1.textContent)*portions;
    amount2.textContent = Number(amount2.textContent)*portions;
    amount3.textContent = Number(amount3.textContent)*portions;
    updatePortionsBtn.disabled = true;
}