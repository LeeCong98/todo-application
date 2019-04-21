<template>
	<ul class="items">
		<li  v-for="item in todoFilter"  :class="['todo-item', item.completed ? '' : 'completed']" :key="item.id">
			<input type="checkbox"  :id="item.id"  v-model="item.completed" class="toggle" >
			<label :for="item.id" class="label-item">
				{{ item.content }}
			</label>	
			<button class="destory" @click="deleteTodo(item.id)"></button>
		</li>
	</ul>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		props: {
			// 可以在props中声明这个传值的值的类，是否需要
			todoFilter: {
				type: Array,
				required: true 
			}
		},
		methods: {
			deleteTodo (id) {
				this.$emit('del', id)
			}
		},
		created () {
			console.log(this.todoFilter)
		}
	};
</script>
<style lang="stylus" scoped>
.todo-item{
  position relative
  background-color #fff
  font-size 24px
  border-bottom 1px solid rgba(0,0,0,0.06)
  &:hover{
    .destory:after{
      content: '×'
    }
  }
  label{
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 38px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  &.completed{
    label{
      color: #d9d9d9;
      text-decoration line-through
    }
  }
}
.toggle{
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline none
  &:after{
    content url('../../assets/images/round.svg')
  }
  &:checked:after{
    content url('../../assets/images/done.svg')
  }
}
.destory{
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color transparent
  appearance none
  border-width 0
  cursor pointer
  outline none
}
.items {
	list-style none
	margin 0
	padding 0
}
.items li {
	margin 0
	padding 0
}
</style>


