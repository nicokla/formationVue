
class NotificationsStore{
	constructor(){
		this.state = {
			count: 0
		}
	}

	increment(){
		this.state.count++
	}

	decrement(){
		this.state.count--
	}
}

let notifications_store = new NotificationsStore()

let Counter = {
	data: function(){
		return{
			state: notifications_store.state
		}
	},
	computed:{
		count: function(){ return this.state.count }
	},
	methods:{
		increment: function(){
			notifications_store.increment()
		}
	},
	template: /*html*/`<button @click="increment"><div>{{ count }}</div></button>`
}

let Notifications = {
	components: { Counter },
	methods:{
		addNotification: function(){
			notifications_store.increment()
		}
	},
	template: /*html*/`<div>
		<counter></counter>
		<button @click="addNotification">incrementer</button>
	</div>`
}

new Vue({
	el:'#app',
	components: { Notifications, Counter }
})