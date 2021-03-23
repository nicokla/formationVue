// Vue.component('message',{
// 	// props: ['type', 'message'],
// 	props:{
// 		type: {type: String, default: 'success'},
// 		message: String
// 		// type: [String, Number]
// 	},
// 	template: `<div class="ui message" :class="type">{{ message }}</div>`
// })

let message = {
	props:{
		type: {type: String, default: 'success'},
		message: String,
		header: String
	},
	template: /*html*/`<div class="ui message" :class="type">
	<i class="close icon" @click.prevent="close"></i>
	<div class="header">{{ header }}</div>
	{{ message }}
	</div>`,
	methods:{
		close(){
			// console.log(this.$parent)
			// this.$parent.$data.alert = false
			this.$emit('close')
		}
	}
}

let counter = {
	data:function() {
		return {
			count: 0
		}
	},
	methods:{
		increment: function(){
			this.count++
		}
	},
	props:{
		start:{type: Number, default: 0}
	},
	template:/*html*/`<div>
		<span>{{ total }}</span><br>
		<button @click="increment">incrementer</button>
	</div>`,
	computed:{
		total: function(){
			return this.start + this.count
		}
	}
	// mounted:function(){
	// 	this.count=this.start
	// }
}

let formUser = {
	props:{
		value: Object
		// user
	},
	data(){
		return {
			user:{...this.value}
			// JSON.parse(JSON.stringify(this.user))
		}
	},
	methods:{
		save(){
			this.$emit('input', this.user)
		}
	},
	template: /*html*/`
	<form class="ui form" @submit.prevent="save">
		<p><slot name="header"></slot></p>
		<div class="field">
			<label for="">Prenom</label>
			<input type="text" v-model="user.firstname"/>
		</div>
		<div class="field">
			<label for="">Nom</label>
			<input type="text" v-model="user.lastname"/>
		</div>
		<button class="ui button" type="submit">Envoyer</button>
		<p><slot name="footer"></slot></p>
	</form>`
}

let vm = new Vue({
	el: '#app',
	components:{ message, counter, formUser },
	data: {
		message: 'un meilleur texte',
		alert: false,
		user: {
			firstname: 'Jean',
			lastname: 'Dupont'
		}
	},
	methods:{
		showAlert(){
			this.alert = true
		},
		hideAlert(){
			this.alert = false
		}
	}
})