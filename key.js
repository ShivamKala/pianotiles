var square=document.querySelectorAll(".square");
var arr=["green","pink","orange","red","blue","yellow"];
for(var i=0;i<6;i++){
  square[i].style.background=arr[i];
}
for(var i=0;i<square.length;i++){
  square[i].addEventListener("click",function(){
    if(this.textContent=="W"){
      var snd = new Audio("sounds/moon.mp3");
      snd.play();
      $(square[0]).addClass("pressed");
      setTimeout(function(){
      $(square[0]).removeClass("pressed");
      },100);

    }else if(this.textContent=="A"){
      var snd1 = new Audio("sounds/bubbles.mp3");
      snd1.play();
      $(square[1]).addClass("pressed");
      setTimeout(function(){
      $(square[1]).removeClass("pressed");
      },100);
    }else if(this.textContent=="S"){
      var snd2 = new Audio("sounds/strike.mp3");
      snd2.play();
      $(square[2]).addClass("pressed");
      setTimeout(function(){
      $(square[2]).removeClass("pressed");
      },100);
    }else if(this.textContent=="D"){
      var snd3 = new Audio("sounds/ufo.mp3");
      snd3.play();
      $(square[3]).addClass("pressed");
      setTimeout(function(){
      $(square[3]).removeClass("pressed");
      },100);
    }else if(this.textContent==="Z"){
      var snd4 = new Audio("sounds/wipe.mp3");
      snd4.play();
      $(square[4]).addClass("pressed");
      setTimeout(function(){
      $(square[4]).removeClass("pressed");
      },100);
    }else if(this.textContent==="X"){
      var snd5 = new Audio("sounds/zig-zag.mp3");
      snd5.play();
      $(square[5]).addClass("pressed");
      setTimeout(function(){
      $(square[5]).removeClass("pressed");
      },100);
    }
  });
}


document.addEventListener("keypress",function(e){
  if(e.which===119){
    var snd = new Audio("sounds/moon.mp3");
    snd.play();
    $(square[0]).addClass("pressed");
    setTimeout(function(){
    $(square[0]).removeClass("pressed");
    },100);
  }else if(e.which===97){
    var snd1 = new Audio("sounds/bubbles.mp3");
    snd1.play();
    $(square[1]).addClass("pressed");
    setTimeout(function(){
    $(square[1]).removeClass("pressed");
    },100);
  }else if(e.which===115){
    var snd2 = new Audio("sounds/strike.mp3");
    snd2.play();
    $(square[2]).addClass("pressed");
    setTimeout(function(){
    $(square[2]).removeClass("pressed");
    },100);
  }else if(e.which===100){
    var snd3 = new Audio("sounds/ufo.mp3");
    snd3.play();
    $(square[3]).addClass("pressed");
    setTimeout(function(){
    $(square[3]).removeClass("pressed");
    },100);
  }else if(e.which===122){
    var snd4 = new Audio("sounds/wipe.mp3");
    snd4.play();
    $(square[4]).addClass("pressed");
    setTimeout(function(){
    $(square[4]).removeClass("pressed");
    },100);
  }else if(e.which===120){
    var snd5 = new Audio("sounds/zig-zag.mp3");
    snd5.play();
    $(square[5]).addClass("pressed");
    setTimeout(function(){
    $(square[5]).removeClass("pressed");
    },100);
  }
});
