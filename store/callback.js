export const state = () => ({
  show: false
})

export const mutations = {

  showPopup(state){
    state.show = true;
  },
  hiddenPopup(state){
    state.show = false;
  }

}
