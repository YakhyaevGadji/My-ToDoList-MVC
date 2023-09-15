let view = (function() {
    
    let DOMstrings = {
        form: '#form',
        input: '#input-add',
        taskList: '#list',
        checkBoxDone: '#todolist__checkbox'
    }

    function getInput() {
        return {
            value: document.querySelector(DOMstrings.input).value
        }
    }

    function renderTaskHTML(taskObj, date) {
        
        const cssChecked = taskObj.done ? 'checked' : '';

        const taskHTML = `<li class="todolist__list-item" id="${taskObj.id}">
        <label class="todolist__label">
            <input type="checkbox" data-done="done" ${cssChecked} class="todolist__checkbox display-checkbox">
            <span class="todolist__checkbox-style"></span>
     
            <div class="todolist__text">${taskObj.value}</div>
        </label>
        <input type="text" class="todolist__change-text">
        <div class="todolist__func">
            <div class="todolist__settings">
                <button class="todolist__settings-btn">Настроить</button>
                <ul class="todolist__settings-list">
                    <li class="todolist__settings-item">
                        <button data-settings="favorite"
                            class="todolist__settings-btns todolist__settings-btn-favorites todolist__settings-btns--active">Избранное</button>
                    </li>
                    <li class="todolist__settings-item">
                        <button data-settings="delete" class="todolist__settings-btns">Удалить</button>
                    </li>
                    <li class="todolist__settings-item">
                        <button data-settings="change" class="todolist__settings-btns">Изменить</button>
                    </li>
                </ul>
            </div>
                <div class="todolist__date">${date}</div>
            </div>
        </li>`;

        document.querySelector(DOMstrings.taskList).insertAdjacentHTML('beforeend', taskHTML);
    }

    
    function clearInput() {
        const input = document.querySelector(DOMstrings.input);
        input.value = '';
    }


    
    return {
        getInput: getInput,
        DOMstrings: DOMstrings,
        renderTaskHTML: renderTaskHTML,
        clearInput: clearInput
    }
})();