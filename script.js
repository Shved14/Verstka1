const images = document.querySelectorAll('.slider-img');/*Получение массива картинок*/
const controlls = document.querySelectorAll('.controlls ');/*Получение массива кнопок*/
let imageIndex = 0;

function show(index){
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) =>{
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')){
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        }
        else if (event.target.classList.contains('next')){
            let index = imageIndex + 1;
            if (index >= images.length){
                index = 0;
            }
            show(index);
        }
    })
})
show(imageIndex)

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const plus = item.querySelector('.plus');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            plus.textContent = '+';
        } else {
            answer.style.display = 'block';
            plus.textContent = '-';
        }
    });
});