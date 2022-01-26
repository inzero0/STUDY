var btn = document.getElementById('submit'),
    container = document.querySelector('.container');

// addEventListener('x', function(){}) : 이벤트 x 하면 함수가 실행됨
//  click, mouseenter, mouseleave, keyup, keydown, change, load, select 등

window.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.keyCode);
    // 키보드로 html dom을 조작할 수 있음
})