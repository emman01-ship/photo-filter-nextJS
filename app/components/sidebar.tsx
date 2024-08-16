"use client"
import React from 'react';

/* type of data that is accepted to sidebar, 
the filter name, icon and slider that allows for 
changing of filter amount
*/
type SidebarData = ({
    filterOption: string;
    icon: React.JSX.Element;
    slider: React.JSX.Element;
})[]

const Sidebar = (  
    {sideData}: SidebarData
) => {

  return (
    <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
    <ul className="space-y-2 font-medium">
        {sideData.map((val, key) => {

        /* map sidebar data to html*/
        return (
            <li className="dark:hover:bg-gray-700" key={key}>
                <div className="flex items-center p-2 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white">{val.icon}</div>
                <span className="ms-3">{val.filterOption}</span>
                <span className=''>{val.slider}</span>
            </li>
        )

        })}
    </ul>
    </div>
    
  )

}

export default Sidebar
