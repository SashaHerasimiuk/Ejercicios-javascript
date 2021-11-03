function transporte(value){
	(value <= 1000 && value >= 0)? document.getElementById('result1').innerHTML = "Se recomienda ir a pie.":null; 	
	(value <= 10000 && value > 1000)? document.getElementById('result1').innerHTML = "Se recomienda ir en bicicleta.":null; 	
	(value <= 30000 && value > 10000)? document.getElementById('result1').innerHTML = "Se recomienda ir en colectivo.":null; 	
	(value <= 100000 && value > 30000)? document.getElementById('result1').innerHTML = "Se recomienda ir en auto.":null;
	(value > 100000)? document.getElementById('result1').innerHTML = "Se recomienda ir en avion.":null; 	 	
}

function mayorDeArray(input){
 	var array = input.toString().split(',')
 	array.sort(function(a,b){return a-b});
 	document.getElementById('result2').innerHTML = ("El numero mayor es:" + array[array.length - 1].toString());
}