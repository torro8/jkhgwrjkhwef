let body = document.querySelector('body')
// let div1 = document.querySelector('.div1')
// let div2 = document.querySelector('.div2')

console.log(body);
// console.log(div1);
// console.log(div2);

let changeBtn = document.querySelector('.change')

function changeTheme() {
    console.log('click');
    body.classList.toggle('body')
    // div1.classList.toggle('div1-dark')
    // div2.classList.toggle('div2-dark')
}

changeBtn.addEventListener('click', changeTheme)