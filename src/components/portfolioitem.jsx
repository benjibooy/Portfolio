import React from "react";


function PortfolioItem(props) {
    return (
        <a target="_blank" href={props.link}>
            <div className="border-2 border-stone-900 dark:border-white rounded-md">
                <img src={props.imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-48 object-cover cursor-pointer" />
                <div className="w-full p-4">
                    <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                        {props.title}
                    </h3>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:textsm">
                        {props.stack.map((item, index) => (
                            <span key={index} className="inline-block px-2
                        py-1 font-semibold border-2 dark:border-white border-stone-900 rounded-md">
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default PortfolioItem;