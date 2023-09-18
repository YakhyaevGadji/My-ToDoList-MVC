let controller = (function(ctrlModel, ctrlView) {

    function setEventListnere() {
        let DOMelem = ctrlView.DOMstrings;
        
        document.querySelector(DOMelem.form).addEventListener('submit', addTask);
        document.querySelector(DOMelem.taskList).addEventListener('click', checkBoxDone);
        document.querySelector(DOMelem.taskList).addEventListener('click', addSetting);
        document.querySelector(DOMelem.filter).addEventListener('click', addFilter);
        document.querySelector(DOMelem.taskList).addEventListener('click', deletAndFavoriteAndChange)
    }

    function addTask(event) {
        event.preventDefault();
        
        let input = ctrlView.getInput();
        let text = input.value;

        if(text.trim() !== '') {
            let newTask = ctrlModel.addTask(input.value);
            ctrlView.renderTaskHTML(newTask, ctrlModel.addDate());
            ctrlView.clearInput();
            ctrlModel.addDate();
            // ctrlModel.test();
        }
        
    }

    function checkBoxDone(event) {
        if(event.target.dataset.done === 'done') {
            let taksId = event.target.closest('.todolist__list-item').id;
            
            ctrlModel.checkDoneTask(taksId)
            ctrlModel.test();
        }
    }

    function addSetting(event) {
        if(event.target.hasAttribute('data-setting')) {
            ctrlView.toggleSetting(event.target);
        }
    }
    function addFilter() {
        ctrlView.toggleFilter();
    }
    function deletAndFavoriteAndChange(event) {
        let item = event.target.closest('.todolist__list-item');
        
        if(event.target.dataset.settings === 'delete') {
            ctrlModel.deleteTask(item.id);
            ctrlView.removeTask(item);
            ctrlModel.test();
        }else if(event.target.dataset.settings === 'favorite') {
            ctrlModel.favoriteTask(item.id);
            ctrlView.toggleFavorite(item.id);
            ctrlModel.test();
        }else if(event.target.dataset.settings === 'change') {
            let taskNewText = ctrlView.changeTask(item);
            ctrlModel.changeTask(item, taskNewText);
        }
    }

    return {
        init: setEventListnere
    }
    
})(model, view);

controller.init();