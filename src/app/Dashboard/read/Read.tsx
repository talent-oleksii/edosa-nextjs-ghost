'use client';

import React, { FC, useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
import parse from 'html-react-parser';
import BOOK2 from "@/public/assets/images/books/book2.png";
import DefaultButton from '../../components/buttons/DefaultButton';
import '../card.css';
import Loading from '@/public/assets/loading/blue.gif';
import { useSearchParams } from "next/navigation";

const filterTags: string[] = ['hash-books'];

const Read: FC = () => {

    const searchParams = useSearchParams();

    const hasRun = useRef(false);
    const [data, setData] = useState<any>([]);
    const [individual, setIndividual] = useState<any | undefined>(undefined);
    const [isReading, setIsReading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const getPosts = async() => {
            try {
                let demoData: any = [];

                const res = await axios.get<any>('/api/admin/posts');
                for (const post of res.data.data) {
                    post.tags.map((el:any) => {
                        if (filterTags.includes(el.slug)) {
                            post.badge = 'Published';
                            demoData.push(post);
                        }
                    })
                }
                
                const page_slug = 'cheatsheets-resources';
                const pages = await axios.get<any>('/api/admin/pages');
                for (const page of pages.data.data) {
                    if (page.slug == page_slug) {
                        page.badge = 'eCheatSheets';
                        demoData.push(page);
                    }
                }

                setData(demoData);

                // if the URL has the slug
                const slug = searchParams?.get('slug');
                if (slug) {
                    let index:any;
                    demoData.map((el:any, i:number) => {
                        if (el.slug === slug) index = i;
                    })
                    setIndividual(demoData[index]);
                }

                setLoading(false);

            } catch (err) {
              console.log(err);
            }
        }
  
        getPosts();

    }, []);

    // init Individual for individual book
    const initIndividual = () => {
        setIndividual(undefined);
        setIsReading(false);
    }


    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-4 sm:px-7 py-5 sm:py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px] pb-3'>
                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-4 sm:px-7 py-5 text-text-color'>
                    <span className='hover:cursor-pointer' onClick={initIndividual}>
                        Services &gt; Read {individual && ` > ` + individual.title}
                    </span>
                </h1>

                {
                    !individual && !isReading && (
                        <div className='px-5 sm:px-12'>
                            {
                                loading && (
                                    <div className='flex justify-center'>
                                        <Image src={Loading} alt='loading' className='w-[60px] h-[60px]' />
                                    </div>
                                )
                            }
                            {
                                !loading && (
                                    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                                        {
                                            data.map((el:any, index:number) => (
                                                <section key={index} className="relative w-full h-[278px] bg-r-demo-color rounded-[22px] py-7">
                                                    <span className='inline-block w-[auto] h-[25px] px-3 py-1 text-center text-[12px] text-white bg-r-main-color rounded-full mx-7'>{el.badge}</span>
                                                    <h1 className='text-[18px] font-bold font-inter mt-2 mx-7'>
                                                        {el.title}
                                                    </h1>
                                                    <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                                                        <span onClick={() => setIndividual(data[index])}>
                                                            <DefaultButton className='w-[auto] h-[40px] font-bold !px-10 py-[10px] text-xs text-center'>
                                                                Read Now
                                                            </DefaultButton>
                                                        </span>
                                                    </div>
                                                </section>
                                            ))
                                        }
                                    </div>
                                )
                            }                            
                        </div>
                    )
                }

                {
                    individual && !isReading && (
                        <div className="h-[auto] grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                            <div className='w-full sm:w-[auto] h-[auto] sm:h-[520px] flex justify-center'>
                                <img src={individual.feature_image} alt="learn image"/>
                            </div>
                            <div className='pt-5 flex flex-col'>
                                <div className="mb-[auto] text-[18px] sm:text-[25px] md:text-[36px] leading-11 font-bold text-text-color text-center">
                                    {individual.title}
                                </div>
                                <div className='w-full flex justify-center gap-3 text-center mt-5'>
                                    <Link href="#" className="w-[120px] sm:w-[160px] md:w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                        <button>Download</button>
                                    </Link>
                                    <Link href="#" onClick={() => setIsReading(true)}>
                                        <DefaultButton className='w-[120px] sm:w-[160px] md:w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                            Start Reading
                                        </DefaultButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    isReading && individual && (
                        <article>
                            <div className='p-5 text-text-color text-[1.2rem] leading-[2rem] post-body' dangerouslySetInnerHTML={{ __html: individual.html }}></div>
                        </article>
                    )
                }

            </div>
        </div>
    )
}

export default Read;