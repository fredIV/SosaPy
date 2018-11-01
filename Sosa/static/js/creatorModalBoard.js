var BoardContainer, BoardScene, BoardCamera, BoardRenderer, BoardControl, Boardmaterial, skyBoxMaterial, BoardCoverBool, BoardCoverColor, BoardColor;
var BoardMesh;

BoardCoverBool = false;
BoardCoverColor = "0x0000FF";
initBoard();
animateBoard();

function initBoard() {
  // SCENE
  BoardScene = new THREE.Scene();

  // CAMERA
  var SCREEN_WIDTH = 500, SCREEN_HEIGHT = 500;
  var VIEW_ANGLE = 5, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
  BoardCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
  BoardScene.add(BoardCamera);
  BoardCamera.position.set(0,0,400);
  BoardCamera.lookAt(BoardScene.position);

  // RENDERER
  if ( Detector.webgl ) {
    BoardRenderer = new THREE.WebGLRenderer( {antialias:true} );
  } else {
    BoardRenderer = new THREE.CanvasRenderer();
  }
  BoardRenderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  BoardContainer = document.getElementById( 'ThreeJSBoard' );
  BoardContainer.appendChild( BoardRenderer.domElement );
  // CONTROLS
  BoardControl = new THREE.OrbitControls( BoardCamera, BoardRenderer.domElement );

  // LIGHT
  hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
  hemiLight.color.setHSL( 0.6, 1, 0.6 );
  hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
  hemiLight.position.set( 0, 50, 0 );
  BoardScene.add( hemiLight );

  dirLight = new THREE.DirectionalLight( 0xdfebff, 1 );
  dirLight.position.set( 50, 200, 100 );
  dirLight.position.multiplyScalar( 1.3 );

  BoardScene.add( dirLight );

  // SKYBOX/FOG
  var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
  skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.BackSide } );
  var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
  BoardScene.add(skyBox);

  //Board
  var board = new THREE.PlaneGeometry(24, 24);
  Boardmaterial = new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0x05050, ambientLight: 0x0, shininess: 30 });
  BoardMesh = new THREE.Mesh( board, Boardmaterial );
  BoardMesh.position.set(0,0,0);
  BoardScene.add(BoardMesh);

  <!--For testing image -->
//  BoardMesh.material.map = THREE.ImageUtils.loadTexture('img/Psychology_image.png');
//  BoardMesh.needsUpdate = true;
  <!--End Test-->

  //Creates meshes on the sides of the board to make it look 3D
  var BoardSideGeo = new THREE.PlaneGeometry(24,1);
  var BoardSideMat = new THREE.MeshPhongMaterial({ color: 0xC0C0C0});
  var BoardSide = new THREE.Mesh(BoardSideGeo, BoardSideMat);
  BoardSide.position.set(0 , 12, -0.5);
  BoardSide.rotation.x = -Math.PI/2;
  BoardScene.add(BoardSide);
  var BoardSide = new THREE.Mesh(BoardSideGeo, BoardSideMat);
  BoardSide.rotation.x = -Math.PI/2;
  BoardSide.rotation.y = -Math.PI / 2;
  BoardSide.position.set(-12, 0, -0.5);
  BoardScene.add(BoardSide);
  var BoardSide = new THREE.Mesh(BoardSideGeo, BoardSideMat);
  BoardSide.rotation.x = -Math.PI/2;
  BoardSide.rotation.y = -Math.PI / 2 * 2;
  BoardSide.position.set(0,-12, - 0.5);
  BoardScene.add(BoardSide);
  var BoardSide = new THREE.Mesh(BoardSideGeo, BoardSideMat);
  BoardSide.rotation.x = -Math.PI/2;
  BoardSide.rotation.y = -Math.PI / 2 * 3;
  BoardSide.position.set(12, 0, - 0.5);
  BoardScene.add(BoardSide);
}
//updates grid selection if user changes dropdown option
function updateGrid(Input){
  document.getElementById('StartExperimentButton').href = "SOSA.html?demo=" + Input;
}
//functions to convert rgb to hex (Source: https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb)
function rgbToHex(rgb){
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;

  function fullColorHex(r,g,b){
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  }
}


function animateBoard()
{
  requestAnimationFrame( animateBoard );
  BoardControl.update();
  BoardRenderer.render( BoardScene, BoardCamera );

}

//creates a board cover
function ToggleCover(){
  BoardCoverBool = !BoardCoverBool;
  if(BoardCoverBool){
    Boardmaterial.color.setHex(BoardCoverColor);
  }
  else{
    Boardmaterial.color.setHex(BoardColor);
  }
}

//sets tilt lock
function setTiltLock()
{
  BoardControl.noTilt = !BoardControl.noTilt;
  BoardControl.update();

}

//sets rotate lock
function setRotLock(){
  BoardControl.noRotate = !BoardControl.noRotate;
  BoardControl.update();
}

//sets zoom lock
function setZoomLock(){
  BoardControl.noZoom = !BoardControl.noZoom;
  BoardControl.update();
}

//updates the color of the board
function setBoardRGB(){

  var redHex = rgbToHex(document.getElementById("BoardRvalue").value);
  var greenHex = rgbToHex(document.getElementById("BoardGvalue").value);
  var blueHex = rgbToHex(document.getElementById("BoardBvalue").value);
  BoardColor = "0x" + redHex + greenHex + blueHex;

  if(!BoardCoverBool){
    Boardmaterial.color.setHex(BoardColor);
  }
}

//updates the color of the background
function setBackgroundRGB(){
  var redHex = rgbToHex(document.getElementById("BackgroundRvalue").value);
  var greenHex = rgbToHex(document.getElementById("BackgroundGvalue").value);
  var blueHex = rgbToHex(document.getElementById("BackgroundBvalue").value);
  var stringHex = "0x" + redHex + greenHex + blueHex;
  skyBoxMaterial.color.setHex(stringHex);
}

//updates the color of the board cover
function setBoardCoverRGB(){
  var redHex = rgbToHex(document.getElementById("CoverRvalue").value);
  var greenHex = rgbToHex(document.getElementById("CoverGvalue").value);
  var blueHex = rgbToHex(document.getElementById("CoverBvalue").value);
  BoardCoverColor = "0x" + redHex + greenHex + blueHex;

  if(BoardCoverBool){
    Boardmaterial.color.setHex(BoardCoverColor);
  }
}

  function addBoardImage() {
//    BoardMesh.material.map = THREE.ImageUtils.loadTexture('img/Psychology_image.png');
//    BoardMesh.material.color.setHex("0xffffff");
//    BoardMesh.needsUpdate = true;
  }

  function ClearOff() {
    BoardMesh.material.map = null;
    BoardMesh.needsUpdate = true;
  }
