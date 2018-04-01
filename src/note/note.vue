<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus = "autofocus"
      placeholder="接下来要做什么"
      @keyup.enter = "addTodo"
      >
      <item 
      :note="note"
      v-for="note in filteredNotes"
      :key = "note.id"
      @del = "deleteNote"
      />
      <tabs  
      :filter="filter" 
      :notes="notes"
      @toggle = "toggleFilter"
      @clearAll = "clearAllCompleted"
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
  computed:{
    filteredNotes(){
      if(this.filter == "all"){
        return this.notes
      }
      const completed = this.filter ==="completed"
      return this.notes.filter(todo=>completed === todo.completed)
    }
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
    },
    toggleFilter(state){
      this.filter = state
    },
    clearAllCompleted(){
      this.notes = this.notes.filter(note =>!note.completed)
    }
  }
}
</script>
<style lang="stylus" scoped>
.real-app{
  width 90%
  margin 0 auto 
}
.add-input{
  position relative 
  width 100%
  height 4rem
  font-size 2rem
  padding 0 1rem
  background-color #fff
  box-sizing border-box
}
</style>

