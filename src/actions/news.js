import 'babel-polyfill'
import cheerio from 'cheerio'
import { NEWS_REFRESH } from './actions'
import { action, startingAction, finishedAction } from './action'
import { fetchText } from './fetch'
import { NewsItem } from '../models/NewsItem'

/**
 * For now we're just pulling in and processing an RSS feed from reddit here,
 * it's a placeholder until a more complicated service is put in place.
 */
export function * refresh (feedURL = refresh.url) {
  try {
    yield startingAction(NEWS_REFRESH)

    const rssText = yield fetchText(feedURL)
    const $rss = cheerio.load(rssText, { xmlMode: true, withDomLvl1: true })
    const $entries = $rss('entry')

    return yield finishedAction(NEWS_REFRESH, $entries.toArray().map(entry => {
      const $entry = cheerio(entry)
      const $content = cheerio.load($entry.find('content').text())
      const $thumbnail = $content('img')

      const url = $content('a')
        .filter((i, el) => cheerio(el).text() === '[link]')
        .attr('href')
      const description = $entry.find('title').text()
      const thumbnailSource = $thumbnail.attr('src')
      const thumbnailDescription = $thumbnail.attr('alt')

      return new NewsItem(
          url, description, thumbnailSource, thumbnailDescription)
    }))
  } catch (error) {
    return yield action(NEWS_REFRESH, error)
  }
}

refresh.url = 'https://www.reddit.com/r/spacex+space+nasa/.rss'
