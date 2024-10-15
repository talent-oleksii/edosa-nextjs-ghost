import React, { FC } from "react";
import Image from "next/image";
import CHECK from "@/public/assets/svg/check.svg";
import DefaultButton from "../buttons/DefaultButton";
interface LearnCardProps {
    title: string;
    header: string;
    text: string;
    items: string[];
    buttonName: string;
    backColor: string;
    border: string;
}
// const  tItems,setCurrentItems = useState<VisitorData[]>([]);
const LearnCard: FC<LearnCardProps> = ({
    title,
    header,
    text,
    items,
    buttonName,
    backColor,
    border
}: LearnCardProps) => {
    return (
        <div style={{ backgroundColor: backColor }}
            className={`sm:min-h-[350px] card flex flex-col justify-center items-center shadow-md gap-1 sm:gap-3 rounded-xl relative py-5 ${border} `}
        >
            <div className="text-lg sm:text-4xl leading-11 font-bold  text-black">
                {title}
            </div>
            <div className="text-lg sm:text-lg leading-8 font-bold  text-black">
                {header}
            </div>
            <div className="text-sm leading-8 text-text-color px-8">
                {text}
            </div>
            <div>
                {items.map((item, index) => (
                    <div key={index} className="flex flex-row">
                        <Image src={CHECK} width={24} height={24} alt="checked" />
                        <span className="text-sm text-text-color ml-2 my-2">{item}</span>
                    </div>
                ))}
            </div>
            <DefaultButton className="w-5/6 py-2">{buttonName}</DefaultButton>
        </div>
    );
}

export default LearnCard;