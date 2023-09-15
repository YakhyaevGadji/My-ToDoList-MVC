let controller = (function(ctrlModel, ctrlView) {

    function setEventListnere() {
        let DOMelem = ctrlView.DOMstrings;
        
        document.querySelector(DOMelem.form).addEventListener('submit', addTask);
        document.querySelector(DOMelem.taskList).addEventListener('click', checkBoxDone);
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

    return {
        init: setEventListnere
    }
    
})(model, view);

controller.init();