$(function(){
	navigator.geolocation.getCurrentPosition(success, error);

	var mapa = $('#mapa');

	/*
	 * Para mapa estatico
	 */

	/*function success(result){
		var lat = result.coords.latitude;
		var lon = result.coords.longitude;
		var coor = lat + "," + lon;
		mapa.html('<img src="http://maps.googleapis.com/maps/api/staticmap?size=700x400&markers='+coor+'" />');
		console.log(coor);
	}

	function error(){
		console.log('Hubo un error');
	}*/


	/*
	 * Para mapa dinánmico
	 */

	function success(result){
		var lat = result.coords.latitude;
		var lon = result.coords.longitude;
		var coor = lat + "," + lon;

		//Objetos de googles. (instancias 'palabra new')
		var gLatLon = new google.maps.LatLng(coor);
		var objConfig = {
			zoom : 17,
			center : gLatLon
		}

		//recibe 2 parámetros, donde se va a renderizar el mapa, y una objeto de configuración.  
		var gMapa = new google.maps.Map(mapa,objConfig);
	}

	function error(){
		console.log('Hubo un error');
	}

});