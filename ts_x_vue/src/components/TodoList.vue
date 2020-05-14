<template>
  <div>
    <ol>
      <li v-for="(todoItem,index) in list" :key=index>
        <input type="checkbox" :checked="todoItem.status === 'done'"
               @change="changeStatus(todoItem ,$event)">
        {{todoItem.name}}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Todo from '@/models/Todo';

    @Component({
        props: {
            list: Array
        }
    })

    export default class TodoList extends Vue {
        changeStatus(todoItem: Todo, e: Event) {
            const checked: boolean = (e.target as HTMLInputElement).checked
            this.$emit('updateTodo', todoItem, {status: checked ? 'done' : 'undone'})
        }
    }
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
  * {margin: 0;padding: 0;}
  ul, ol {list-style: none;}
</style>
