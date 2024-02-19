import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface loadingProps { }

const loading: FC<loadingProps> = ({ }) => {
    const placeholderCards = Array.from({ length: 6 }, (_, index) => index);

    return (
        <>
            <h1 className='font-semibold text-2xl text-center my-4 text-neutral-800'><Skeleton height={30} width={400} highlightColor='#e4e4e7' /></h1>
            <div className='grid grid-cols-3 py-10 px-4  gap-6'>
                {placeholderCards.map((_, index) => (
                    <div key={index} className='grid grid-cols-3 items-center bg-white p-3 shadow-md rounded-[.175rem] border'>
                        <div className='col-span-2'>
                            <p className='font-extrabold text-4xl text-[#425d88]'><Skeleton height={30} width={30} highlightColor='#e4e4e7' /></p>
                            <h1 className='mt-4 text-gray-500 font-semibold text-lg'><Skeleton height={30} width={150} highlightColor='#e4e4e7' /></h1>
                        </div>
                        <div className='col-span-1 flex justify-center items-center h-full w-full'>
                            <Skeleton circle height={90} width={90} highlightColor='#e4e4e7' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default loading