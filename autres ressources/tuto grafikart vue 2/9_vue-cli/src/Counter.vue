
<template>
	<div class="counter">
		{{ count }}
		<div class="counter__button" @click="increment">+</div>
	</div>
</template>


<script>
	import store from './store/NotificationStore'

	export default {
		data(){
			return {
				state: store.state
			}
		},
		computed:{
			count: function(){ return this.state.count }
		},
		methods:{
			increment(){
				store.increment()
			}
		}
	}
</script>

<style>
	.counter{
		font-weight: bold;
		width: 50px;
		height: 50px;
		text-align: center;
		background-color: #dfdfdf;
	}

	.counter__button{
		border: 1px solid #000;
		padding: 2px 10px;
	}
</style>