import { Model, fields } from './Model'

export class Image extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      urls: Array,
      sizes: Array
    })
  }

  getReactNativeSource () {
    return this.urls.map((uri, index) => {
      const size = this.sizes[index]

      if (size) {
        return { uri, width: size[0], height: size[1] }
      } else {
        return { uri }
      }
    })
  }
}
