import { Model, fields } from './Model'
import { Image } from './Image'

const STOCK_PHOTO_SIZES = [
  320, 480, 640, 720, 768, 800, 960, 1024, 1080, 1280, 1440, 1920
]
const getStockPhotoURLWithWidth = size => (
  `https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_${size}.png`
)

export class LaunchRocket extends Model {
  constructor ({ image } = {}) {
    super(...arguments)

    this.image = new Image(image || {
      urls: STOCK_PHOTO_SIZES.map(getStockPhotoURLWithWidth),
      sizes: STOCK_PHOTO_SIZES.map(width => [ width, width / (16 / 10) ]),
      descriptions: [ 'Stock rocket photo' ]
    })
  }

  get [fields] () {
    return Object.assign(super[fields], {
      configuration: String,
      id: Number,
      name: String,
      defaultPads: Array,
      family: Object,
      wikiURL: String,
      infoURLs: Array,
      image: Image
    })
  }
}
