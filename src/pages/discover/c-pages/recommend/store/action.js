import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUMN,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING,
    CHANGE_UP_RANKING,
}from './constats'
import {getTopBanners,getHotRecommends,getNewAlbum,getTopList} from '@/services/recommend'

export const changeTopBannerAction=res=>({
    type:CHANGE_TOP_BANNERS,
    topBanners:res.banners
})


const changeNewRanking=res=>({
    type:CHANGE_NEW_RANKING,
    newRanking:res.playlist
})

const changeOriginRanking=res=>({
    type:CHANGE_ORIGIN_RANKING,
    originRanking:res.playlist
})

const changeUpRanking=res=>({
    type:CHANGE_UP_RANKING,
    upRanking:res.playlist
})


export const changeHotRecommends=res=>({
    type:CHANGE_HOT_RECOMMEND,
    hotRecommends:res.result
})

export const changeNewAlbumns=res=>({
    type:CHANGE_NEW_ALBUMN,
    newAlbumns:res.albums
})

export const getTopBannerAction=()=>{
    return dispatch=>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res))
            
        })
    }
}   
export const getHotRecommendsAction=()=>{
    return dispatch=>{
        getHotRecommends().then(res=>{
            console.log(res)
            dispatch(changeHotRecommends(res))
            
        })
    }
}  

export const getNewAlbumAction=()=>{
    return dispatch=>{
        getNewAlbum().then(res=>{
            console.log(res)
            dispatch(changeNewAlbumns(res))
        })
    }
}
export const getTopListAction=(idx)=>{
    return dispatch=>{
        getTopList(idx).then(res=>{
            console.log(res)
            
            switch(idx){
                case 0:
                    dispatch(changeUpRanking(res))
                    break;
                case 2:
                    dispatch(changeNewRanking(res))
                    break;
                case 3:
                    dispatch(changeOriginRanking(res))
                    break;
                default:
                    
            }
        
        })
    }
}