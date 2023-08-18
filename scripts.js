const settings = {
	async: true,
	crossDomain: true,
	url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0e94b36f2mshce71529f13d6562p199dbdjsn393841b15acd',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});