const state = {
 sideBar: {
  opened: false
 }
}

const mutations = {
 TOGGLE_SIDEBAR: (state: any) : void => {
  state.sideBar.opened = !state.sideBar.opened
 }
}

const actions = {
 // @ts-ignore
 toggleSideBar({ commit }) {
  commit('TOGGLE_SIDEBAR')
 }
}

export default { state, mutations, actions }