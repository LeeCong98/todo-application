<template>
	<div class="main-header">
		<h1>{{ liCong }}</h1>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				liCong: 'write by CLong'
			}
		}
	};
</script>
<style lang="stylus" scoped>
.main-header{
  text-align center
  h1{
    font-size 100px
    color: rgba(175, 47, 47, 0.4)
    font-weight 100
    margin 20px
  }
}
</style>