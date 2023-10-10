var timer = 5;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
   hitrn = Math.floor(Math.random() * 10);
   document.querySelector("#hitval").textContent=hitrn;
}

function makebubble(){

    var clutter="";
    //var hexValues =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    //var newColor="#";
    //for(var i= 0; i<6;i++){
    //    var x =Math.round(Math.random() * 16);
    //    var y=hexValues[x];
      //  newColor +=y;
    //}
   
//document.getElementById("container").style.backgroundColor = newColor;
//document.getElementById("output").innerHTML=newColor;

for( var i = 1; i<=102; i++){
    var rn = Math.floor(Math.random()*10)
     clutter  +=`<div class="bubble">${rn}</div>`;
     //clutter +=`<div class="bubble">${rn}</div>`;
   // document.getElementById("#clutter").innerHTML.style.backgroundColor = newColor;
     }



document.querySelector("#pbtm").innerHTML = clutter;



}

function runTimer(){
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            ClearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "";
        }
    },1000);

}

document.querySelector("#pbtm")
.addEventListener("click",function(dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }

});

runTimer();
makebubble();
getNewHit();
//increaseScore();
