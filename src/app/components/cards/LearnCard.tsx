import React, { FC, useState } from "react";
import Image from "next/image";
import CHECK from "@/public/assets/svg/check.svg";
import DefaultButton from "../buttons/DefaultButton";
import setupGhostApi from "../../utils/api";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import parse from 'html-react-parser';

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;
const PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

const ghostAPI = setupGhostApi({
    apiUrl: API_URL,
    apiKey: ADMIN_API_KEY
})

interface LearnCardProps {
    tierid: string,
    title: string;
    header: string;
    text: string;
    subTitle: string;
    items: string[];
    bonus: any,
    totalValue: string,
    buttonName: string,
    button: string;
    backColor: string;
    border: string;
    more: boolean,
    setMore: Function
}
// const  tItems,setCurrentItems = useState<VisitorData[]>([]);
const LearnCard: FC<LearnCardProps> = ({
    tierid,
    title,
    header,
    text,
    subTitle,
    items,
    bonus,
    totalValue,
    buttonName,
    button,
    backColor,
    border,
    more,
    setMore
}: LearnCardProps) => {

    const router = useRouter();
    
    // const [isMore, setIsMore] = useState<Boolean>(false);
    const edosaJwtToken = localStorage.getItem('edosaJwtToken');
    const edosaMember = localStorage.getItem('edosaMember');
    const member = edosaMember && JSON.parse(edosaMember);
    // console.log(member);

    async function payFunc() {

        const response = await ghostAPI.member.checkoutPlan({
            plan: '',
            tierId: tierid,
            cadence: 'month',
            cancelUrl: `${PUBLIC_DOMAIN}/learn/?stripe=cancel`,
            successUrl: `${PUBLIC_DOMAIN}/learn/?stripe=success`,
            email: '',
            customerEmail: '',
            name: '',
            offerId: '',
            newsletters: '',
            metadata: {
                requestSrc: 'portal',
                urlHistory: []
            }
        } as any);
        console.log(response);

    }

    const onFreeAccess = () => {
        if (edosaJwtToken) {
            router.push('/Dashboard');
        } else {
            router.push('/signin');
        }
    }

    const onMemberAccess = () => {
        router.push('/Dashboard');
    }

    return (
        <div style={{ backgroundColor: backColor }}
            className={`h-[auto] shadow-md gap-1 sm:gap-3 rounded-xl py-5 ${border}`}
        >
            <div className="flex flex-col h-full">
                {/* Flex Div 1 */}
                <div className="mb-[auto]">
                    <div className="text-lg sm:text-4xl leading-11 font-bold text-text-color font-inter text-center">
                        {title}
                    </div>
                    <div className="text-lg sm:text-lg leading-8 font-bold text-text-color font-inter text-center my-3">
                        {header}
                    </div>
                    <div className={`text-sm leading-8 text-text-color px-8 my-2 min-h-[100px]`}>
                        {text}
                    </div>
                
                    <div className="text-md text-text-color font-bold px-5 pt-3">{subTitle}</div>
                    <div className={`px-7 mt-2`}>
                        {items.map((item:any, index:number) => {
                            return (
                                <div key={index}>
                                    <div className="flex flex-row">
                                        <Image src={CHECK} width={24} height={24} alt="checked" />
                                        <span className="text-sm text-text-color ml-2 my-2">{parse(item.title)}</span>
                                    </div>
                                    <div className="text-sm text-text-color pl-[30px]">
                                        <ul>
                                            {
                                                item.subitems.map((el:string, i:number) => {
                                                    if (!more) return;
                                                    return (
                                                        <li key={i} className="my-1">- {el}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="text-md text-text-color px-8 mt-4 mb-2 font-inter font-bold" style={{color: "darkgreen"}}>{bonus.name}</div>
                    <div className="text-sm text-text-color px-8">{parse(bonus.content)}</div>
                    <div className="text-sm text-text-color pl-[40px]">
                        {
                            bonus.items.map((el:string, index:number) => {
                                if (!more) return;
                                return (
                                    <div key={index} className="my-1">- {el}</div>
                                )
                            })
                        }
                    </div>

                </div>
                {/* Flex Div 2 */}
                <div>
                    <div className="underline text-[rgb(0,150,250)] hover:cursor-pointer my-3 text-center">
                        {
                            more ? (
                                <span onClick={() => setMore(!more)}>Less</span>
                            ) : (
                                <span onClick={() => setMore(!more)}>More</span>
                            )
                        }
                    </div>
                    <div className="text-text-color text-center">
                        Total Value: <b>{totalValue}</b>
                    </div>
                    <div className="w-full flex justify-center py-2">
                        <div className="w-5/6">
                            {
                                button == 'paid' ? (
                                    <div>
                                        {
                                            member && member.paid ? (
                                                <span onClick={onMemberAccess}>
                                                    {/* <DefaultButton>Member Access</DefaultButton> */}
                                                    <DefaultButton>{buttonName}</DefaultButton>
                                                </span>
                                            ) : (
                                                <div className="w-full" onClick={payFunc}>
                                                    <DefaultButton>{buttonName}</DefaultButton>
                                                </div>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <span onClick={onFreeAccess}>
                                        {/* <DefaultButton>Free Access</DefaultButton> */}
                                        <DefaultButton>{buttonName}</DefaultButton>
                                    </span>
                                )
                            }
                        </div>
                    </div>

                    {
                        !edosaJwtToken && (
                            <div className="mt-2 text-center text-text-color">
                                Already a member? <Link href="/signin" className="text-[rgb(0,150,250)]">Sign In Here</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default LearnCard;