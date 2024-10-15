import React, { FC } from "react";
interface DrivenCardProps {
    header: string;
    content: string;
    typeName: string;
    typeColor: string;
    cardColor: string;
    imgUrl?: string;
}

const DrivenCard: FC<DrivenCardProps> = ({
    header,
    content,
    typeName,
    typeColor,
    cardColor,
    imgUrl,
}: DrivenCardProps) => {
    return (
        <div style={{ backgroundColor: cardColor }} className={`sm:min-h-[350px] card flex flex-col shadow-md gap-1 sm:gap-3 rounded-xl relative`}>
            <div className="mx-4 sm:mx-5 mt-4 sm:mt-5">
                <img src={imgUrl?.toString()} className="w-full" />
            </div>
            <span style={{ color: typeColor }} className={`text-sm mt-2 ml-5 max-w-24`}>{typeName}</span>

            <div className="leading-4 sm:leading-8 text-base sm:text-3xl font-bold  sm:mx-5 flex mx-4">
                {header}
                <img src="/assets/images/stayUpdated/link.svg" className="w-6 sm:w-8 h-6 sm:h-8 absolute right-0 mx-5" />
            </div>
            <div className="leading-6 text-sm sm:text-lg mx-4 sm:mx-5 text-text-color pb-4 mb-6" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
}

export default DrivenCard;