let controller = (function(ctrlModel, ctrlView) {

    function setEventListnere() {
        let DOMelem = ctrlView.DOMstrings;
        
        document.querySelector(DOMelem.form).addEventListener('submit', addTask);
    }

    function addTask(event) {
        event.preventDefault();
        
        let input = ctrlView.getInput();
        
        let newTask = ctrlModel.addTask(input.value);
        ctrlView.renderTaskHTML(newTask);
        ctrlView.clearInput();
        ctrlModel.test();

    }



    return {
        init: setEventListnere
    }
})(model, view);

controller.init();