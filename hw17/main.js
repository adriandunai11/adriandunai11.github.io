/* let a = Number(prompt("1. szám (a):"));
let b = Number(prompt("2. szám (b):"));
let c = Number(prompt("3. szám (c):"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Hiba: Érvényes, pozitív számokat adj meg!");
} else {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
           alert("A megadott oldalakból egyenlő oldalú háromszög alakítható ki.")
        } else if (a === b || a === c || b === c) {
            alert("A megadott oldalakból egyenlő szárú háromszög alakítható ki.")
        } else {
            alert("A megadott oldalakból általános háromszög alakítható ki.")
        }
    } else {
        alert("Hiba: A megadott oldalakból nem lehet háromszöget alkotni.")
    }
} */

function getTriangleType(a, b, c) {

    if (!(a + b > c && a + c > b && b + c > a)) {
        return "Hiba: A megadott oldalakból nem lehet háromszöget alkotni."
    }

    if (a === b && b === c) {
        return "A megadott oldalakból egyenlő oldalú háromszög alakítható ki."
    } else if (a === b || a === c || b === c) {
        return "A megadott oldalakból egyenlő szárú háromszög alakítható ki."
    } else {
        return "A megadott oldalakból általános háromszög alakítható ki."
    }
}

let sideNames = ["a", "b", "c"];
let sides = [];
let i = 0;

while (i < 3) {
    let input = prompt("Add meg a(z) " + sideNames[i] + " oldalt")
    let num = Number(input)

    if (input === null) {
        alert('Művelet megszakítva.')
        sides = []
        break;
    }

    if (isNaN(num) || num <= 0) {
        alert("Hiba: Érvényes, pozitív számot adj meg!")    
    } else {
        sides.push(num)
        i++
    }
}

if (sides.length === 3) {
    let result = getTriangleType(sides[0], sides[1], sides[2]);
    alert(result)
}
