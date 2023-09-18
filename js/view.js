let view = (function() {
    
    let DOMstrings = {
        form: '#form',
        input: '#input-add',
        taskList: '#list',
        checkBoxDone: '#todolist__checkbox',
        setting: '.todolist__settings-btn',
        settingList: '.todolist__settings-list',
        filterList: '.todolist__filter-list',
        filter: '.todolist__filter-select'
    }

    function getInput() {
        return {
            value: document.querySelector(DOMstrings.input).value
        }
    }

    function renderTaskHTML(taskObj) {
        
        const cssChecked = taskObj.done ? 'checked' : '';
        const cssFavorite = taskObj.done ? 'todolist__list-item--favorites' : '';

        const taskHTML = `<li class="todolist__list-item ${cssFavorite}" id="${taskObj.id}">
        <label class="todolist__label">
            <input type="checkbox" data-done="done" ${cssChecked} class="todolist__checkbox display-checkbox">
            <span class="todolist__checkbox-style"></span>
     
            <div class="todolist__text">${taskObj.value}</div>
        </label>
        <input type="text" class="todolist__change-text">
        <div class="todolist__func">
            <div class="todolist__settings">
                <button class="todolist__settings-btn" data-setting>Настроить</button>
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
                <div class="todolist__date">${taskObj.date}</div>
            </div>
        </li>`;

        document.querySelector(DOMstrings.taskList).insertAdjacentHTML('beforeend', taskHTML);
    }

    
    function clearInput() {
        const input = document.querySelector(DOMstrings.input);
        input.value = '';
    }

    function toggleSetting(elem) {
        elem.classList.toggle('todolist__settings-btn--active');
    }

    function toggleFilter() {
        document.querySelector(DOMstrings.filterList).classList.toggle("todolist__filter-list--active");
    }

    function toggleFavorite(itemId) {
        let toggleElem = document.getElementById(itemId);
        toggleElem.classList.toggle('todolist__list-item--favorites');
    }

    function removeTask(item) {
        item.remove();
    }

    function changeTask(item) {
        item.classList.toggle('todolist__list-item--change');
        let taskText = item.querySelector('.todolist__text');
        let input = item.querySelector('[type="text"]');
        input.focus();
        if(item.classList[1] == 'todolist__list-item--change') {
            input.value = taskText.textContent;
            
        }else {
            taskText.textContent = input.value;
            return taskText.textContent;
        }
        
    }

    function outputFilter(filters, date) {
        filters.forEach((item) => {
            renderTaskHTML(item, date);
        });
        
    }

    function removeElementsInList() {
        document.querySelector(DOMstrings.taskList).innerHTML = "";
    }
    

    return {
        getInput: getInput,
        DOMstrings: DOMstrings,
        renderTaskHTML: renderTaskHTML,
        clearInput: clearInput,
        toggleSetting: toggleSetting,
        toggleFilter: toggleFilter,
        removeTask: removeTask,
        toggleFavorite: toggleFavorite,
        changeTask: changeTask,
        outputFilter: outputFilter,
        removeElementsInList: removeElementsInList
    }
})();