import request from "./request"
export const getTopBanners=()=>request({url:'/banner'})
export const getHotRecommends=()=>request({url:'/personalized?limit=8'})
export const getNewAlbum=()=>request({url:'top/album?limit=10'})
export const getTopList=(idx)=>{
    return request({
        url:"/top/list",
        params:{
            idx
        } 
    })
}