export class StoryContainer {
  constructor (isRefreshing = false, items = []) {
    this.isRefreshing = isRefreshing
    this.items = items
  }

  [Symbol.iterator] () {
    const { items } = this

    return (
      items && items[Symbol.iterator] && items[Symbol.iterator]() ||
      Array.prototype[Symbol.iterator]()
    )
  }
}
