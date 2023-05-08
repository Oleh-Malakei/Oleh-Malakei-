let total = 0
let input
while (true) {
	input = prompt("Введите число")
	if (input === null) {
	    break
	}
	input = Number(input)
	if (isNaN(input)) {
	    alert("Было написано не число, попробуйте еще раз")
	    continue
	}
    total += input
}

alert(`Общая сумма чисел равна ${total}`)