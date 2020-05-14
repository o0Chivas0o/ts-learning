<template>
  <div id="app">
    <div class="inner">
      <newTodo @addTodo="addTodo"></newTodo>
      <TodoList :list="list" @updateTodo="updateTodo"></TodoList>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    // import {Component, Vue,Mixins} from "vue-property-decorator";
    // import {MyMixin} from "./mixins/mixin-one";

    import NewTodo from "./components/newTodo.vue";
    import TodoList from "./components/TodoList.vue";
    import Todo from './models/Todo'

    @Component({
        components: {
            NewTodo, TodoList
        },
        watch: {
            list(newValue: Array<Todo>) {
                localStorage.setItem('data', JSON.stringify(newValue));
            }
        }
    })
    export default class App extends Vue {
        list: Array<Todo> = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data') as string) : []

        addTodo(name: string) {
            const todo: Todo = {name: name, status: 'undone'}
            this.list.push(todo)
        }
        updateTodo(todo: Todo, part: Partial<Todo>) {
            const index: number = this.list.indexOf(todo)
            const newTodo: Todo = Object.assign({}, todo, part);
            console.log(todo, part, index);

            this.list.splice(index, 1, newTodo)
        }
    }
</script>

<style lang="scss" scoped>
  #app {
    display: flex;justify-content: center;align-items: center;
    .inner {
      padding: 20px;border: 1px solid;
    }
  }
</style>
