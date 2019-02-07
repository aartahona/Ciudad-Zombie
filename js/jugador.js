/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover : function(movx, movy){
    this.x += movx;
    this.y += movy;
  },

  perderVidas : function(cantVidas){
    this.vidas -= cantVidas;
  },
  stats : function(){
    console.log("x: " + this.x);
    console.log("y: " + this.x);
    console.log("ancho: " + this.ancho);
    console.log("alto: " + this.alto);
    console.log("vida: " + this.vidas)

  },
  swapmedidas : function(){
    var temporal = this.ancho;
    this.ancho = this.alto;
    this.alto = temporal;
  }


}
