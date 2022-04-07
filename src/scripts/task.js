let tasks = document.querySelectorAll('.task__caption');
let definition = document.querySelector('.task__definition');

for (let task of tasks) {
    task.addEventListener('click',function(){
    definition.classList.toggle('js-definition-show');
    });
}
