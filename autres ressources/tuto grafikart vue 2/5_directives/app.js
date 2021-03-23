// Vue.directive('salut',{
// 	bind: function(el, binding, vnode){
// 		// console.log(el, binding)
// 		el.value = binding.value
// 		console.log('bind')
// 	},
// 	update: function(el, binding, vnode, oldvnode){
// 		console.log('update')
// 	}
// })

// Vue.directive('salut',function(el, binding){
// 	// console.log(el, binding)
// 	el.value = binding.value
// 	console.log('bind')
// })

let salut = function(el, binding){
	// console.log(el, binding)
	el.value = binding.value
	console.log('bind')
}

let vm = new Vue({
	el: '#app',
	directives:{
		salut
		//salut: salut
	},
	data: {
		message: ''
	},
	methods: {
		demo: function(){
			// e.preventDefault()
			console.log('salut')
		}
	}
})