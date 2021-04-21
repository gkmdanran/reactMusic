import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUMN,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING,
    CHANGE_UP_RANKING,
}from './constats'
import {Map} from 'immutable'
const defaultState=Map({
    topBanners:[],
    hotRecommends:[],
    newAlbums:[],
    upRanking:{},
    originRanking:{},
    newRanking:{},
})
function reducer(state=defaultState,action){
    switch(action.type){
        case CHANGE_TOP_BANNERS:
            return state.set("topBanners",action.topBanners)
        case CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends",action.hotRecommends)
        case CHANGE_NEW_ALBUMN:
            return state.set("newAlbums",action.newAlbumns)
        case CHANGE_NEW_RANKING:
            return state.set("newRanking",action.newRanking)
        case CHANGE_ORIGIN_RANKING:
            return state.set("originRanking",action.originRanking)
        case CHANGE_UP_RANKING:
            return state.set("upRanking",action.upRanking)
        default:
            return state
    }
}
export default reducer