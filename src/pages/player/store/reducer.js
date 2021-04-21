import {Map} from 'immutable'
import {CHAGE_CURRENT_SONG,CHANGE_CURRENT_SONG_INDEX,CHANGE_PLAY_LIST} from './constant'
const defaultState=Map({
    currentSong:{},
    playList:[],
    currentSongIndex:0
})
export default function reducer(state=defaultState,action){
    switch(action.type){
        case CHAGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong)
        case CHANGE_PLAY_LIST:
            return state.set("playList",action.playList)
        case CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.currentSongIndex)
        default:
            return state;
    }
}
