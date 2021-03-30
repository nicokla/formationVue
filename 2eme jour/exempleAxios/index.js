
// import * as $ from 'jquery'
// import axios from 'axios'

// console.log(document.querySelector('#app'))
// $('#app').append('coucou')


// const axios = require('axios');
const axios = require('axios').default;

// import axios from './node_modules/axios/dist/axios'

let response = axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

console.log(response)