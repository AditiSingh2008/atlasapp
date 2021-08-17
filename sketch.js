var playerImg,bgImg,sImg,aImg;
var form;
var database;
var inputBox
var searchBtn
var result;

function preload(){
  bgImg=loadImage("atlas img.jpg")
aImg=loadImage("__.png")
  sImg=loadImage("seacrh 4.png")
 
  
  //greeting()
 // GetTime()
}

function setup(){
 //database = firebase.database();
 //console.log(database);
  createCanvas(500,800);
  inputBox=createInput("ENTER COUNTRY")
  inputBox.position(500,450)
 searchBtn=createButton("Search")
  searchBtn.position(550,480)
  result=createElement('hello')
    result.position(500,600)
 // player = createSprite(250,250,10,10);
  //player.addImage("playerImg")

//form= new Form()

}

  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);


function draw(){
  background(bgImg);
 
 // image (playerImg,200,350,0,0)
   /* if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }*/
    
   // form.display();
   
    //console.log(form.input2.value())
    
   // var name=form.input.value();
    //console.log(name)
    
    AtlasApi()
}
  
  async function AtlasApi(){
    var response=await fetch("data/countries.json")
    var responseJson = await response.json();
//console.log(responseJson)
    searchBtn.mousePressed(()=>{

      for(var i=0;i<244;i++){
      if(inputBox.value()===responseJson[i].country){
        console.log(responseJson[i].city)
        fill("black")
        result.html("The Capital City Of "+responseJson[i].country+" Is "+responseJson[i].city)
       // text("responseJson[i].city",250,300)
       // console.log
      }
    
    }
   
    })
   // console.log(responseJSON[0].country)
    //console.log(responseJson)
    //console.log(responseJSON[0].city)

       
     }
