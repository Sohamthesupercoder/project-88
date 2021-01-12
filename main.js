var canvas = new fabric.Canvas('myCanvas');
var block_img_width = 140;
var block_img_height = 150;
var player_x = 10;
var player_y = 10;
var ctx=canvas.getContext("2d");

var player_object = "";
var block_img_object = "";

var body=["body1.png",
"body2.png",
"body3.png"];

var face=["face1.png",
"face2.png",
"face3.png",
"face4.png"];

var leftie=["lefthand1.png",
"lefthand2.png",
"lefthand3.png",
"lefthand4.png",
"lefthand5.png"];

var leg=["leg1.png",
"leg2.png",
"leg3.png"];

var righthand=["righthand1.png",
"righthand2.png",
"righthand3.png",
"righthand4.png"];

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        console.log("player update");
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        console.log("height , width");
        player_object.set({ top: player_y, left: player_x });
        console.log("player set");
        canvas.add(player_object);
    }
    );
    

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);

        block_img_object.set({ top: player_y, left: player_x });
        canvas.add(block_img_object);
    }

    );


}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var key_value = e.keyCode;
    console.log(key_value);


    if (e.shiftKey == true && key_value == "80") {
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_width;
    }
    if (e.shiftKey == true && key_value == "77") {
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_width;
    }
    if (key_value == 70) {
        new_image("face2.png");
        console.log("f");
    }
    if (key_value == 66) {
        new_image("body3.png");
        console.log("b");
    }
    if (key_value == 76) {
        new_image("leg1.png");
        console.log("l");
    }
    if (key_value == 82) {
        new_image("righthand4.png");
        console.log("rh");
    }
    if (key_value == 72) {
        new_image("lefthand1.png");
        console.log("h");
    }
    if (key_value == 38) {
        goup()
        console.log("up");
    }
    if (key_value == 40) {
        godown()
        console.log("down");
    }
    if (key_value == 37) {
        goleft()
        console.log("left");
    }
    if (key_value == 39) {
        goright()
        console.log("right");
    }


}





function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


function goup(){
    if(player_y >= 0){
     player_y= player_y - 10;
     console.log("block image height= " + block_img_height);
     console.log("when up arrow key is pressed, X is= " + player_x + ", player Y is=" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function godown(){
    if(player_y <= 465){
     player_y= player_y + 10;
     console.log("block image height= " + block_img_height);
     console.log("when down arrow key is pressed, X is= " + player_x + ", player Y is=" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function goright(){
    if(player_x <= 800){
     player_x= player_x + 10;
     console.log("block image height= " + block_img_height);
     console.log("when right arrow key is pressed, X is= " + player_x + ", player Y is=" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function goleft(){
    if(player_x >= 0){
     player_x= player_x - 10;
     console.log("block image height= " + block_img_height);
     console.log("when left arrow key is pressed, X is= " + player_x + ", player Y is=" + player_y);
    canvas.remove(player_object);
    player_update();
    }
}