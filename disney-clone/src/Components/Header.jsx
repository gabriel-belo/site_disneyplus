import React from 'react'
import Logo from './../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv} from "react-icons/hi2";
import {HiPlus, HiDotsVertical} from "react-icons/hi"

function Header(){
    const menu=[
        {
            name: "HOME",
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon: HiPlus
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:"SERIES",
            icon:HiTv
        }
    ]
    return(
        <div>
            <img src={Logo} className='w-[80px] md:w-[115px] object-cover' alt="Logo disney" />
        </div>
    )
}

export default Header