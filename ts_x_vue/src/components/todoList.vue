<template>
  <div>
    <ol>
      <li v-for="(todoItem,index) in list" :key=index>
        {{todoItem.name}}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        props: {
            list: Array
        }
    })

    export default class TodoList extends Vue {
    }
</script>

<style lang="scss" scoped>

</style>
