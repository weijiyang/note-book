<template>
    <div id="app" class="clearfix">
      <!-- <div id="cover"></div> -->
      <Header></Header>
      <Note></Note>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from "./note/header.vue"
import Footer from "./note/footer.jsx"
import Note from "./note/note.vue"
export default {
  components : {
    Header,Footer,Note
  }
}
</script>
<style lang="stylus" scoped>
#app{
  position fixed 
  width 100%
  height 100%
  background url('./assets/images/bg1.jpg') top no-repeat
  background-size 100% 100%
}
#cover{
  position absolute
  top  0
  left 0
  background-color rgba(0,0,0,0.6)
  width 100%
  height 100%
}
</style>


