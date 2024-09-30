import React, { FC } from "react";
import UpdatedCard from "../../components/cards/UpdatedCard";

const drivenItems = [
    {
        typeName: "Learn",
        typeColor: "#5D5FEF",
        header: "New Course Alert",
        content: 'Discover the \"Demystifying & Accelerating AI Value\" course, a 3-week intensive program on Maven.com, guiding you through the fundamentals of AI and its real-world applications.',
        cardColor: "#F3F8FE",
        imgUrl: "/assets/images/stayUpdated/card1.svg",
    },
    {
        typeName: "Read",
        typeColor: "#FF4405",
        header: "Latest Article",
        content: 'Dive into our newest article, \"Data-Driven Decision Making,\" which offers strategic guidance on harnessing data insights to drive business success',
        cardColor: "#FFF7F4",
        imgUrl: "/assets/images/stayUpdated/card2.svg",
    },
    {
        typeName: "Watch",
        typeColor: "#9E77ED",
        header: "Latest Video",
        content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations and how to integrate it effectively for long-term impact.',
        cardColor: "#F7F6FF",
        imgUrl: "/assets/images/stayUpdated/card3.png",
    },

];

const StayUpdated: FC = () => {
    return (
        <div className="mt-4 sm:mt-14 px-4 sm:px-10">
            <div>
                <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Stay Updated</span>
            </div>
            <div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color">
                Editor’s Pick
            </div>
            <div className="text-base sm:text-2xl leading-6 sm:leading-8 mt-2 sm:mt-8 text-text-color">
                Discover the top articles, books, and videos personally selected by Edosa to enhance your understanding of data and AI.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 mt-6">
                {
                    drivenItems.map((item, index) => (
                        <UpdatedCard
                            key={index}
                            header={item.header}
                            content={item.content}
                            cardColor={item.cardColor}
                            typeName={item.typeName}
                            typeColor={item.typeColor}
                            imgUrl={item.imgUrl}
                        />
                    ))
                }
            </div>

        </div>
    );

}

export default StayUpdated;