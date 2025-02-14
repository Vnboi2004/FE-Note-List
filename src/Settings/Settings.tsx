import React from 'react'
import { GoSun, GoMoon } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";
import { DataColors } from '../Data/Todos';
import { CiMusicNote1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";


interface SetingsProps {
    theme: string;
    toggleTheme: () => void;
    isOpenColor: boolean;
    toggleOpenColor: () => void;
    setSelectedColor: (color: string) => void;

};

const Settings = ({theme, toggleTheme, isOpenColor, toggleOpenColor, setSelectedColor}: SetingsProps) => {
  return (
    <div className='bg-slate-100 max-w-[190px] mx-auto  p-2 rounded-md'>
        <ul className='flex items-center justify-center gap-6'>
                <li className='hover:scale-125 duration-300 ease-linear transform origin-center p-1 hover:bg-gray-200 rounded-md'>
                    <a href=""
                        onClick={toggleTheme}
                        className=''>
                        {theme === "dark" ? <GoSun/> : <GoMoon/>}
                    </a>
                </li>
            <li className='hover:scale-125 duration-300 ease-linear transform origin-center p-1 hover:bg-gray-200 rounded-md'>
                <a href="" className='relative' onClick={toggleOpenColor}>
                    <IoColorPaletteOutline/>
                    {isOpenColor && <div className='absolute top-1/2 translate-y-1/2'>
                        <div className='grid grid-cols-5 gap-x-2 gap-y-2 bg-slate-100 min-w-[140px] p-2 rounded-md border border-gray-300 shadow-2xl'>
                            {DataColors.map((color) => (
                                <div key={color.id} className={`bg-${color.name} w-5 h-5 rounded-full`} onClick={() => setSelectedColor(color.name)}></div>
                            ))}
                        </div>
                    </div>}
                </a>
            </li>
            <li className='hover:scale-125 duration-300 ease-linear transform origin-center p-1 hover:bg-gray-200 rounded-md'>
                <a href="">
                    <CiMusicNote1/>
                </a>
            </li>
            <li className='hover:scale-125 duration-300 ease-linear transform origin-center p-1 hover:bg-gray-200 rounded-md'>
                <a href="">
                    <IoSettingsOutline/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Settings
