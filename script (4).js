const country = prompt("Укажите страну доставки")
let price

switch (country.toLowerCase()) {
case "китай":
    price = 100;
    break
case "чили":
    price = 250
    break
case "австралия":
    price = 170
    break
case "индия":
    price = 80
    break
case "ямайка":
    price = 120
    break
default:
    alert("У вашей страны доставка недоступна")
}

if (price) {
    alert(`Доставка в ${country} будет стоить ${price} кредитов`)
}