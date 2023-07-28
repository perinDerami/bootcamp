var url="https://api.adviceslip.com/advice";
let text=document.querySelector(".text");
let btn=document.querySelector(".btn");
btn.onclick=() =>{
    alert('hi')
    fetch(url).then(response => response.json()).then(response => {
        console.log(response.slip.advice);
        console.log(response.slip.id);
        
})
}