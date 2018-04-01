<template>
  <div class="helper clearfix">
    <span class="left">
     {{unFinishedNoteLength}} items left
    </span>
    <span class="tabs">
      <span 
        v-for="state in states"
        :key="state"
        :class="['state',filter === state?'actived':'']"
        @click="toggleFilter(state)"
        >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted()">Clear completed</span>
  </div>
</template>
<script>
export default {
  props:{
    filter:{
      type : String,
      required : true
    },
    notes:{
      type : Array,
      required : true
    }
  },
  data(){
    return{
      states:['all','active','completed']   
    }
  },
  computed:{
    unFinishedNoteLength(){
      return this.notes.filter(node => !node.completed).length
    }
  },
  methods : {
    clearAllCompleted(){
      this.$emit("clearAll")
    },
    toggleFilter(state){
      this.$emit("toggle",state)
    }
  }
}
</script>
<style lang="stylus" scoped>
.helper{
  white-space nowrap
  margin-top 10px
  width 90%
  height 2rem
  font-size 1rem
  color #333
  .left{
   float left
   width 33%
   text-align center
  }
  .tabs{
    float left
    width 33%
    text-align center
    .state{
    padding 0 0.1rem
    }
    .actived{
      color red
      border 2px solid #fff
      border-radius 10px
    }
  }
  .clear{
    float right
    width 33%
    text-align center
  }
}
</style>


