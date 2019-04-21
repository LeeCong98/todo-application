<template>
    <div id="root">
        <div id="cover">

        </div>
        <Header></Header>
        <Prompt></Prompt>
        <Footer></Footer>
    </div>
</template>
<script>
    import './assets/css/global.styl'
    // 引入组件
    import Header from './view/header.vue'
    import Prompt from './view/prompt.vue'
    import Footer from './view/footer.jsx'
    export default {
        data() {
            return {
                
            }
        },
        methods: {

        },
        components: {
            Header,
            Prompt,
            Footer
        }
    };
</script>
<style lang="stylus">
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>