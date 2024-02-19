import React from 'react'

const data = [
    {
        quantity: 24,
        name: "Active User",
        iconName: "/images/Active-user.png"
    },
    {
        quantity: 4,
        name: "Total User",
        iconName: "/images/Total-user.png"
    },
    {
        quantity: 92,
        name: "Total Application pending For Approval",
        iconName: "/images/Pending.png"
    },
    {
        quantity: 924,
        name: "Total Application Approved For Payment",
        iconName: "/images/Approved.png"
    },
    {
        quantity: 94,
        name: "Total Payment Request Made In INR",
        iconName: "/images/Payment-request.png"
    },
    {
        quantity: 24,
        name: "Total BBPS And Recharge Transaction Made INR",
        iconName: "/images/BBPS.png"
    }
]
const page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return (
        <>
            <h1 className='font-semibold text-2xl text-center my-4 text-neutral-800'>Welcome to XtremeFin - Admin Panel</h1>
            <div className='grid grid-cols-3 py-10 px-4  gap-6'>
                {
                    data.map((card, index) =>
                    (
                        <div key={index} className='grid grid-cols-3 items-center bg-white p-3 shadow-md rounded-[.175rem] border'>
                            <div className='col-span-2'>
                                <p className='font-extrabold text-4xl text-[#425d88]'>{card.quantity}</p>
                                <h1 className='mt-4 text-gray-500 font-semibold text-lg'>{card.name}</h1>
                            </div>
                            <div className='col-span-1 flex justify-center items-center h-full w-full'>
                                <img src={card.iconName} alt={card.iconName} className='h-20 w-20' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default page