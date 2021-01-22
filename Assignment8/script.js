function addNumber(n1, n2, n3) {
    return n1 + n2 + n3;
}

function getAverage() {
    let netsNumber1 = document.getElementById("nets-number1").valueAsNumber;
    let netsNumber2 = document.getElementById("nets-number2").valueAsNumber;
    let netsNumber3 = document.getElementById("nets-number3").valueAsNumber;

    let knicksNumber1 = document.getElementById("knicks-number1").valueAsNumber;
    let knicksNumber2 = document.getElementById("knicks-number2").valueAsNumber;
    let knicksNumber3 = document.getElementById("knicks-number3").valueAsNumber;

    let netsAverage = (addNumber(parseInt(netsNumber1), parseInt(netsNumber2), parseInt(netsNumber3)) / 3).toFixed(1)
    let knicksAverage = (addNumber(parseInt(knicksNumber1), parseInt(knicksNumber2), parseInt(knicksNumber3)) / 3).toFixed(1)

    if (netsAverage > knicksAverage) {
        const summary1 = document.createElement('h2')
        summary1.textContent = `Congratulation! Nets Team wins a trophy! Nets Team: ${netsAverage}  VS  Knicks Team: ${knicksAverage}`
        document.querySelector('body').appendChild(summary1)

    } else if (netsAverage < knicksAverage) {
        const summary2 = document.createElement('h2')
        summary2.textContent = `Congratulation! Knicks Team wins a trophy! Nets Team: ${netsAverage}  VS  Knicks Team: ${knicksAverage}`
        document.querySelector('body').appendChild(summary2)
    }
    else {
        const summary3 = document.createElement('h2')
        summary3.textContent = `There is a draw! The game ends in a tie.`
        document.querySelector('body').appendChild(summary3)
    }
}

function addScore(n1, n2, n3) {
    if (n1 < 100) {
        return n2 + n3
    } else if (n2 < 100) {
        return n1 + n3
    } else if (n3 < 100) {
        return n1 + n2
    } else
        return 0
}
function getScore() {
    let netsNumber1 = document.getElementById("nets-number1").valueAsNumber;
    let netsNumber2 = document.getElementById("nets-number2").valueAsNumber;
    let netsNumber3 = document.getElementById("nets-number3").valueAsNumber;

    let knicksNumber1 = document.getElementById("knicks-number1").valueAsNumber;
    let knicksNumber2 = document.getElementById("knicks-number2").valueAsNumber;
    let knicksNumber3 = document.getElementById("knicks-number3").valueAsNumber;

    let netsScore = addScore(netsNumber1, netsNumber2, netsNumber3)
    let knicksScore = addScore(knicksNumber1, knicksNumber2, knicksNumber3)

    if (knicksScore < netsScore) {
        const summary1 = document.createElement('h2')
        summary1.textContent = `Congratulation! Nets Team wins a trophy! Nets Team: ${netsScore}  VS  Knicks Team: ${knicksScore}`
        document.querySelector('body').appendChild(summary1)
    } else if (knicksScore > netsScore) {
        const summary2 = document.createElement('h2')
        summary2.textContent = `Congratulation! Knicks Team wins a trophy! Nets Team: ${netsScore}  VS  Knicks Team: ${knicksScore}`
        document.querySelector('body').appendChild(summary2)
    }
    else {
        const summary = document.createElement('h2')
        summary.textContent = `Draw! The game ends in a tie.`
        document.querySelector('body').appendChild(summary)
    }
}

function getTips() {
    let billAmount = document.getElementById("bill").value;

    switch (true) {
        case (billAmount >= 30 && billAmount <= 300):
            let tips1 = (billAmount * .15).toFixed(2)
            let totalAmount1 = parseFloat(billAmount) + parseFloat(tips1)
            const summary1 = document.createElement('h2')
            summary1.textContent = `The bill was ${billAmount}, the tip was ${tips1}, and the total value ${totalAmount1.toFixed(2)}.`
            document.querySelector('body').appendChild(summary1)
            break;

        case (billAmount <= 30 || billAmount >= 300):
            let tips2 = (billAmount * .2).toFixed(2)
            let totalAmount2 = parseFloat(billAmount) + parseFloat(tips2)
            const summary2 = document.createElement('h2')
            summary2.textContent = `The bill was ${billAmount}, the tip was ${tips2}, and the total value ${totalAmount2.toFixed(2)}.`
            document.querySelector('body').appendChild(summary2)
            break;
    }
}

function celsiusToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = ((parseFloat(celsius) * 9 / 5) + 32).toFixed(1)
    const summary = document.createElement('h2')
    summary.textContent = `${celsius}°C is ${fahrenheit}°F"`
    document.querySelector('body').appendChild(summary)
}

function fahrenheitToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(1)
    const summary = document.createElement('h2')
    summary.textContent = `${fahrenheit}°F is ${celsius}°C"`
    document.querySelector('body').appendChild(summary)
}