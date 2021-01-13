// 브라우저 높이, 폭
var $_h = window.innerHeight;
var $_w = window.innerWidth;

function mvmoon($,iter,speed) {
    let $path = [];
    for (var i=0; i<iter; i++) {
      let rnd1 = ($_h)*Math.random();
      let rnd2 = ($_w)*Math.random();
      $path.push({top:rnd1+'px' , left:rnd2+'px'});
    }
    $path[iter]=$path[0];
  $.animate($path, { 
  // timing options
    duration: speed*iter*1000,
    iterations: Infinity
  });
}

