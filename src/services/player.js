import request from './request'
export const getSongDetail=(ids)=>request({
    url:"/song/detail",
    params:{
        ids,
    }
})