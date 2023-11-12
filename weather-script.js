fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=manila', {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': '42865495cbmsh7c46265c2d956f5p1be876jsn9995e70d6a98',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('location').innerHTML = response.current.condition.text;
    document.getElementById('temp').innerHTML = response.current.temp_c + " Celsius";
    document.getElementById('localtime').innerHTML = response.location.localtime;
})
.catch(err => {
	console.log(err);
});