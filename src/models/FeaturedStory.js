import { Model, fields } from './Model'

export class FeaturedStory extends Model {
  get [fields] () {
    return Object.assign(super[fields], {
      url: '',
      description: '',
      title: '',
      featuredImageSource: ''
    })
  }
}
