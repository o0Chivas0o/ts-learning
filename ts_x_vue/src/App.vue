<template>
  <div id="app">
    <div class="inner">
      <newTodo @addTodo="addTodo"></newTodo>
      <TodoList :list="list"></TodoList>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    // import {Component, Vue,Mixins} from "vue-property-decorator";
    // import {MyMixin} from "./mixins/mixin-one";

    import NewTodo from "./components/newTodo.vue";
    import TodoList from "./components/todoList.vue";

    interface Todo {
        name: string;
        status: 'done' | 'undone' | 'deleted';
    }

    @Component({
        components: {
            NewTodo, TodoList
        }
    })
    export default class App extends Vue {
        list: Array<Todo> = [
            {name: 'mission-1', status: 'done'},
            {name: 'mission-2', status: 'done'}
        ]

        addTodo(name: string) {
            const todo: Todo = {name, status: 'undone'}
            this.list.push(todo)
            console.log(name);
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
