function sayHello(){
  var response = prompt("来者何人？？?");
  alert("喔，原来是 " + response + " , 欢迎来到米奇妙妙屋 !");
}

function myanswer(){
    var answer = prompt("你觉得悲伤青蛙想说的数字是:");
    if(answer){
      document.getElementById("Myanswer").innerHTML =  " · 你觉得 悲伤青蛙 想说的是    " + answer;
    }
    if (answer==1025){
      alert("哇，你太厉害了，回答正确！");
    }
    else{
      alert("没猜对唉，要不再想想？");
    }
}

function Getanswer(){
  var state = document.getElementById("trueanswer").style.display;
  if (state == "none"){
    document.getElementById("trueanswer").style.display = "block";
  }
  else{
    document.getElementById("trueanswer").style.display = "none";
  }
}

function Gettishi(){
  var state2 = document.getElementById("tips").style.display;
  if (state2 == "none"){
    document.getElementById("tips").style.display = "block";
  }
  else{
    document.getElementById("tips").style.display = "none";
  }
}

function Touch(){
  var imgget = document.getElementById("qinwa");
  imgget.onclick = function () {
    alert("别点我了，我害羞~");
  };
}
