import React, { FC } from "react";
import DefaultButton from "../buttons/DefaultButton";
interface DrivenCardProps {
    header: string;
    content: string;
    buttonName: string;
    buttonColor: string;
    cardColor: string;
    imgUrl?: string;
    linkUrl?: string;
}

const DrivenCard: FC<DrivenCardProps> = ({
    header,
    content,
    buttonName,
    buttonColor,
    cardColor,
    imgUrl,
    linkUrl,
}: DrivenCardProps) => {
    return (
        <div style={{ backgroundColor: cardColor, backgroundImage: imgUrl, backgroundPositionX: "85%" }} className={`sm:min-h-[350px] bg-no-repeat bg-contain card flex flex-col shadow-md gap-1 sm:gap-3 rounded-xl relative`}>
            <DefaultButton buttonColor={buttonColor} className={`mt-4 sm:mt-11 ml-4 sm:ml-11 max-w-24`}>{buttonName}</DefaultButton>
            <div className="leading-4 sm:leading-8 text-base sm:text-3xl font-bold mt-6 sm:mt-16 ml-4 sm:ml-11">
                {header}
            </div>
            <div className="leading-6 text-sm sm:text-lg mt-4 ml-4 sm:ml-11 text-text-color pb-4" dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="absolute right-1 sm:right-4 bottom-1 sm:bottom-4">
                <img src={linkUrl?.toString()} className="w-6 sm:w-8 h-6 sm:h-8" />
            </div>
        </div>
    );
}

export default DrivenCard;