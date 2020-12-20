// columns

let column1 = document.querySelector('.columns #column1')
// console.log('1', column1)
let column2 = document.querySelector('.columns #column2')
// console.log('2', column2)
let img_content = document.querySelectorAll('.img_space img')
// console.log('img', img_content)

column1.addEventListener('click', function () {
for(i = 0 ; i < img_content.length ; i++) {
        img_content[i].style.width = '99%';
        img_content[i].style.transition= '0.2s';
    }
});
column2.addEventListener('click', function () {
for(i = 0 ; i < img_content.length ; i++) {
        img_content[i].style.width = '46.5%';
        img_content[i].style.transition= '0.2s';
    }
});