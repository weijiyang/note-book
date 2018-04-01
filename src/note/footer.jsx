import '../assets/css/footer.styl'

export default{
  data(){
    return{
      auto : "WJY"
    }
  },
  render(){
    return(
      <div id="footer">
        <span>Write By {this.auto}</span>
      </div>
    )
  }
}