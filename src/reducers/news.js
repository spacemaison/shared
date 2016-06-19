import { NEWS_REFRESH } from '../actions/actions'
import { actionStates } from '../actions/action'
import { News } from '../models/News'

export function news (news = new News(), action) {
  switch (action.type) {
    case NEWS_REFRESH: return refresh(news, action)
    default: return news
  }
}

export function refresh (news = new News(), { payload, meta: { state } }) {
  switch (state) {
    case actionStates.error: return news
    case actionStates.starting: return new News(true, news.items)
    case actionStates.finished: return new News(false, payload)
  }
}
