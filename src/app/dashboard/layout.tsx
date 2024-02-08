"use client"
import React, { ReactNode } from 'react'
import ApplicationTracker from '@/components/navComponents/ApplicationTracker';
import Home1 from '@/components/navComponents/Home';
import TodaysOffer from '@/components/navComponents/TodaysOffer';
import TopHeader from '@/components/navComponents/TopHeader';
import Users from '@/components/navComponents/Users';
import PaymentRequest from '@/components/navComponents/PaymentRequest';
import Deals from '@/components/navComponents/Deals';
import Featured from '@/components/navComponents/Featured';
import Wallet from '@/components/navComponents/Wallet';
import BbpsAndRechargeRequest from '@/components/navComponents/BbpsAndRechargeRequest';
import EmployeeTracker from '@/components/navComponents/EmployeeTracker';
import AddOperationTeam from '@/components/navComponents/AddOperationTeam';
import ReferTracker from '@/components/navComponents/ReferTracker';
import SendNotifications from '@/components/navComponents/SendNotifications';
import Settings from '@/components/navComponents/Settings';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface layoutProps {
    children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <>
            <div className='h-[100vh] '>
                <TopHeader />
                <div className='flex h-[calc(100vh-3.5rem)]'>
                    <div className='bg-[#2d4568] w-[22.125rem] overflow-y-auto scrollbar-w-2 scrollbar-track-custom scrollbar-thumb-custom scrollbar-thumb-rounded '>
                        <div className='py-[0.875rem]'>
                            <h1 className='font-bold text-white uppercase px-5'>admin panel</h1>
                            <div className=''>
                                {/* <h1 className='font-semibold text-lg text-white uppercase'>XtremeFin <br />finance made easy</h1> */}
                                <ul className='  py-[.75rem]'>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-300 hover:text-[#2d4568] ${pathname === `/dashboard` ? ` bg-slate-200 text-[#2d4568] ` : ``}`}>
                                        <Home1 />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/users` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <Users />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/applicationTracker` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <ApplicationTracker />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/todaysOffer` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <TodaysOffer />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/deals` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <Deals />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/featured` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <Featured />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/wallet` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <Wallet />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/bbpsAndRechargeRequest` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <BbpsAndRechargeRequest />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/paymentRequest` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <PaymentRequest />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/employeeTracker` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <EmployeeTracker />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/addOperationTeam` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <AddOperationTeam />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/referTracker` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <ReferTracker />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/sendNotifications` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <SendNotifications />
                                    </li>
                                    <li className={`text-white text-lg font-semibold py-2 px-8 hover:bg-slate-400 hover:text-[#2d4568] ${pathname === `/dashboard/settings` ? ` bg-slate-300 text-[#2d4568] ` : ``}`}>
                                        <Settings />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <aside className='bg-gray-200 w-[calc(100vw-22.125rem)] overflow-y-auto scrollbar-w-2 scrollbar-track-custom scrollbar-thumb-custom scrollbar-thumb-rounded '>{children}</aside>
                </div>
            </div>
        </>
    )
}

export default layout