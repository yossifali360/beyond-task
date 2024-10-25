import Image from 'next/image'
export const NoData = () => {
    return (
        <div className='mx-auto my-5 max-w-[400px]'>
            <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                src="/assets/images/noData.png" alt="No Data To Show" className='object-cover' />
            <h3 className="text-center dark:text-white text-2xl font-semibold">Sorry ! No Data Founded</h3>
        </div>
    )
}
