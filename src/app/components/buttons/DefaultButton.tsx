import React, { FC } from "react";

interface DefaultButtonProps {
    children: any;
    buttonColor?: string;
    className?: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({ children, buttonColor, className }: DefaultButtonProps) => {
    return <div style={{ backgroundColor: buttonColor }} className={`bg-[#475467] rounded-full text-xs sm:text-[20px] font-[Inter] bold text-white text-center py-1 sm:py-3 px-3 sm:px-6 ${className}`}>{children}</div>
}

export default DefaultButton;