//definiera vår funktion 
function calculatePortions(portions) {
    const amount1 = document.getElementById("1");
    const amount2 = document.getElementById("2");
    const amount3 = document.getElementById("3");

    amount1.textContent = Number(amount1.textContent)*portions;
    amount2.textContent = Number(amount2.textContent)*portions;
    amount3.textContent = Number(amount3.textContent)*portions;
}