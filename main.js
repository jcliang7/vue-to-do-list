new Vue({
    el: "#app",
    data: {
        message: 'Hello, I have to do these things today.',
        inputValue: null,
        todos: [
            { text: "Modify the PPT of Lispeak.", done: false },
            { text: "Test Coding-pass", done: false },
            { text: "Play around in JSFiddle", done: true },
            { text: "Build something awesome", done: true }
        ]
    },
    methods: {
        toggle: function (todo) {
            console.log("Beofre:", todo.done)
            todo.done = !todo.done
            console.log("After:", todo.done)
        },

        add: function () {
            console.log(this.inputValue)
            this.todos.push({ text: this.inputValue, done:false });
            this.inputValue = "";
            console.log("Why the word not show?")
        }

    }
})