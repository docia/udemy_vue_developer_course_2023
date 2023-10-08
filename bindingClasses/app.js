let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            selectedFontSize: 20,
            size: 150
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        },
        change_size() {
            return  { width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px' }
        },
        transform() {
            return  { transform: 'rotate(30deg)'}
        }
    }
}).mount('#app')