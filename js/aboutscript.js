function cursorIn(event){
    var centerX = screen.width/2;
    var centerY = screen.width/4;
    var x = event.screenX;
    var y = event.screenY;
    console.log(centerX + "-" + centerY);
    var shadowX = -1*(x - centerX);
    var shadowY = -1*(y - centerY);
    var distance = Math.sqrt(((x-centerX)*(x-centerX)) + ((y-centerY)*(y-centerY)))
    shadowX = Math.ceil(shadowX*10/distance);
    shadowY = Math.ceil(shadowY*10/distance);
    var shadowVals = "drop-shadow(" + shadowX + "px " + shadowY + "px " + " 7.5px rgb(170, 170, 170))";
    document.getElementById("main_img").style.filter = shadowVals;
}
function cursorGone(){
    document.getElementById("main_img").style.filter = "";
}