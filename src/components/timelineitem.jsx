import React from "react";
import { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function TimelineItem({year, title, duration, details}) {
    
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseOver = () => {
        if(isBrowser){
            setIsHovering(true);
        }else{
            setIsHovering(true);
        }
    };
  
    const handleMouseOut = () => {
      if(isBrowser){
        setIsHovering(false);
      }else{
        setIsHovering(true);
      }
    };
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-100 ">
            <li className="mb-10 ml-4 "
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border
                 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md dark:bg-white dark:text-stone-900 cursor-pointer">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white cursor-pointer">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400 ">
                        {duration}
                    </div>
                </p>
                {isHovering && (
                    <div>
                        <p className="my-2 text-base font-normal text-stone-500 ">
                            {details}
                        </p>
                    </div>
                )}

            </li>
        </ol>
    )
}

export default TimelineItem;