
// link of links - link 안에 있는 links 불러오기
// dataset = data로 저장되어있을 경우 getAtrribute 역할
//var str = '나는'+(a+b)+'살이고' 와 let str = `나는 $(a+b)살이고` 동일
const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showclass = 'bg-show';

for(const link of links){
    const img = new Image();
    img.src = link.dataset.bg;
    
    link.addEventListener('mouseenter', function(){
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
        document.body.classList.add(showclass);
    });
    link.addEventListener('mouseleave', function(){
        document.body.classList.remove(showclass);;
    });
}

