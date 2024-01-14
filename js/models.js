export default class Models {
    constructor(){
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if(!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id: 0,
                    title: 'Learn JS',
                    description: 'Watch JS Tutorials',
                    completed: false,
                }
            ];
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length -1].id + 1;
        }
        
    }

    setView(view) {
        this.view = view;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos(){
        return this.todos.map((todo) => ({...todo}));
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);

        this.save();
        return{...todo}
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
    }

    removeToDo(id) {
        const index = this.findTodo(id);
        this.todos.splice(index,1);
        this.save();
    }

    editTodo(id, values) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        Object.assign(todo, values);
        this.save();
    }
}