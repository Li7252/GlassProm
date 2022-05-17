const App = {
    data() {
        return {
            message: 'Калькулятор душевых кабин'
        }
    },
    methods: {
        event() {
            console.log(this.message)
        }
    }
}
Vue.createApp(App).mount('#app')