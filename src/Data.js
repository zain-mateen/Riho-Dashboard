import { LiaHomeSolid } from "react-icons/lia";
import { MdPushPin, MdOutlineWidgets } from "react-icons/md";
import { LuLayout, LuUsers, LuPhoneCall } from "react-icons/lu";
import { HiOutlineStopCircle } from "react-icons/hi2";
import { FaRegFolderOpen, FaRegEnvelope, FaRegHeart } from "react-icons/fa";
import { PiWechatLogo, PiPencilSimpleLineBold } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { TbSocial } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


export const sidebarMenu = [
    {
        id: 1,
        title: 'General',
        listItems: [
            {
                id: 1,
                title: 'Dashboards',
                icon: <LiaHomeSolid size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 2,
                title: 'Widgets',
                icon: <MdOutlineWidgets size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 3,
                title: 'Page Layout',
                icon: <LuLayout size={20} />,
                pinIcon: <MdPushPin size={12} />,
            }
        ],
    },
    {
        id: 2,
        title: 'Applications',
        listItems: [
            {
                id: 1,
                title: 'Project',
                icon: <HiOutlineStopCircle size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 2,
                title: 'File Manager',
                icon: <FaRegFolderOpen size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 3,
                title: 'Kanban Board',
                icon: <LuLayout size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 4,
                title: 'Ecommerce',
                icon: <LuLayout size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 5,
                title: 'Letter Box',
                icon: <FaRegEnvelope size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 6,
                title: 'Chat',
                icon: <PiWechatLogo size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 7,
                title: 'Users',
                icon: <LuUsers size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 8,
                title: 'Bookmarks',
                icon: <FaRegHeart size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 9,
                title: 'Contacts',
                icon: <LuPhoneCall size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 10,
                title: 'Tasks',
                icon: <BiTask size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 11,
                title: 'Calender',
                icon: <SlCalender size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 12,
                title: 'Social App',
                icon: <TbSocial size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 13,
                title: 'To-Do',
                icon: <PiPencilSimpleLineBold size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
            {
                id: 14,
                title: 'Search Result',
                icon: <CiSearch size={20} />,
                pinIcon: <MdPushPin size={12} />,
            },
        ],
    },
]