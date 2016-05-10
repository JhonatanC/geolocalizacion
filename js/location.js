$(function(){
	navigator.geolocation.getCurrentPosition(success, error);

	var mapa = $('#mapa');

	function success(result){
		var lat = result.coords.latitude;
		var lon = result.coords.longitude;
		var coor = lat + "," + lon;
		mapa.html('<img src="http://maps.googleapis.com/maps/api/staticmap?size=700x400&markers='+coor+'" />');
		console.log(coor);
	}

	function error(){
		console.log('Hubo un error');
	}
});