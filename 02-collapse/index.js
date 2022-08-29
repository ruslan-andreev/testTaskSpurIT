//получаем в константы нужные элементы

const button = document.querySelector('.collapsible__button');
const buttonVisible = button.querySelector('.collapsible__action--visible');
const buttonHidden = button.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

//изначльно оставляем только кнопку "Скрыть содержимое"
//кнопку "Показать содержимое" скрываем
buttonHidden.style.display = 'none';

//определяем в каком изначальном состоянии контент
//для реализации преключения
let contentStatus = true

// в константы определяем првила анимации
//начальное и конечное положение для анимации
const animateContent = [
  { transform: 'translateY(-100%)', opacity: '0' },
  { transform: 'translateY(0)', opacity: '1' },
]

//задаем направление анимации и скорость (открываем контент)
const aniamtionShow = {
  duration: 200, 
  fill: 'forwards'
}
//задаем обратное направление анимации и скорость (скрываем контент)
const aniamtionHide = { 
  duration: 200, 
  direction: 'reverse', 
  fill: 'forwards' 
}

button.addEventListener('click', ()=>{
  contentStatus = !contentStatus
  if(contentStatus){
    buttonHidden.style.display = 'none';
    buttonVisible.style.display = 'block';
    content.animate(animateContent, aniamtionShow);
  }else{
    buttonHidden.style.display = 'block';
    buttonVisible.style.display = 'none';
    content.animate(animateContent, aniamtionHide);
  }
})