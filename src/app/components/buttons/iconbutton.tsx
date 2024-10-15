import Image from "next/image";
import React, { FC } from "react";
import GOOGLE from "@/public/assets/svg/google.svg";
interface IconButtonProps {
    children?: any;
    buttonColor?: string;
    className?: string;
}

const IconButton: FC<IconButtonProps> = ({ children, buttonColor, className }: IconButtonProps) => {
    return <div style={{ backgroundColor: buttonColor }} className={`bg-[#475467] rounded-full bold text-center py-2 px-6 flex justify-center ${className}`}>
        <Image src={GOOGLE} alt="icon" className="mr-2"></Image>
        {children}
    </div>
}

export default IconButton;