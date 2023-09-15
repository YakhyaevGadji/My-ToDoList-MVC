let model = (function() {
    let Task = function(id, value, done, favorite) {
        this.id = id,
        this.value = value,
        this.done = done,
        this.favorite = favorite
    }


    function addTask(input) {
        let newTask;

        newTask = new Task(Date.now(), input, done = false, favorite = false);

        data.allTasks.push(newTask);

        return newTask;
    }


    let data = {
        allTasks: [],
        favorites: [],
        deletes: []
    }

    return {
        addTask: addTask,
        test: function() {
            console.log(data);
        }
    }
})();