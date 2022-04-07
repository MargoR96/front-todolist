let seachField = document.querySelector('.field__input');
let searchForm = document.querySelector('.search__form');
let searchButton = document.querySelector('.search__button');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let taskList = document.querySelectorAll('.task__caption');
    const text = seachField.value;
    for (let task of taskList){
        const searchText = task.textContent;
        if (text === searchText) {
            task.style.backgroundColor = 'pink';
        }
    }
})
