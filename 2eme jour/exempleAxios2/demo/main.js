// import './style.css'
// import axios from 'axios'


// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

(async () => {

  const axios = require('axios');

  let response = {}
  try{
    response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditt')
    console.log(response.data)
  } catch (error){
    console.log(error.response.data)
  }
  
  // let response = axios.get('https://pokeapi.co/api/v2/pokemon/ditt')
  //   .then(
  //     (response) => console.log(response.data)
  //   )
  //   .catch(
  //     (error) => console.log(error)
  //   )

  

})()
// document.querySelector('#app').innerHTML = `${response}`