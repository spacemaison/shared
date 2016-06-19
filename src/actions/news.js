import 'babel-polyfill'
import cheerio from 'cheerio'
import { NEWS_REFRESH } from './actions'
import { actions, fetch, timeouts } from './index'
import { NewsItem } from '../models/NewsItem'

/**
 * For now we're just pulling in and processing an RSS feed from reddit here,
 * it's a placeholder until a more complicated service is put in place.
 */
export function * refresh (feedURL = refresh.url) {
  try {
    yield actions.starting(NEWS_REFRESH)

    const rssText = yield fetch.text(feedURL)
    const $rss = cheerio.load(rssText, { xmlMode: true, withDomLvl1: true })
    const $entries = $rss('entry')

    yield timeouts.timeout(10)

    return yield actions.finished(NEWS_REFRESH, $entries.toArray().map(entry => {
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
    return yield actions.action(NEWS_REFRESH, error)
  }
}

refresh.url = 'https://www.reddit.com/r/spacex+space+nasa/.rss'
