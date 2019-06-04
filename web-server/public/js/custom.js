console.log('Public assets js loaded!');
fetch('http://localhost:3000/weather?address=mumbai').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log('Locations:', data.locations);
            console.log('Forecast:', data.forecast.summary);
        }
    });
});