<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus = "autofocus"
      placeholder="接下来要做什么"
      @keyup.enter = "addTodo"
      >
      <Item :note="note"></Item>
      <Tabs :filter="filter"></Tabs>
  </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
export default {
  data(){
    return{
      note:{
        id : 0,
        content : 'this is a temp',
        completed : false
      },
      filter : 'all'
    }
  },
  components:{
    Item,Tabs
  },
  methods : {
    addTodo(){

    }
  }
}
</script>
<style lang="stylus" scoped>
.real-app{
  width 98%
  margin 0 auto 
}
.add-input{
  position relative 
  width 100%
  height 4rem
  font-size 2rem
  padding-left : 1rem
  background-color #fff


}
</style>

