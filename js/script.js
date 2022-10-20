const btn = document.querySelector('.block-btn'),
    close = document.querySelector('.close'),
    block = document.querySelector('.modal-block');

btn.addEventListener('click', () => {
    block.style.display = 'block'
})
close.addEventListener('click', () => {
    block.style.display = 'none'
})