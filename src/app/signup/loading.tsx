import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface loadingProps { }

const loading: FC<loadingProps> = ({ }) => {
    return (
        <div className='h-[100vh] flex justify-center items-center '>
            <div className='w-[25rem] p-6 bg-zinc-100 shadow-md rounded-md'>
                <h1 className=' py-5 text-center text-2xl font-normal text-neutral-900 '>
                    <Skeleton height={30} width={150} highlightColor='#e4e4e7' />
                </h1>
                <hr className='border-zinc-600 my-5 item' />
                <form className='flex flex-col justify-center items-center container'>
                    <Skeleton height={40} width={350} highlightColor='#e4e4e7' />
                    <Skeleton height={40} width={350} highlightColor='#e4e4e7' />
                    <Skeleton height={40} width={350} highlightColor='#e4e4e7' />
                    <Skeleton height={40} width={350} highlightColor='#e4e4e7' />
                    <div className='w-[96%] flex justify-start my-2'>
                        <span className='text-neutral-950 text-sm font-normal'>
                            <Skeleton height={10} width={200} highlightColor='#e4e4e7' />
                        </span>
                    </div>

                    <div className='w-[96%] flex justify-end my-2'>
                        <Skeleton height={40} width={90} highlightColor='#e4e4e7' />
                    </div>
                </form>
                <hr className='border-zinc-600 my-5 item' />
                <div className='flex flex-col justify-center items-center'>
                    <Skeleton height={25} width={75} highlightColor='#e4e4e7' />
                    <Skeleton height={10} width={300} highlightColor='#e4e4e7' />
                </div>
            </div>
        </div>
    )
}

export default loading