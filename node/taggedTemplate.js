function real(parts, ...values) {
	const res = [];
	values.forEach((item, index) => {
		item = isNaN(item) ? item : `R$${item.toFixed(2)}`;
		res.push(parts[index], item);
	});
	return res.join('');
}

const value = 29.99;
const partialValue = 11;
console.log(real`1x de ${value} ou 3x de ${partialValue}.`);
