'use client';
import { FC } from 'react';
import PackageCard from '../../components/cards/PackageCard';
import { badge } from '@material-tailwind/react';

const ViewPackage: FC = () => {

    const packages = [
        {
            type: 'learn',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'read',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'watch',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'meet',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'watch',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        }
    ]


    return (
        <div className='w-full'>
            
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-900 hover:text-700 px-2 py-1 text-[18px] font-medium">
                            View All
                        </a>
                        <a href="#" className="text-gray-900 hover:text-700 px-2 py-1 text-[18px] font-medium">
                            Learn
                        </a>
                        <a href="#" className="text-gray-900 hover:text-700 px-2 py-1 text-[18px] font-medium">
                            Read
                        </a>
                        <a href="#" className="text-gray-900 hover:text-700 px-2 py-1 text-[18px] font-medium">
                            Watch
                        </a>
                        <a href="#" className="text-gray-900 hover:text-700 px-2 py-1 text-[18px] font-medium">
                            Meet
                        </a>
                    </div>
                    </div>
                </div>
            </nav>
            
            {
                packages.map((el, index) => {
                    return (
                        <PackageCard 
                            type={el.type} 
                            title={el.title} 
                            badge={el.badge} 
                            isChecked={el.isChecked} 
                            price={el.prince} 
                            content={el.content} 
                            imgUrl={el.imgUrl}
                            linkUrl={el.linkUrl}
                        />
                    )
                })
            }
            
        </div>
    )
}

export default ViewPackage;