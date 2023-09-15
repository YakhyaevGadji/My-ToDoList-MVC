let model = (function() {
    let Task = function(id, value, done, favorite) {
        this.id = id,
        this.value = value,
        this.done = done,
        this.favorite = favorite
    }

    function addTask(input) {
        let newTask;

        newTask = new Task(Date.now(), input, false, false);
        console.log(data);

        data.allTasks.push(newTask);

        return newTask;
    }

    function addDate() {
        let date = new Date();
        let newdate, dateMonthe;

        dateMonthe = date.getMonth() + 1;

        newdate = date.getDate() + ':' + (date.getMonth() < 10 ? '0' : '') + dateMonthe + ':' + date.getFullYear();

        return newdate;
    }

    let data = {
        allTasks: [],
        favorites: [],
        deletes: []
    }

    return {
        test: function() {
            console.log(data);
        },
        addTask: addTask,
        addDate: addDate
    }
})();