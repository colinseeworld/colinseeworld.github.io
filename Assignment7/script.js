function getValue() {
    let weight1 = document.getElementById("weight1").value;
    let height1 = document.getElementById("height1").value;
    let weight2 = document.getElementById("weight2").value;
    let height2 = document.getElementById("height2").value;
    let LucasBMI = (weight1 / Math.pow(height1, 2)).toFixed(2);
    let JohnBMI = (weight2 / Math.pow(height2, 2)).toFixed(2);
    let lucasHigherBMI = LucasBMI > JohnBMI;

    if (lucasHigherBMI) {
        window.alert(`Lucas and John are friends, Lucas is ` + height1 + ` meter tall and weight is ` + weight1 + ` in kilograms. John is ` + height2 + ` meter tall and weight is ` + weight2 + ` in kilograms. So Lucas's BMI is:` + LucasBMI + ` and John's BMI is ` + JohnBMI + `. Therefore, Lucas has higher BMI than John, that is ` + LucasBMI);
    } else if (!lucasHigherBMI) {
        window.alert(`Lucas and John are friends, Lucas is ` + height1 + ` meter tall and weight is ` + weight1 + ` in kilograms. John is ` + height2 + ` meter tall and weight is ` + weight2 + ` in kilograms. So Lucas's BMI is:` + LucasBMI + ` and John's BMI is ` + JohnBMI + `. Therefore, John has higher BMI than Lucas, that is ` + JohnBMI);
    }
    else {
        window.alert(`They have the same BMI.`)
    }
}
