<template>
	<div class="helper">
		<span class="left">
			{{  countUnfinishedLength  }}个事项
		</span>
	    <span class="tabs">
		    <span
		    	:key="index"
				v-for="(item, index) in status"
				@click="toggleFilter(index)"
				:class ="{actived: filter == index}"
		    >
		    	{{ item }}
	    	</span>
    	</span>
    	<span class="clear" @click="clearAllComplete">clear complete item</span>
	</div>
</template>
<script>
	export default {
		props: {
			filter: {
				require: true,
				type: Number
			},
			todo: {
				require: true,
				type: Array
			},
			clearFunc: {
				require: true,
				type: Function
			}
		},
		data () {
			return {
				status: ['all', 'active', 'completed'],
			}
		},
		computed: {
			countUnfinishedLength () {
				return this.todo.filter(item => item.completed).length
			}
		},
		methods: {
			// 过滤已经完成的
			clearAllComplete () {
				this.$emit('clearFunc')
			},
			toggleFilter (index) {
				// 过滤改变的数据
				this.$emit('filterItems', index)
			}
		},
		created () {
			this.currentTodo = this.todo
		}
	}; 
</script>
<style lang="stylus">
.helper{
	font-weight 100
	display flex
	justify-content space-between
	padding 5px 0
	line-height 30px
	background-color #fff
	font-size 14px
	font-smoothing: antialiased
}
.left, .clear, .tabs{
padding 0 10px
box-sizing border-box
}
.left, .clear{
width 150px
}
.left{
text-align left
}
.clear{
text-align right
cursor pointer
}
.tabs{
	width 200px
	display flex
	justify-content space-around
	* {
		display inline-block
		padding 0 10px
		cursor pointer
		border 1px solid rgba(175,47,47,0)
		&.actived{
		border-color rgba(175,47,47,0.4)
		border-radius 5px
		}
	}
}
</style>