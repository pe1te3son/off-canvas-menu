/**
* Off canvas menu function
* include all in your scripts file
*/
var offCanvas = function(){
  var $button = document.getElementById('off-btn');
  var $body = document.getElementById('off-body');
  var $nav = document.getElementById('off-nav');

  $button.addEventListener('click', function(e){
    $nav.classList.toggle('off-shift');
    $body.classList.toggle('off-shift');
  }, false);
}

offCanvas();
