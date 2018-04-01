<template>
  <div class="helper">
    <span class="left">
      2 items left
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
    <span class="clear" @click="clearAllCompleted">Clear completed</span>
  </div>
</template>
<script>
export default {
  props:{
    filter:{
      type : String,
      required : true
    }
  },
  data(){
    return{
      states:['all','active','completed']
    }
  },
  methods : {
    clearAllComplted(){},
    toggleFilter(){}
  }
}
</script>
<style lang="stylus" scoped>
.helper{
  widt 90%
  height 2rem
}
</style>


