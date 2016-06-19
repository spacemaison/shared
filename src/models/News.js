export class News {
  constructor (isRefreshing = false, items = []) {
    this.isRefreshing = isRefreshing
    this.items = items
  }
}
