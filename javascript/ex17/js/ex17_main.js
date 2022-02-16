/* 
링크를 클릭하면 클릭한 요소의 href 속성 값을 변수에 저장.
저장된 값에서 # 삭제 
*/
var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content div');

for(var i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault(); // 기본 링크 막기

        var orgTarget = e.target.getAttribute('href'); // .getAttribute() 속성 가지고 오기

        var tabTarget = orgTarget.replace('#',''); //.replace('a', 'b') a를 b로 대체
       
        for(var x = 0; x < tabContent.length; x++){
            tabContent[x].style.display = 'none';
        }

        document.getElementById(tabTarget).style.display = 'block';

        for(var j = 0; j < targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}

document.getElementById('tabs-1').style.display = 'block';
