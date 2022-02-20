//ecma2016 const, let, ', =>
//const = 변수 선언 후 수정불가 
//let = 스코프 단위의 변수(ex for문 안에서만 사용)
//parentNode 바로 위의 부모요소
//classList.contains jquery에서 hasClass 역활
//getBoundingClientRect() 해당요소의 넓이를 가지고 올 수 있음
//floor 소수점 버리기

const target = document.querySelector('.target'); 
const links = document.querySelectorAll('.mynav a');
const colors = ['deepskyblue', 'orange', 'black', 'green', 'gold', 'magenta', 'darkblue'];

// 링크요소 제어
for(let i = 0; i<links.length; i++){
    // links[i].addEventListener('click', function(e){e.preventDefault();});
    links[i].addEventListener('click', (e) => e.preventDefault());
    links[i].addEventListener('mouseenter', mouseenterFunc);
}

//마우스 호버 제어
function mouseenterFunc(){
    if(!this.parentNode.classList.contains('active')){
        //마우스 올라가지 않은 요소 제어
        for(let i = 0; i<links.length; i++){
            if(links[i].parentNode.classList.contains('active')){
                links[i].parentNode.classList.remove('active');
            }
            links[i].style.opacity = '0.25';
        }

        //마우스 올라간 요소 제어
        this.parentNode.classList.add('active');
        this.style.opacity ='1';

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset; // 화면 좌측과 윈도우 좌측에서 떨어진 거리
        const top = this.getBoundingClientRect().top + window.pageYOffset; // 화면 상단과 윈도우 상단에서 떨어진 거리
        const color = colors[Math.floor(Math.random() * links.length)];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
    }
}

function resizeFunc(){
    const active = document.querySelector('.mynav li.active');
    
    if(active){
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
    }
}

window.addEventListener('resize', resizeFunc);