export class StoryContainer {
  constructor (isRefreshing = false, items = []) {
    this.isRefreshing = isRefreshing
    this.items = items
  }

  [Symbol.iterator] () {
    return this.items[Symbol.iterator].bind(this.items)
  }
}
