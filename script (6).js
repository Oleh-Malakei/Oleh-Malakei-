function checkStorage(available, ordered) {
	let message
	if (ordered === 0) {
	    message = "в заказе нет товаров"
	} else if (ordered > available) {
	    message = "ваш заказ слишком велик, на складе недостаточно товаров!"
	} else {
	    message = "Заказ принят, наш менеджер свяжется с вами."
	}
	return message
    }
