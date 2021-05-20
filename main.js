var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var rover_xposition = 10;
var rover_yposition = 10;
var rover_image = "rover.png";
backgorund_image_array = ["mars.jpg", "crane on mars??.jpeg", "rocks on mars look cool.jpeg"];
var rng_thingy = Math.floor(Math.random() * 3);
console.log("Hiiiiiiii rng_thingy is" + rng_thingy);
var backgorund_image = backgorund_image_array(rng_thingy);
console.log(backgorund_image);
function add() {
    backgorund_image_tag = new Image();
    backgorund_image_tag.onload = upload_backgorund;
    backgorund_image_tag.src = backgorund_image;
    rover_image_tag_NOTBACKGORUND = new Image();
    rover_image_tag_NOTBACKGORUND.onload = upload_ROVERIMAGENOTBACKGORUND;
    rover_image_tag_NOTBACKGORUND.src = rover_image;
}
function upload_backgorund() {
    ctx.drawImage(backgorund_image_tag, 0, 0, canvas.width, canvas.height);
}
function upload_ROVERIMAGENOTBACKGORUND() {
    ctx.drawImage(rover_image_tag_NOTBACKGORUND, rover_xposition, rover_yposition, rover_width, rover_height);
}

window.addEventListener("keydown", keydown_function_notbackgorund);
function keydown_function_notbackgorund(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        up();
        console.log("up key pressed");
    }
    if (keypressed = "40") {
        down();
        console.log("down key pressed");
    }
    if (keypressed = "37") {
        left();
        console.log("left key pressed");
    }
    if (keypressed = "39") {
        right();
        console.log("right key pressed");
    }
}
function up(){
    if(rover_yposition > 0){
        rover_yposition = rover_yposition - 10;
        console.log("up key pressed. rover_yposition is" + rover_yposition + "ok now next line");
        upload_backgorund();
        upload_ROVERIMAGENOTBACKGORUND();
    }
}
function down(){
    if(rover_yposition < 500){
        rover_yposition = rover_yposition + 10;
        console.log("down key pressed. rover_yposition is" + rover_yposition + "ok now next line");
        upload_backgorund();
        upload_ROVERIMAGENOTBACKGORUND();
    }
}
function left(){
    if(rover_xposition > 0){
        rover_xposition = rover_xposition - 10;
        console.log("left key pressed. rover_xposition is" + rover_xposition + "ok now next line");
        upload_backgorund();
        upload_ROVERIMAGENOTBACKGORUND();
    }
}
function right(){
    if(rover_yposition < 700){
        rover_yposition = rover_yposition + 10;
        console.log("right key pressed. rover_yposition is" + rover_xposition + "ok now next line");
        upload_backgorund();
        upload_ROVERIMAGENOTBACKGORUND();
    }
}
