var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var mouseApretado = false;


//FUNCIONES PARA EL ARMADO DE GRILLA Y PALETA DE COLORES
function paletaDeColores() {
  nombreColores.forEach((color) => {
    $(paleta).append('<div class="color-paleta" style="background-color:' + color + ';"></div>');
  })
}
function completarGrillaPixeles() {
  let totalPixeles = 1750;
  for (let i = 0; i <= totalPixeles; i++) {
    $(grillaPixeles).append('<div></div>');
  }
}
function hacerClickEnPaleta() {
    $('.color-paleta').click(function () {
    let colorSeleccionado = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', colorSeleccionado);
  });
}

// FUNCION PARA DETECTAR EL APRETADO DEL MOUSE
function apretarMouse() {
  $('*').mousedown(function () {
    mouseApretado = true;
  })
    .mouseup(function () {
      mouseApretado = false;
    })
}

// FUNCIONES PARA PINTAR 1 PIXEL Y EN MOVIMIENTO
function pintarUnPixel() {
  $('#grilla-pixeles > div').on('click', function () {
    let colorSeleccionado = $('#indicador-de-color').css('background-color');
    $(this).css('background-color', colorSeleccionado);
  })
}
function pintarEnMovimiento() {
  $('#grilla-pixeles > div').mouseenter(function () {
    let colorSeleccionado = $('#indicador-de-color').css('background-color');
    if (mouseApretado) {
      $(this).css('background-color', colorSeleccionado);
    }
  });
}

// FUNCIONES PARA CARGAR LOS SUPERHEROES EN GRILLA
function cargarBatman(){
  document.getElementById('batman').addEventListener('click',function(e){
    cargarSuperheroe(batman);
  })
}
function cargarWonder(){
  document.getElementById('wonder').addEventListener('click',function(e){
    cargarSuperheroe(wonder);
  })
}function cargarFlash(){
  document.getElementById('flash').addEventListener('click',function(e){
    cargarSuperheroe(flash);
  })
}function cargarInvisible(){
  document.getElementById('invisible').addEventListener('click',function(e){
    cargarSuperheroe(invisible);
  })
}

// FUNCIONES DE GUARDADO Y BORRADO DE PIXELES
function borrarTodo() {
  $('#borrar').on('click', function () {
    $('#grilla-pixeles > div').each(function () {
      $(this).animate({
        'background-color': '#FFFFFF'
      }, 2000);
  })
})
}
function guardarImagenes(){
  document.getElementById('guardar').addEventListener('click',function(e){
    guardarPixelArt();
  })
}

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css('background-color', colorActual);

  })
);

$(document).ready(function () {
  paletaDeColores();
  completarGrillaPixeles();
  hacerClickEnPaleta();
  pintarUnPixel();
  apretarMouse();
  pintarEnMovimiento();
  borrarTodo();
  cargarBatman();
  cargarWonder();
  cargarFlash();
  cargarInvisible();
  guardarImagenes();
})