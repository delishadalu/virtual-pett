
var food
var happyDog
var database
var foodS
var foodStock

function preload()
{
dogHappy=loadImage("images/dogImg1.png")
dogSad=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  database.ref('food').on("value",readPosition)

  dog= createSprite(400,400,50,50)
  dog.addImage(dogSad)
  dog.scale=0.3
}

function draw() {  
background(0)
	text("hai",100,100)
  drawSprites();
textSize(20)
text("foods left:"+food,300,200)
text("press up arrow to feed dog",100,50)

if(keyWentdown(UP_ARROW)&& food!==0){
  food--
  writestock(food)
}

}
if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.3
}
function readPosition(data){
  food=data.val()
}

function writeStock(data){
database.ref('/').set({
  food:data 
})
}
