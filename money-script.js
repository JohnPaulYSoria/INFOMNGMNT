fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=PHP&amount=1', {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': '42865495cbmsh7c46265c2d956f5p1be876jsn9995e70d6a98',
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);

	document.getElementById('PHP-USD').innerHTML = response.old_currency + ' to ' + response.new_currency;
	document.getElementById('money').innerHTML = '$' +response.old_amount + ' to ₱' + response.new_amount;

})
.catch(err => {
	console.log(err);
});