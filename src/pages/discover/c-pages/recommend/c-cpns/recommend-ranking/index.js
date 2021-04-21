import React, { memo,useEffect} from 'react'
import ThemeHeaderRcm from 'components/theme-header-rcm'
import TopRanking from 'components/top-ranking'
import { useDispatch,useSelector,shallowEqual} from 'react-redux'
import { getTopListAction } from '../../store/action'
import {RankingWrapper} from './style'
export default memo(function RecommendRanking() {

    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])
   const {upRanking,originRanking,newRanking} = useSelector(state => ({
       upRanking:state.getIn(["recommendReducer","upRanking"]),
       originRanking:state.getIn(["recommendReducer","originRanking"]),
       newRanking:state.getIn(["recommendReducer","newRanking"])
   }),shallowEqual)
    return (
        <RankingWrapper>
            <ThemeHeaderRcm title="榜单" />
            <div className="tops">
                <TopRanking info={upRanking} />
                <TopRanking info={originRanking} />
                <TopRanking info={newRanking} />
            </div>
        </RankingWrapper>
    )
})
