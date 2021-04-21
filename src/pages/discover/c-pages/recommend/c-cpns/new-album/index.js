import React, { memo,useEffect,useRef } from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { getNewAlbumAction } from '../../store/action'
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';
import AlbumnCover from 'components/album-cover'
export default memo(function NewAlbum() {

    const {NewAlbums} = useSelector(state => ({
        NewAlbums:state.getIn(["recommendReducer","newAlbums"])
    }),shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewAlbumAction())
        
    }, [dispatch])

    const pageRef = useRef()

    return (
        <AlbumWrapper>
            <ThemeHeaderRcm title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e=>pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                           [0,1].map(item=>{
                           return <div key={item} className="page">
                               {
                                   NewAlbums.slice(item*5,(item+1)*5).map(iten=>{
                                   return <AlbumnCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
                                   })
                               }
                           </div>
                           })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e=>pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})  
