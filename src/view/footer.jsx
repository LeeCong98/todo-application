import '../assets/css/footer.styl'

export default {
  data() {
    return {
      author: 'CLong'
    }
  },
  render() {
    // 使用runder函数写入数
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}