import React, { memo } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {Input} from "antd"
import { SearchOutlined } from '@ant-design/icons';

import {headerLinks} from "@/common/local-data"
import {HeaderWraper,HeaderLeft,HeaderRight} from './style'

export default withRouter(memo(function AppHeader(props) {

    const showSelectItem=(item,index)=>{
        if(index<3)
            return (
            <NavLink to={item.link} >
                {item.title}
                <i className="sprite_01 icon"></i>
            </NavLink> 
            )
        else
            return (
                <a href={item.link}>{item.title}</a> 
            )
    }

    return (
        <HeaderWraper>
            <div className="content wrap-v1">
                <HeaderLeft>
                   <div className="logo sprite_01" onClick={e=>{props.history.push("/discover")}}></div>
                    <div className="select-list">
                        {
                            headerLinks.map((item,index)=>{
                                return (
                                    <div key={index} className="select-item">
                                        {showSelectItem(item,index)}
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft> 
                <HeaderRight>
                
                    <Input className="search" placeholder="音乐/视频/用户" prefix={<SearchOutlined />}></Input>
                    <div className="center">创作者中心</div>
                    <div className="login">登录</div >
                </HeaderRight> 
            </div>
            <div className="divider"></div>
           
        </HeaderWraper>
    )
}))
