function getNumbers() {
    const numbers = []
    let input

    do {
        let value = prompt("Adj meg egy számot (0 = kilépés)")

        if (value === null) {
            alert("Megszakítva.")
            break
        }

        value = value.trim()

        if (value === "") {
            alert("Nem adhatsz meg üres értéket!")
            continue
        }

        input = Number(value)

        if (isNaN(input) || input < 0) {
            alert("Érvényes, pozitív számot adj meg!")
            continue
        }

        if (input !== 0) {
            numbers.push(input)
        }

    } while (input !== 0)

    return numbers
}

function countEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).length
}

function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0
    }
    const sum = arr.reduce((a, b) => a + b, 0)
    return sum / arr.length
}


function displayResults() {

    const numbers = getNumbers()

    let resultsId = document.getElementById("results")

    if (numbers.length === 0) {
        resultsId.innerHTML = "<p>Nem adtál meg semmit!</p>"
        return
    }

    let htmlContent = `
        <p><strong>Megadott számok:</strong> ${numbers.join(', ')}</p>
        <div class="result">
            <p><strong>Páros számok száma:</strong> ${countEvenNumbers(numbers)}</p>
        </div>
        <div class="result">
            <p><strong>Számok átlaga:</strong> ${calculateAverage(numbers).toFixed(2)}</p>
        </div>
    `

    resultsId.innerHTML = htmlContent


    let resultsClass = document.getElementsByClassName("result")

    for (let result of resultsClass) {
        result.style.backgroundColor = "#e9ecef"
        result.style.padding = "10px"
        result.style.marginTop = "15px"
        result.style.borderRadius = "4px"
        result.style.borderLeft = "5px solid #16ace3"
    }

}

addEventListener("DOMContentLoaded", displayResults)
