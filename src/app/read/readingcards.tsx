import React, { FC } from "react";
import UpdatedCard from "../components/cards/UpdatedCard";

const drivenItems = [
    {
        typeName: "Read",
        typeColor: "#FF4405",
        header: "Latest Article",
        content: 'Dive into our newest article, \"Data-Driven Decision Making,\" which offers strategic guidance on harnessing data insights to drive business success',
        cardColor: "#FFF7F4",
        imgUrl: "/assets/images/stayUpdated/card2.svg",
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
        typeName: "Read",
        typeColor: "#FF4405",
        header: "Latest Article",
        content: 'Dive into our newest article, \"Data-Driven Decision Making,\" which offers strategic guidance on harnessing data insights to drive business success',
        cardColor: "#FFF7F4",
        imgUrl: "/assets/images/stayUpdated/card2.svg",
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
        typeName: "Read",
        typeColor: "#FF4405",
        header: "Latest Article",
        content: 'Dive into our newest article, \"Data-Driven Decision Making,\" which offers strategic guidance on harnessing data insights to drive business success',
        cardColor: "#FFF7F4",
        imgUrl: "/assets/images/stayUpdated/card2.svg",
    },
    {
        typeName: "Read",
        typeColor: "#FF4405",
        header: "Latest Article",
        content: 'Dive into our newest article, \"Data-Driven Decision Making,\" which offers strategic guidance on harnessing data insights to drive business success',
        cardColor: "#FFF7F4",
        imgUrl: "/assets/images/stayUpdated/card2.svg",
    },
];

const ReadingCards: FC = () => {
    return (
        <div className="mt-4 sm:mt-14 px-4 sm:px-10">
            <div>
                <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Stay Updated</span>
            </div>
            <div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color">
                Latest Readings from Edosa
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

export default ReadingCards;