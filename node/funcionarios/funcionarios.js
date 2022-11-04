const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = (e) => e.pais === 'China';
const womans = (e) => e.genero === 'F';
const lowerSalary = (el, actualEl) => {
	return el.salario < actualEl.salario ? el : actualEl;
};

// pegando chinesa mulher com menor salario
const calculateLowerSalary = async () => {
	try {
		const response = await axios.get(url);
		const employees = response.data;
		const employee = employees
			.filter(chineses)
			.filter(womans)
			.reduce(lowerSalary);
		console.log(employee);
	} catch (error) {
		console.log(error);
	}
};

calculateLowerSalary();
