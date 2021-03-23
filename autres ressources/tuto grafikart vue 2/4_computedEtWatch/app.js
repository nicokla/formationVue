
let vm = new Vue({
	el: '#app',
	data: {
		// success: false,
		// message: ''
		firstname:'jean',
		lastname:'dupont',
		fullname: ''
	},
	watch:{
		fullname: function(value){
			console.log('watch', value)
		}
	}
	// computed:{
		// cls: function(){
		// 	console.log('cls called')
		// 	return this.success === true ? 'success' :'error'
		// }
		// fullname: {
		// 	get: function(){
		// 		return this.firstname + ' ' + this.lastname
		// 	},
		// 	set: function(value){
		// 		let parts = value.split(' ')
		// 		this.firstname = parts[0]
		// 		this.lastname = parts[1]
		// 	}
		// }
	// }
})