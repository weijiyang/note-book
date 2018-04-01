<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus = "autofocus"
      placeholder="接下来要做什么"
      @keyup.enter = "addTodo"
      >
      <Item 
      :note="note"
      v-for="note in notes"
      :key = "note.id"
      @del = "deleteNote"
      />
      <Tabs 
      :filter="filter"
      :notes="notes"
     />
  </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  data(){
    return{
      filter : 'all',
      notes : []
    }
  },
  components:{
    Item,Tabs
  },
  methods : {
    addTodo(e){
      this.notes.unshift({
        id : id++ ,
        content : e.target.value.trim(),
        completed : false
      })
      e.target.value = ''
    },
    deleteNote(id){
      this.notes.splice(this.notes.findIndex(note=>note.id ==id),1)
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

