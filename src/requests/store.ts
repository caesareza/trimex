import { action, createStore, persist } from 'easy-peasy'

const menuModel = {
  mainMenu: [],
  addMenu: action((state: any, payload) => {
    state.mainMenu = payload
  }),
}

export const store = createStore({
  menu: persist(menuModel, {
    storage: 'localStorage',
  }),
})
