const panels = document.querySelectorAll('.panel');

function togglesOpen(){
    this.classList.toggle('open');
}
function togglesActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click',togglesOpen));
panels.forEach(panel => panel.addEventListener('transitionend',togglesActive));








