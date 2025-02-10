
// var welcomesec   = document.querySelector('.welcome-sec'),
 var shapone   = document.querySelector('.shap1'),
     shaptwo   = document.querySelector('.shap2'),
     shapthree   = document.querySelector('.shap3'),
     shapfour   = document.querySelector('.shap4'),
     shapfive   = document.querySelector('.shap5');

window.addEventListener('mousemove',function(e){
    var pageX = e.clientX - window.innerWidth/1,
        pageY = e.clientY - window.innerHeight/1;
    shapone.style.transform = 'translateX(' + (7 + pageX/80) + '%) translateY(' + (1 + pageY/80) + '%)';
    shaptwo.style.transform = 'translateX(' + (7 + pageX/80) + '%) translateY(' + (1 + pageY/80) +  '%)';
    shapthree.style.transform = 'translateX(' + (7 + pageX/80) + '%) translateY(' + (1 + pageY/80) +  '%)';
    shapfour.style.transform = 'translateX(' + (7 + pageX/80) + '%) translateY(' + (1 + pageY/80) +  '%)';
    shapfive.style.transform = 'translateX(' + (7 + pageX/80) + '%) translateY(' + (1 + pageY/80) +  '%)';
});
