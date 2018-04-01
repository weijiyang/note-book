<template>
  <div :class="['note-item','clearfix',note.completed?'notecompleted':'']" >
    <input 
      type="checkbox"
      class="toggle"
      v-model="note.completed"
    >
    <label :class="note.completed?'completed':''">{{note.content}}</label>
    <button class="destroy" @click="deleteNote">X</button>
  </div>
</template>
<script>
export default {
  props : {
    note : {
      type : Object,
      required :true
    }
  },
  methods : {
    deleteNote(){
      this.$emit('del',this.note.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.note-item{
  height 4rem
  line-height 4rem
  font-size 2rem
  background-color #fff
  color #333
  border-radius 0.5rem
  margin-top 0.5rem
  .toggle{
    width 1.5rem
    height 1.5rem
    vertical-align middle
    margin-left 0.5rem
  }
  .completed{
    text-decoration line-through
  }
  .destroy{
    float right
    margin-top 1rem
    margin-right 0.5rem
    width 2rem
    height 2rem
    background-color #eaeaea
    border-radius 1rem
    vertical-align middle
  }
}
</style>


