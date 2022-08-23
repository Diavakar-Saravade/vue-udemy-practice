
const app = Vue.createApp({

    data() {
        return {
            enterGoal: '',
            goals: [],
        };
    },

    methods: {
        addGoal() {
            this.goals.push(this.enterGoal);

        },
        remove(idx) {
            this.goals.splice(idx, 1);

        },

    }
});


app.mount('#user-goal')
