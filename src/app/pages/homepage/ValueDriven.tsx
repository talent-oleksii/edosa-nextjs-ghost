import React, { FC } from "react";
import DrivenCard from "../../components/cards/DrivenCard";

const drivenItems = [
	{
		buttonName: "Learn",
		buttonColor: "#5C76FF",
		header: "Tailored Educational Paths",
		content: "Access structured courses, coaching, and<br/> bundles tailored to different levels, helping<br/> professionals advance their data and AI skills.",
		cardColor: "#F3F8FE",
		imgUrl: "url(/assets/images/drivenSvgs/card1.svg)",
		linkUrl: "/assets/images/drivenSvgs/arrow1.svg",
	},
	{
		buttonName: "Read",
		buttonColor: "#F15F31",
		header: "Insightful Readings",
		content: "Discover a library of articles and books that<br/> provide strategic insights into how data and AI<br/> can create real-world value.",
		cardColor: "#FFF7F4",
		imgUrl: "url(/assets/images/drivenSvgs/card2.svg)",
		linkUrl: "/assets/images/drivenSvgs/arrow2.svg",
	},
	{
		buttonName: "Watch",
		buttonColor: "#9E77ED",
		header: "Engaging Multimedia Content",
		content: "Watch videos and podcasts featuring Edosa<br/> and industry experts, offering valuable<br/> perspectives on data and AI's power.",
		cardColor: "#F7F6FF",
		imgUrl: "url(/assets/images/drivenSvgs/card3.svg)",
		linkUrl: "/assets/images/drivenSvgs/arrow3.svg",
	},
	{
		buttonName: "Meet",
		buttonColor: "#95DB79",
		header: "  ",
		content: "Sign up for one-on-one coaching sessions with<br/> Edosa or get corporate advisory services that<br/> help organizations integrate data strategies<br/> effectively.",
		cardColor: "#F2FAEC",
		imgUrl: "url(/assets/images/drivenSvgs/card4.svg)",
		linkUrl: "/assets/images/drivenSvgs/arrow4.svg",
	},
];

const ValueDriven: FC = () => {
	return (
		<div className="mt-4 sm:mt-14 px-4 sm:px-10">
			<div>
				<span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Value-Driven</span>
			</div>
			<div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color">
				Unlock Value with Edosa’s Offerings
			</div>
			<div className="text-base sm:text-2xl leading-6 sm:leading-8 mt-2 sm:mt-8 text-text-color">
				Explore our comprehensive offerings designed to support your growth in data value and AI through learning, reading, watching, and personal coaching.
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-6">
				{
					drivenItems.map((item, index) => (
						<DrivenCard
							key={index}
							header={item.header}
							content={item.content}
							cardColor={item.cardColor}
							buttonName={item.buttonName}
							buttonColor={item.buttonColor}
							imgUrl={item.imgUrl}
							linkUrl={item.linkUrl}
						/>
					))
				}
			</div>

		</div>
	);

}

export default ValueDriven;