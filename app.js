const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Stim',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed property is updated!')
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    watch: {
        age(oldValue, newValue) {
            setTimeout(() => {
                this.age = 20
            }, 3000)
        }
    }
}).mount('#app') 

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Sarah',
//             lastName: 'Drill'
//         }
//     }
// }).mount('#app2') 