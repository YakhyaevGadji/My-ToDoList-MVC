let model = (function() {
    let Task = function(id, value, done, favorite, deleted) {
        this.id = id,
        this.value = value,
        this.done = done,
        this.favorite = favorite,
        this.deleted = deleted
    }

    function addTask(input) {
        let newTask;

        newTask = new Task(Date.now(), input, false, false, false);

        data.push(newTask);

        return newTask;
    }

    function addDate() {
        let date = new Date();
        let newdate, dateMonthe;

        dateMonthe = date.getMonth() + 1;

        newdate = date.getDate() + ':' + (date.getMonth() < 10 ? '0' : '') + dateMonthe + ':' + date.getFullYear();

        return newdate;
    }

    function checkDoneTask(taskId) {
        data.forEach((item) => {
            if(Number(taskId) === item.id) {
                item.done = !item.done;
            }
        });
    }
    function deleteTask(itemId) {
        data.forEach((item) => {
            if(item.id === Number(itemId)) {
                item.deleted = true;
            }
        });
    }

    function favoriteTask(taskId) {
        data.forEach((item) => {
            if(item.id === Number(taskId)) {
                item.favorite = !item.favorite;
            }
        });
    }

    let data = []

    return {
        test: function() {
            console.log(data);
        },
        addTask: addTask,
        addDate: addDate,
        checkDoneTask: checkDoneTask,
        deleteTask: deleteTask,
        favoriteTask: favoriteTask
    }
})();