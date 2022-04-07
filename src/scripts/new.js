let newButton = document.querySelector('.new__button');
let newForm = document.querySelector('.fields__group');
const creationForm = document.querySelector('.js-create-form');
let captionTask = document.querySelector('.fields__input');
let textareaTask = document.querySelector('.fields__definition');




function show() {
    newForm.classList.toggle('is-active');
}

newButton.addEventListener('click', show);
creationForm.addEventListener('submit', function(e){
    e.preventDefault();
    const title = captionTask.value;
    const text = textareaTask.value;
    const divTask = document.querySelector('.js-task-item');
    const check = document.querySelector('.task__check');
    const clone = divTask.cloneNode(true);
    clone.classList.remove('js-task-item');
    const titleTask = clone.querySelector('.task__caption');
    const textTask = clone.querySelector('.task__definition');
    titleTask.textContent = title;
    textTask.textContent = text;
    const listTasks = document.querySelector('.tasks__list');
    const item = document.createElement('li');
    item.classList.add('task');
    item.append(clone);
    listTasks.append(item);
    if (check.checked) {
        titleTask.classList.add('important');
    } 
})
