// to control our html page we use vue object.On this vue object we can use createApp
//Vue.createApp creates a app we have stored in this app in varivle 'const app' 
// the data () always returns an object 

const app = Vue.createApp({
    //data object , method
    data() {
        return {
            counter: 0,
        };
    },

});

app.mount('#Events')
