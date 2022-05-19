var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var formbg;
var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  formbg = loadImage("images/form_bg.jpg");
  //car1_img = loadImage("images/car1.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth-10, displayHeight-180);
  game = new Game();
  form = new Form();
  form.display();
  //game.start(); 
}


function draw(){
 
}

