import { observable, computed } from 'mobx'

class Store {
  @observable hue = 0
  @observable saturation = 50
  @observable lightness = 50
  @observable alpha = 1

  @computed
  get color () {
    if (this.alpha < 1) {
      return `hsla(${store.hue}, ${store.saturation}%, ${store.lightness}%, ${store.alpha})`
    } else {
      return `hsl(${store.hue}, ${store.saturation}%, ${store.lightness}%)`
    }
  }
}
const store = new Store()

window.store = store

export default store
