let credits = 23580
const pricePerDroid = 3000
let totalPrice
let message

let numberOfDroids = prompt("Сколько дроидов вы хотите купить?")

if (numberOfDroids === null) {
    message = "Отменено пользователем!"
} else {
  totalPrice = pricePerDroid * numberOfDroids
if (totalPrice > credits) {
    message = "Недостаточно средств на счете!"
} else {
    credits = credits - totalPrice
    message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`
}
}

console.log(message)