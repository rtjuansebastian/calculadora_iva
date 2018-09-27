console.log("Hola mundo");
/* imprime información 
por consola*/

var Numero1=52.5;
var Numero2=45;
console.log(Numero1+Numero2);
/*para definir una variable
debo usar la palabra reservada
var */

var nombre='Juan';
var apellido="Rodriguez";

console.log(nombre);
console.log(apellido);

var tiene_mascota=true;
tiene_mascota=false;

var frutas=['manzana','pera','lulo',25, true];
console.log(frutas[3]);

var persona={
	nombre:"Juan",
	edad:26,
	tiene_mascota:true,
	mascota:{
		raza:'Dalmata',
		nombre:'Bigotes'
	}
};

console.log(persona['nombre']);
console.log(persona.edad);
console.log(persona.mascota.raza);

var fecha= new Date();
console.log(fecha);

console.log(!false);//negación
console.log(true && false);//and
console.log(false || true);//or

console.log(5%4);

console.log(3>6);//mayor que
console.log(6>=6);//mayor o igual
console.log(3<6);//menor
console.log(6==6);//igualdad
console.log(6!=6);//diferencia

var edad=15;
 
 if(edad>=18){
 	console.log("Eres mayor de edad");
 }else{
 	console.log("No eres mayor de edad");
 }


var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
 for(var i=0;i<=6;i++){
 	console.log(dias[i]);
 	if(i==5){
 		break;
 	}
 }

 function suma(n1,n2){
 	var res=n1+n2;
 	return res;
 }

 alert(suma(8,4));


 function calcular_iva(precio_producto){
 	var iva= 19;
 	var resultado= precio_producto*(iva/100);
 	return resultado;
 }

 console.log(calcular_iva(10000));