import React, { memo,useEffect,useRef,useState,useCallback   } from 'react'
import { getTopBannerAction } from '../../store/action'
import {useDispatch,useSelector,shallowEqual } from 'react-redux'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';
import { Carousel } from 'antd';
export default memo(function TopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const {topBanners} = useSelector(state => ({
      topBanners:state.getIn(["recommendReducer","topBanners"])
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getTopBannerAction())
  }, [dispatch])
  
  const bannerRef=useRef()

  const bannerChange=useCallback(
    (from,to) => {
      setCurrentIndex(to)
    },
    [],
  )

  const bgImage=topBanners[currentIndex]&&(topBanners[currentIndex].imageUrl)+"?imageView&blur=40x20"
  return (
    <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2" >
            <BannerLeft>
              <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                {
                  topBanners.map((item,index)=>{
                    return (
                      <div className="banner-item" key={item.imageUrl}>
                        <img src={item.imageUrl} alt={item.typeTitle} className="image"/>
                      </div>
                    )
                  })
                }
              </Carousel>,
            </BannerLeft>
            <BannerRight></BannerRight>
            <BannerControl>
              <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
              <button className="btn right" onClick={e => bannerRef.current.next()}></button>
            </BannerControl>
        </div>
    </BannerWrapper>
  )
})
