let stepIN = document.getElementById('stepInside');
let webDbtn = document.getElementById('wDpage');
let dSciBtn = document.getElementById('dSpage');
let dMarBtn = document.getElementById('dMpage');
let designPbtn = document.getElementById('gDpage');
let firstPage = document.querySelector('.first-page');
let secondPage = document.querySelector('.second-page');
let elonPage = document.querySelector('.elon-page');
let dataSciencePage = document.querySelector('.data-sciense-page');
let digitalMarketingPage = document.querySelector('.digital-marketing-page');
let graphicDesignerPage = document.querySelector('.graphic-design-page');
let finish = document.querySelector('.finish');
let tipsDiv = document.querySelector('.sugestii');
stepIN.addEventListener('click', function(){
    secondPage.style.display = "block";
    firstPage.style.display = "none";
});
webDbtn.addEventListener("click", function(){
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    elonPage.style.display = "block";
    tipsDiv.style.display= "block";
});
dSciBtn.addEventListener('click', function(){
    secondPage.style.display = "none";
    firstPage.style.display = "none";    secondPage.style.display = "none";
    dataSciencePage.style.display = "block";
    tipsDiv.style.display= "block";
});
dMarBtn.addEventListener('click', function(){
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    digitalMarketingPage.style.display = "block";
    tipsDiv.style.display= "block";
});
designPbtn.addEventListener("click", function(){
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    graphicDesignerPage.style.display = "block";
    tipsDiv.style.display= "block";
});
