fetch('https://randomuser.me/api/').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	// data."arrayselec[].select"
	console.log(data.results[0].email);
	
	document.getElementById("results").innerHTML = JSON.stringify(data.results[0].email);	
}).catch(function (error) {
	// There was an error
	console.warn(error);
});