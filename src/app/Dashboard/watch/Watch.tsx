'use client';

import React, { FC, useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
import DefaultButton from '../../components/buttons/DefaultButton';
import WatchArrow from '@/public/assets/images/drivenSvgs/arrow3.svg';
import parse from 'html-react-parser';
import Loading from '@/public/assets/loading/blue.gif';

const filterTags: string[] = ['hash-videonewsletteredition001', 'hash-videonewsletteredition002', 'hash-videopageseries0'];

const Watch: FC = () => {

    const hasRun = useRef(false);
    const [data, setData] = useState<any>([]);
    const [viewAll, setViewAll] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        let jwtToken: string = '';
        let tierOfMember: string = '';    // tier of paid member

        if (localStorage.getItem('edosaJwtToken') && localStorage.getItem('edosaMember')) {
            jwtToken += localStorage.getItem('edosaJwtToken');
            const getMember = localStorage.getItem('edosaMember');
            const member = getMember && JSON.parse(getMember);
            if (member.paid) tierOfMember = member.subscriptions[0].tier.slug;
        }

        const getPosts = async() => {
            try {

                let demoData: any = [];
                
                const res = await axios.get<any>('/api/admin/posts');
                for (const post of res.data.data) {
                    post.tags.map((el:any) => {
                        if (filterTags.includes(el.slug)) {
                            if (jwtToken) {
                                const tierOfPost = post.tiers.map((j:any) => j.slug);
                                if (tierOfPost.includes(tierOfMember) || post.visibility == 'public') demoData.push(post);
                            } else {
                                if (post.visibility == 'public') demoData.push(post);
                            }
                        }
                    })
                }
                console.log(res.data.data)
                console.log(demoData)

                const page_slug = 'free-coaching-snippets';
                const pages = await axios.get<any>('/api/admin/pages');
                for (const page of pages.data.data) {
                    if (page.slug == page_slug) demoData.push(page);
                }

                setData(demoData);
                setLoading(false);

                // const res = await axios.post<PostsResponse>('/api/content/posts', {
                //     payload: "&limit=all&filter=tag:[hash-VideoNewsletterEdition001,hash-videonewsletteredition002,hash-videopageseries0]"
                // });

            } catch (err) {
              console.log(err);
            }
        }
  
        getPosts();
    }, [])

    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-4 sm:px-7 py-5 sm:py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px] pb-3'>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-4 sm:px-7 py-5 text-text-color'>
                    <Link href="#" onClick={() => { setViewAll(false); setDetail({}); }}>
                        Watch &gt; Curated Resource Library
                    </Link>
                </h1>

                {
                    !viewAll && !detail.title && (
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 mx-5">
                            <div className='w-full xl:h-[520px] bg-w-demo-color rounded-[22px]'>
                                
                            </div>
                            <div className='sm:px-3'>
                                <div className="text-[20px] sm:text-[25px] md:text-[36px] leading-11 font-bold text-text-color xl:my-5">
                                    Curated Resource Library
                                </div>
                                {
                                    loading && (
                                        <div className='flex justify-center'>
                                            <Image src={Loading} alt='loading' className='w-[40px] h-[40px]' />
                                        </div>
                                    )
                                }
                                {
                                    !loading && data.map((el:any, index:number) => {
                                        if (index >= 5) return;
                                        return (
                                            <div key={index} className='flex justify-between items-center w-full h-auto text-text-color bg-w-demo-color rounded-[22px] px-6 py-2 mt-3'>
                                                <div className='w-11/12 font-bold text-[14px] sm:text-[16px]'>
                                                    {el.title}
                                                </div>
                                                <div className='w-1/12 flex justify-end'>
                                                    <Image 
                                                        alt={'arrow'}
                                                        className='w-6 h-6 my-2 hover:cursor-pointer'
                                                        src={WatchArrow}
                                                        onClick={() => {
                                                            setDetail(data[index]);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                                <div className='mt-12 flex gap-3 text-center justify-center w-full'>
                                    {/* <Link href="#" className="w-[120px] sm:w-[160px] md:w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                        <button>Premium</button>
                                    </Link> */}
                                    <Link href="#" onClick={() => setViewAll(true)}>
                                        <DefaultButton className='w-[120px] sm:w-[160px] md:w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                            View All
                                        </DefaultButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }


                {
                    viewAll && !detail.title && (
                        <div className="mx-5">
                            <div className='text-[20px] sm:text-[25px] md:text-[36px] leading-11 font-bold text-text-color xl:my-5 mb-3'>
                                Curated Resource Library
                            </div>

                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
                                {
                                    data.map((el: any, index: number) => {
                                        return (
                                            <div key={index} className='flex justify-between items-center w-full h-auto text-text-color bg-w-demo-color rounded-[22px] px-6 py-2'>
                                                <div className='w-11/12 font-bold text-[14px] sm:text-[16px]'>
                                                    {el.title}
                                                </div>
                                                <div className='w-1/12 flex justify-end'>
                                                    <Image 
                                                        alt={'arrow'}
                                                        className='w-6 h-6 my-2 hover:cursor-pointer'
                                                        src={WatchArrow} 
                                                        onClick={() => {
                                                            setDetail(data[index]);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }


                {
                    detail.title && (
                        <div className='sm:mx-5'>
                            <div className='text-[#344054] font-bold text-[18px] sm:text-[25px] px-3'>
                                {detail.title}
                            </div>
                            <div className='mt-5 leading-[30px] text-[#344054] font-inter text-[18px] px-3 post-body' dangerouslySetInnerHTML={{ __html: detail.html }}></div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Watch;