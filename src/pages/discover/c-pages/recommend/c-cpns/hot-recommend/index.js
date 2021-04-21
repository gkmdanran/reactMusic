import React, { memo,useEffect} from 'react';
import ThemeHeaderRcm from 'components/theme-header-rcm'
import SongsCover from 'components/songs-cover'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import {
  HotRecommendWrapper
} from './style';
import { getHotRecommendsAction } from '../../store/action';



export default memo(function HotRecommend() {

  const {hotRecommends} = useSelector(state => ({
    hotRecommends:state.getIn(["recommendReducer","hotRecommends"])
  }),shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendsAction())
  
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title="热门推荐" keywords={['华语','流行','民谣','摇滚','电子']}/>
      <div className="recommend-list ">
        {
          hotRecommends.map((item,index)=>{
            return (
              <SongsCover key={item.id} info={item}></SongsCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})