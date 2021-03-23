
// Vue.filter('capitalize', function(value, prefix, suffix){
// 	return prefix + value.toUpperCase() + suffix
// })

// Vue.filter('reverse', function(value){
// 	return value.split('').reverse().join('')
// })

let capitalize = function(value, prefix, suffix){
	return prefix + value.toUpperCase() + suffix
}
let vm = new Vue({
	el: '#app',
	filters:{
		capitalize
	},
	data: {
		message: 'hello'
	}
})