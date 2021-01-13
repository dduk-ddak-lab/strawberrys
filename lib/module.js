
//Syntax
var $ = document.getElementById.bind(document);
var $_ = document.querySelectorAll.bind(document);
    
    
// 커스터마이징
var $p = 5;   // 초기 값!! 방향이 바뀔 때까지 걸리는 평균 시간(s)
var $r = 0.03; // 사이즈 감소량
var $s = 0.09; // 사이즈 최소값


// 딸기 무빙
var letsmv = $p=>$_('#moon').forEach($e=>mvmoon($e,100,$p));
letsmv($p);

// 스코어 데이터 불러오기
var data=[];
fetch("./data/data.json")
  .then(response=>response.json())
  .then(myjson=>data=myjson);

// 스코어
var score = 0, scale = 0.3; // 초기값
var image_mode = `<img src="image/a-strawberry.png" onclick="scoreup()" ondragstart="scoreup()">`;  // 딸기 모드!!
// 스코어 함수!
function scoreup() {
  score++;  // 일단 스코어 증가
  $('score').innerHTML=score; // 점수표 기록
  for (var key in data) {
    let $e = data[key]; // 데이터 저장
    if (score === $e[0]) {
      if ($e[0] === 200) {
        image_mode = `<img src="image/banana.png" onclick="scoreup()" ondragstart="scoreup()">`;  // 바나나 모드!!
      } else if ($e[0] === 500) {
        $_('body')[0].style.backgroundImage = `url("/image/bg1.jpg")`;  // 잔디밭
      } else if ($e[0] === 1000) {
        $_('body')[0].removeChild($('space'));
        $_('body')[0].innerHTML = `<br><br><h1 style="text-align:center; background-color:black;">  YOU WIN!! </h1>`;
      } 
      $('msg').innerHTML=$e[1]; // 메세지 바꿔주고
      // 새로운 딸기 소환
      var newDIV = document.createElement("div");
      newDIV.setAttribute("id","moon");
      newDIV.innerHTML = image_mode;
      $('space').appendChild(newDIV);
      // 딸기가 너무 작아지지 않도록!
      if (scale-$r >= $s) {scale -= $r;}
      // 딸기 축소술
      $_('img').forEach($i=>$i.style.transform = `scale(${scale})`);
      // 딸기 무빙
      letsmv($e[2]);
    }
  }
}