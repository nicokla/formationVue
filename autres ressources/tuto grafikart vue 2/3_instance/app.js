
let vm = new Vue({
	el: '#app',
	data: {
		seconds: 0
	},
	mounted: function(){
		this.$interval = setInterval(()=>{
			this.seconds++
		},1000)
	},
	destroyed: function(){
		clearInterval(this.$interval)
	}
})
/*
let vm = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		link: 'www.google.com',
		persons: ['nicolas', 'toto'],
		cls: 'success'
	},
	methods:{
		addPerson: function(){
			this.persons.push('titi')
		}
	}
})
*/
  