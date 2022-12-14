// to control our html page we use vue object.On this vue object we can use createApp
//Vue.createApp creates a app we have stored in this app in varible 'const app' 
// the data () always returns an object 

const app = Vue.createApp({
    //data object , method
    data() {
        return {
            counter: 0,
            //objects string must be strictly in ''
            name: '',
        };
    },
    methods: {

        reset() {
            this.name = '';
        },

        submitForm() {
            alert('Submitted');
        },
        setName(event) {
            //event.target.value is an default event in vanilla js that targets the input 
            this.name = event.target.value;
        },

        add(num) {
            //we can write fun and give parameter and can directly call inside the v-on:click events directly
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        }
    }
});

app.mount('#Events')
