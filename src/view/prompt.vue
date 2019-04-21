<template>
	<div >
		<section class="real-app">
			<input type="text" 
				autofocus="autofocus"
				class="add-input" 
				placeholder="接下来需要做些什么？" 
				@keyup.enter="addTodo"
			>
			<items :todoFilter="todoFilter" @del="del"></items>
			<tabs :filter="filter" @clearFunc="clearAllComplete" :todo="todo" @filterItems="switchOver"></tabs>
		</section>
	</div>
</template>
<script>
	import items from './tabs/item.vue'
	import tabs from './tabs/tabs.vue'
	export default {
		data () {
			return {
				todo: [
					{
						id: 0,
						content: 'this is to do',
						completed: false
					},
					{
						id: 1,
						content: '填写一个问卷调查',
						completed: true
					}
				],
				todoFilter: [],
				filter: 0
			}
		},
		methods: {
			// 增加一个事项
			addTodo (event) {
				var id = this.todo.length
				if (!event.srcElement.value.trim()) return window.confrim('请输入正确的事项!')
				this.todo.unshift({
					id: id,
					content: event.srcElement.value,
					completed: true
				})
				event.srcElement.value = ''
				event.srcElement.autofocus = false
			},
			clearAllComplete () {
				this.todo = this.todo.filter(item => {
					if (item.completed) return item  
				})
			},
			del (id) {
				var offset = this.todo.findIndex(item => {
					if (item.id === parseInt(id)) return true
				})
				this.todo.splice(offset, 1)
			},
			switchOver (state) {
				this.filter = state
				state = parseInt(state)
				if (state === 0) {
					this.todoFilter = this.todo
				} else if (state === 1) {
					this.todoFilter = this.todo.filter(item => {
						if (item.completed) return item
					}) 
				} else {
					this.todoFilter = this.todo.filter(item => {
						if (!item.completed) return item
					}) 
				}
			}
		},
		watch: {
			'todo' () {
				this.todoFilter = this.todo
			}
		},
		components: {
			items,
			tabs
		},
		created () {
			this.todoFilter = this.todo
		}
	};
</script>
<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
