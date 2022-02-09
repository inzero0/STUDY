
document.addEventListener('click', lightbox);

function lightbox(event) {
    var elem = event.target,
        elemId = elem.getAttribute('id'),
        lightBox = document.getElementById('lightbox-overlay'),
        lightBoxImg = document.getElementById('lightbox-image'),
        newImg = new Image();

    //A.hasAttribute(b) = A 요소가 b라는 소성을 가지고 있는지 확인 true, false로 표현
    //.onload = 화면에 로드되면 할 일

    if(elem.hasAttribute('data-lightbox')){
        event.preventDefault();
        newImg.onload = function(){
            lightBoxImg.src = this.src;
        }
        newImg.src = elem.getAttribute('data-lightbox');
        lightBox.classList.add('visible');
    }
    console.log(lightBox = document.getElementById('lightbox-overlay'))
    if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image') {
        lightBox.classList.remove('visible');
    }
}

/* 
    var img = document.querySelectorAll('.gallery img'),
        lightbox = document.querySelector('#lightbox-overlay'),
        lightboxImg = lightbox.querySelector('img');

    for(var i = 0; i < img.length; i++){
        img[i].addEventListener('click',function(){
            var imgNewSrc = this.getAttribute('data-lightbox');
            lightboxImg.setAttribute('src',imgNewSrc);
            lightbox.classList.add('visible');
        });
    }
    lightbox.addEventListener('click',function(){
        this.classList.remove('visible');
    })

 */
    