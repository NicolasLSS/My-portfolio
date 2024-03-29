const Letters="FULLSTACKDEVELOPER123456789";
let text = document.querySelector('h1')

animatetxt()

function animatetxt(){
    let iterations = 0;
    
    const interval = setInterval(() => {
        text.innerText = text.innerText.split("").map((letter,index) => {
            if(index < iterations){
                return text.dataset.value[index];
            }
            return Letters[Math.floor(Math.random() * 26)]
        }).join("");
        
        if(iterations>=text.dataset.value.length){
            clearInterval(interval);
        }
        iterations += 1/2;
    },60);
}

var icon = document.querySelector('img#icon');

function themeswitcher(){

    document.body.classList.toggle('dark-theme');
    
    if(document.body.classList.contains('dark-theme')){
        icon.src = 'img/toggle-on.png'
    }else{
        icon.src = 'img/toggle-off.png'
    }
    
}

/*
function animatetxt(){
    document.querySelector('h1').onmouseover = event =>{
        let iterations = 0;
    
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("").map((letter,index) => {
                    if(index < iterations){
                    return event.target.dataset.value[index];
                }
                return Letters[Math.floor(Math.random() * 26)]
            }).join("");
            
            if(iterations>=event.target.dataset.value.length){
                clearInterval(interval);
            }
            iterations += 1/2;
        },60);
    }

}
*/
