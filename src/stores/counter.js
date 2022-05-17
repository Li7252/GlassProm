import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    result: []
  }),
  getters: {
    /*doubleCount: (state) => state.counter * 2*/
  },
  actions: {
    increment() {
      /*this.counter++*/
    }
  }
})
