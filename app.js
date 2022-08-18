// to control our html page we use vue object.On this vue object we can use createApp
//Vue.createApp creates a app we have stored in this app in varivle 'const app' 
// the data () always returns an object 

const app = Vue.createApp({
    //data object , method
    data() {
        return {
            courseGoalA: 'lets start and finish the course',
            //courseGoalB: '<h2>lets master vue and start projects</h2>',
            courseGoalB: 'lets master vue and start projects',
            vueLink: 'https://vuejs.org/guide/introduction.html',
        };
    },
    // methods allows u to define functions
    // methods must be strictly name as 'methods: for eg as 'data()'
    //but inside methods we can give any function name 
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                //we can use 'this' keyword in js to refer the content in other methods or objects
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    }
});


// Which part of html code must be control by calling "mount function " on this app.
//to connect html app we use app.mount() and we can use it as css which is passed by using id
//mount fun should hold the css element in our DOM in our html code by using "is" ids are the greate unique selector becvause they are ubique all time 
app.mount('#user-goal')
