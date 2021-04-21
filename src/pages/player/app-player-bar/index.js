import React, { memo,useEffect,useRef,useState,useCallback } from 'react'
import {PlaybarWrapper,Control,PlayInfo,Operator} from './style'
import {Slider} from 'antd'
import { useDispatch,useSelector, shallowEqual } from 'react-redux'
import { getSongDetailAction } from '../store/action'
import {getSizeImage,formatMinuteSecond,getPlaySong} from ".././../../utils/data-format"
export default memo(function AppPlayerBar() {

    const [currentTime, setCurrentTime] = useState(0)
    const [isplaying, setisplaying] = useState(false)
    const dispatch=useDispatch()

    const {currentSong} = useSelector(state => ({
        currentSong:state.getIn(["playerReducer","currentSong"])
    }),shallowEqual)

    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])
    const audioRef = useRef()
    const picUrl=(currentSong.al&&currentSong.al.picUrl)||' '
    const Singer=(currentSong.ar&&currentSong.ar[0].name)||'未知歌手'
    const duration=currentSong.dt||0
    
    const [progress, setprogress] = useState(0)
    const [isChanging, setisChanging] = useState(false)
    const playMusic=useCallback(
        () => {
            isplaying?audioRef.current.pause():audioRef.current.play()
            setisplaying(!isplaying)
        },
        [isplaying],
    )
    useEffect(() => {
        audioRef.current.src=getPlaySong(currentSong.id)
    }, [currentSong])
 
    const timeUpdate=(e)=>{
        
        if(!isChanging){
            setCurrentTime(e.target.currentTime*1000)
            setprogress(currentTime/duration*100)
        }
            
    }
    const sliderChange=useCallback(
        (value) => {
            setisChanging(true)
            setCurrentTime(value/100*duration)
            setprogress(value)
        },
        [duration],
    )
    
    const sliderAfterChange=useCallback(
        (value) => {
            audioRef.current.currentTime=value/100*duration/1000
            setCurrentTime(value/100*duration)
            setisChanging(false)
            if(!isplaying){
                playMusic()
            }
        },
        [duration,isplaying,playMusic],
    )

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isplaying}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={e=>playMusic()}></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src={getSizeImage(picUrl,35)} alt=""/>
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="/#" className="singer-name">{Singer}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} 
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}/>
                            <div className="time">
                                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                                <span className="divider">/</span>
                                <span className="duration">{formatMinuteSecond(duration)}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
                <audio ref={audioRef} onTimeUpdate={e=>{timeUpdate(e)}}/>
            </div>
        </PlaybarWrapper>
    )
})
