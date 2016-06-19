import { NEWS_REFRESH } from '../actions/actions'
import { states } from '../actions/action'
import { News } from '../models/News'

export function news (news = new News(), action) {
  switch (action.type) {
    case NEWS_REFRESH: return refresh(news, action)
    default: return news
  }
}

export function refresh (news = new News(), { payload, meta: { state } }) {
  switch (state) {
    case states.error: return news
    case states.starting: return new News(true, news.items)
    case states.finished: return new News(false, payload)
  }
}
