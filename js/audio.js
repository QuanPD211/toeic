var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

ctrl.onClick = function () {


if(ctrl.className == "glyphicon glyphicon-play-circle") {
        ctrl.className="glyphicon glyphicon-pause";
       yourAudio["play"]();
}
else if (ctrl.className == "glyphicon glyphicon-pause"){
    
     ctrl.className="glyphicon glyphicon-play-circle";
    yourAudio["pause"]();
    
}
};