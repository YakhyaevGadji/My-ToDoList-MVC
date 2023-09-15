let controller = (function(ctrlModel, ctrlView) {

    function setEventListnere() {
        let DOMelem = ctrlView.DOMstrings;
        
        document.querySelector(DOMelem.form).addEventListener('submit', addTask);
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
            ctrlModel.test();
        }
        
    }

    return {
        init: setEventListnere
    }
    
})(model, view);

controller.init();