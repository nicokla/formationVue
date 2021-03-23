

let vm = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		link: 'www.google.com',
		success: true,
		persons: ['nicolas', 'toto'],
		// style:{background: '#000'}
		cls: 'success'
	},
	methods:{
		close: function(){
			this.success = false
			this.message = 'fermé'
		},
		style: function(){
			if (this.success) {
				return {background: '#00FF00'}
			} else {
				return {background: '#FF0000'}
			}
		}
	}
})
  