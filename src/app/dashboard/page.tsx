import { CircleDot, ListChecks, Recycle, User, User2, Users } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='grid grid-cols-3 py-10 px-4  gap-4'>
                <div className='flex justify-between items-center bg-white py-2 px-2 shadow-md rounded-md'>
                    <div>
                        <p className='font-extrabold text-4xl text-[#425d88]'>24</p>
                        <h1 className='mt-4 text-gray-500 font-semibold text-base'>Active User</h1>
                    </div>
                    <User className='h-32 w-32 text-[#868b98] font-light' />
                </div>
                <div className='flex justify-between items-center bg-white py-2 px-2 shadow-md rounded-md'>
                    <div>
                        <p className='font-extrabold text-4xl text-[#425d88]'>04</p>
                        <h1 className='mt-4 text-gray-500 font-semibold text-base'>Total User</h1>
                    </div>
                    <Users className='h-32 w-32 text-[#868b98] font-light' />
                </div>
                <div className='flex justify-between items-center bg-white py-2 px-2 shadow-md rounded-md'>
                    <div>
                        <p className='font-extrabold text-4xl text-[#425d88]'>92</p>
                        <h1 className='mt-4 text-gray-500 font-semibold text-base'>Total Application pending For Approval</h1>
                    </div>
                    <CircleDot className='h-32 w-32 text-[#868b98] font-light'/>
                </div>
                <div className='flex justify-between items-center bg-white py-2 px-2 shadow-md rounded-md'>
                    <div>
                        <p className='font-extrabold text-4xl text-[#425d88]'>924</p>
                        <h1 className='mt-4 text-gray-500 font-semibold text-base'>Total Application Approved For Payment</h1>
                    </div>
                    <ListChecks className='h-32 w-32 text-[#868b98] font-light' />
                </div>
                <div className='flex justify-between items-center bg-white py-2 px-2 shadow-md rounded-md'>
                    <div>
                        <p className='font-extrabold text-4xl text-[#425d88]'>94</p>
                        <h1 className='mt-4 text-gray-500 font-semibold text-base'>Total Payment Request Made In INR</h1>
                    </div>
                    <Users className='h-32 w-32 text-[#868b98] font-light' />
                </div>
                <div className='flex justify-between items-center bg-white py-2 px-2 shadow-md rounded-md'>
                    <div>
                        <p className='font-extrabold text-4xl text-[#425d88]'>24</p>
                        <h1 className='mt-4 text-gray-500 font-semibold text-base'>Total BBPS And Recharge Transaction Made INR</h1>
                    </div>
                    <Recycle className='h-32 w-32 text-[#868b98] font-light' />
                </div>
            </div>
        </>
    )
}

export default page