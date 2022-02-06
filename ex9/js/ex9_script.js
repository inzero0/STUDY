var btn = document.getElementById('submit'),
    container = document.querySelector('.container');

// addEventListener('x', function(){}) : 이벤트 x 하면 함수가 실행됨
//  click, mouseenter, mouseleave, keyup, keydown, change, load, select 등

btn.addEventListener('click',function(){
    btn.style.color = 'red';
})
container.addEventListener('mouseenter', function(){
    console.log('마우스가 들어왔습니다.');
})
container.addEventListener('mouseleave', function(){
    console.log('마우스가 나갔습니다.');
})