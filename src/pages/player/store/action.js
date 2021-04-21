import {getSongDetail} from '@/services/player'
import {CHAGE_CURRENT_SONG,CHANGE_CURRENT_SONG_INDEX,CHANGE_PLAY_LIST} from './constant'
export const changeCurrentSongAction=(currentSong)=>({
    type:CHAGE_CURRENT_SONG,
    currentSong
})

export const changePlayListAction=(playList)=>({
    type:CHANGE_PLAY_LIST,
    playList
})
export const changeCurrentSongIndexAction=(currentSongIndex)=>({
    type:CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
})

export const getSongDetailAction=(ids)=>{
    return (dispatch,getState) =>{
        // console.log(getState())
        const playList=getState().getIn(["playerReducer","playList"])
        // console.log("playlist",playList)
        const songIndex=playList.findIndex(song=>song.id===ids)
        
        if(songIndex!==-1){
            dispatch(changeCurrentSongIndexAction(songIndex))
            dispatch(changeCurrentSongAction(playList[songIndex]))
        }else{
            getSongDetail(ids).then(res=>{
                console.log(res)
                const song=res.songs&&res.songs[0]
                if(!song)return
                const newPlaylist=[...playList]
                console.log(newPlaylist)
                newPlaylist.push(song)
                dispatch(changePlayListAction(newPlaylist))
                dispatch(changeCurrentSongIndexAction(newPlaylist.length-1))
                dispatch(changeCurrentSongAction(song))
                
            })
        }
    }
}