let result = document.getElementById('result');
let text = document.getElementById('text');
text.addEventListener('input',()=>{
    result.innerText = text.value.length;
    // console.log(text.value.length);
});