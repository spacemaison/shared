import { Model, fields } from './Model'

export class Image extends Model {
  constructor ({ url, size, description } = {}) {
    if (url) {
      super({
        urls: [ url ],
        sizes: [ size ].filter(s => s),
        descriptions: [ description ].filter(d => d)
      })
    } else {
      super(...arguments)
    }
  }

  get [fields] () {
    return Object.assign(super[fields], {
      descriptions: Array,
      urls: Array,
      sizes: Array
    })
  }

  getReactNativeSource () {
    const urls = Array.isArray(this.urls) ? this.urls : []

    return urls.map((uri, index) => {
      const size = this.sizes[index]
      const description = this.descriptions[index] || ''

      if (size) {
        return { uri, width: size[0], height: size[1], description }
      } else {
        return { uri, description }
      }
    })
  }
}
