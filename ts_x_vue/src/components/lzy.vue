<template>
  <div>
    i am lzy
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';

    @Component({
        components: {HelloWorld}
    })
    export default class Lzy extends Vue {}
</script>
