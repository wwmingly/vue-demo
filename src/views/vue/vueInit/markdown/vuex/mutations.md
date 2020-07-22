export default {
  isCollapse(state, data) {
    state.isCollapse = data
  },
  routerTabs(state, data) {
    state.routerTabs = data
  },
  changeLoading(state, data) {
    state.loadingCount = data
  }
}