// standard global variables
var pegContainer, pegScene, pegCamera, pegRenderer, pegControls, Pegmaterial, spriteMaterial;
var pegLabelSprite;
initPeg();
animatePeg();

// FUNCTIONS
function initPeg() {
// SCENE
pegScene = new THREE.Scene();

// CAMERA
var SCREEN_WIDTH = 300, SCREEN_HEIGHT = 250;
var VIEW_ANGLE = 6, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
pegCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
pegScene.add(pegCamera);
pegCamera.position.set(0,50,400);
pegCamera.lookAt(pegScene.position);

// RENDERER
if ( Detector.webgl ) {
  pegRenderer = new THREE.WebGLRenderer( {antialias:true} );
} else {
  pegRenderer = new THREE.CanvasRenderer();
}

pegRenderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
pegContainer = document.getElementById( 'ThreeJSPeg' );
pegContainer.appendChild( pegRenderer.domElement );
// CONTROLS
pegControls = new THREE.OrbitControls( pegCamera, pegRenderer.domElement );
pegControls.noTilt = true;
pegControls.noRotate = true;
pegControls.noZoom = true;

// LIGHT
hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 50, 0 );
pegScene.add( hemiLight );

dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.color.setHSL( 0.1, 1, 0.95 );
dirLight.position.set( -1, 1.75, 1 );
dirLight.position.multiplyScalar( 30 );
pegScene.add( dirLight );

// SKYBOX/FOG
var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.BackSide } );
var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
pegScene.add(skyBox);

//peg
var peg = new THREE.CylinderGeometry( 5, 5, 15, 100 );
Pegmaterial = new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 30 });
mesh = new THREE.Mesh( peg, Pegmaterial );
mesh.position.set(0,0,10);
pegScene.add(mesh);

pegLabelSprite = makeTextSprite( " Label ", { fontsize: 32 } );
pegLabelSprite.position = mesh.position.clone();
pegLabelSprite.position.x = 13;
pegLabelSprite.position.y = 4;
pegScene.add( pegLabelSprite );
}

//creating a new Label for the object by deleting the current one and replacing it.
function setNewLabel(name)
{
pegScene.remove(pegLabelSprite);
pegLabelSprite = makeTextSprite(name.value, { fontsize: 32} );
pegLabelSprite.position = mesh.position.clone();
pegLabelSprite.position.x = 13;
pegLabelSprite.position.y = 4;
pegScene.add(pegLabelSprite);
}

function setLabelValue(value)
{
pegScene.remove(pegLabelSprite);
pegLabelSprite = makeTextSprite(value, { fontsize: 32} );
pegLabelSprite.position = mesh.position.clone();
pegLabelSprite.position.x = 13;
pegLabelSprite.position.y = 4;
pegScene.add(pegLabelSprite);
}

function makeTextSprite( message, parameters ) {
if ( parameters === undefined ) parameters = {};

var fontface = parameters.hasOwnProperty("fontface") ?
parameters["fontface"] : "Arial";

var fontsize = parameters.hasOwnProperty("fontsize") ?
parameters["fontsize"] : 18;

var borderThickness = parameters.hasOwnProperty("borderThickness") ?
parameters["borderThickness"] : 4;

var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
parameters["backgroundColor"] : { r:255, g:255, b:255, a:0 };

var canvas = document.createElement('canvas');
context = canvas.getContext('2d');
context.font = "Bold " + fontsize + "px " + fontface;

// get size data (height depends only on font size)
var metrics = context.measureText( message );
var textWidth = metrics.width;

// text color
context.fillStyle = "rgba(255, 255, 255, 1.0)";

context.fillText( message, borderThickness, fontsize + borderThickness);

// canvas contents will be used for a texture
var texture = new THREE.Texture(canvas)
texture.needsUpdate = true;

spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false} );
spriteMaterial.color.setHex("0x000000");
var sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(400,200,1.0);
return sprite;
}

function animatePeg() {
requestAnimationFrame( animatePeg );
pegControls.update();
pegRenderer.render( pegScene, pegCamera);
}


function setPegRGB(){
var redHex = rgbToHex(document.getElementById("RvalueStim").value);
var greenHex = rgbToHex(document.getElementById("GvalueStim").value);
var blueHex = rgbToHex(document.getElementById("BvalueStim").value);
var stringHex = "0x" + redHex + greenHex + blueHex;
Pegmaterial.color.setHex(stringHex);
}

function setPeg(r,g,b) {
  var redHex = rgbToHex(r);
  var greenHex = rgbToHex(g);
  var blueHex = rgbToHex(b);
  var stringHex = "0x" + redHex + greenHex + blueHex;
  Pegmaterial.color.setHex(stringHex);
}

function setLabel(r,g,b) {
  var redHex = rgbToHex(r);
  var greenHex = rgbToHex(g);
  var blueHex = rgbToHex(b);
  var stringHex = "0x" + redHex + greenHex + blueHex;
  spriteMaterial.color.setHex(stringHex);
}

function setLabelRGB(){
var redHex = rgbToHex(document.getElementById("lRvalueStim").value);
var greenHex = rgbToHex(document.getElementById("lGvalueStim").value);
var blueHex = rgbToHex(document.getElementById("lBvalueStim").value);
var stringHex = "0x" + redHex + greenHex + blueHex;
spriteMaterial.color.setHex(stringHex);
}
