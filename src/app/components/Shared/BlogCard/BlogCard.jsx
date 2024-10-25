import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { truncateText } from '@/app/utils/TruncateText';

gsap.registerPlugin(ScrollTrigger);

export default function BlogCard({ blog }) {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Card animation
            gsap.fromTo(cardRef.current,
                { opacity: 0, x: 90, scale: 0.9 },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top bottom',
                        end: 'top center',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Content animation
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={cardRef} className='rounded-3xl group mt-11 dark:bg-slate-900 overflow-hidden border'>
            <div className='h-[250px] w-full overflow-hidden'>
                <Image
                    src={blog.urlToImage || blog?.fields?.thumbnail || "/assets/images/blog.webp"}
                    alt={`${blog.title || blog.webTitle} image`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }}
                    className='duration-700 object-cover group-hover:scale-110'
                />
            </div>
            <div ref={contentRef} className='p-5 dark:text-white'>
                <span className='block opacity-50'>
                    Author: {blog?.author || (blog.references?.length > 0 ? truncateText(blog.references[0].id, 20) : "No Author Available")}
                </span>
                <h4 className='bg-blue-400 rounded-2xl px-2 p-1 font-semibold text-black mt-5 w-fit'>{blog?.source?.name || blog.sectionName}</h4>
                <h3 className='my-4 font-bold'>{truncateText(blog.title || blog.webTitle)}</h3>
                <p className='opacity-60'>
                    {blog.description ||
                        (blog.fields?.standfirst ? (
                            <span dangerouslySetInnerHTML={{ __html: blog.fields.standfirst }}></span>
                        ) : "No Description Available")}
                </p>
            </div>
        </div>
    );
}
