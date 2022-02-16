var img = document.querySelectorAll('.gallery img'),
    lightbox = document.querySelector('#lightbox-overlay'),
    lightboxImg = lightbox.querySelector('img');

for(var i = 0; i < img.length; i++){
    img[i].addEventListener('click',function(){
        var imgNewSrc = this.getAttribute('data-ligtbox');
        lightboxImg.setAttribute('src',imgNewSrc);
        lightbox.classList.add('visible');
    });
}

lightbox.addEventListener('click',function(){
    this.classList.remove('visible');
})