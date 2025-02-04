import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { BiSolidInbox } from 'react-icons/bi';
import { FaRegStar, FaRegTrashAlt } from 'react-icons/fa';
import { LuPencil, LuStickyNote } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, setIsComposeExpanded } from '../store/appSlice';

function Sidebar() {

  const dispatch = useDispatch();
  const isExpanded = useSelector(state => state.app.isExpanded);
  const activeTab = useSelector(state => state.app.activeTab);

  const menuItems = [
    { label: "Inbox", icon: <BiSolidInbox /> },
    { label: "Starred", icon: <FaRegStar />},
    { label: "Sent", icon: <AiOutlineSend />},
    { label: "Draft", icon: <LuStickyNote />},
    { label: "Trash", icon: <FaRegTrashAlt />},
  ];

  return (
    <div className={`flex flex-col h-full ${isExpanded ? "w-58" : "w-14"} duration-300 text-white mt-2`}>

      <div onClick={() => dispatch(setIsComposeExpanded(true))}  className={`flex items-center justify-center gap-3 bg-[#ffffff] ml-2 rounded-2xl w-fit cursor-pointer py-4.5 duration-300 ${isExpanded ? "px-6": "px-4.5"}`}>
        <LuPencil className="w-5 h-5 flex justify-center items-center text-[#5e5d62]" />
        {isExpanded && <span className="text-sm font-medium text-[#5e5d62]">Compose</span>}
      </div>

      <div className="flex flex-col mt-4">
        {/* Menu Items */}
        <nav>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => dispatch(setActiveTab(item.label))}
              className={`flex gap-4 items-center cursor-pointer ${
                activeTab === item.label ? "bg-[#595959]" : "hover:bg-[#404040]"
              } ${isExpanded ? "rounded-r-4xl ml-0 px-4 w-full" : "rounded-full ml-4 p-0 w-fit"}`}
            >
              <span className="w-8 h-8 flex items-center justify-center">{item.icon}</span>
              {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>

    </div>
  )
}

export default Sidebar