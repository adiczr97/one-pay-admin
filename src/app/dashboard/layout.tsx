"use client"
import React, { ReactNode } from 'react'
import ApplicationTracker from '@/components/navComponents/ApplicationTracker';
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
import Setting from '@/components/navComponents/Setting';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Dashboard from '@/components/navComponents/Dashboard';

interface layoutProps {
    children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const data = [
        {
            component: <Dashboard />,
            route: '/dashboard'
        },
        {
            component: <Users />,
            route: '/dashboard/users'
        },
        {
            component: <ApplicationTracker />,
            route: '/dashboard/applicationtracker'
        },
        {
            component: <TodaysOffer />,
            route: '/dashboard/todaysoffer'
        },
        {
            component: <Deals />,
            route: '/dashboard/deals'
        },
        {
            component: <Featured />,
            route: '/dashboard/featured'
        },
        {
            component: <Wallet />,
            route: '/dashboard/wallet'
        },
        {
            component: <BbpsAndRechargeRequest />,
            route: '/dashboard/bbpsandrechargerequest'
        },
        {
            component: <PaymentRequest />,
            route: '/dashboard/paymentrequest'
        },
        {
            component: <EmployeeTracker />,
            route: '/dashboard/employeetracker'
        },
        {
            component: <AddOperationTeam />,
            route: '/dashboard/addoperationteam'
        },
        {
            component: <ReferTracker />,
            route: '/dashboard/refertracker'
        },
        {
            component: <SendNotifications />,
            route: '/dashboard/sendnotifications'
        },
        {
            component: <Setting />,
            route: '/dashboard/settings'
        }
    ]

    return (
        <>
            <div className='h-[100vh] '>
                <TopHeader />
                <div className='flex h-[calc(100vh-3rem)]'>
                    <div className='bg-[#2a3f54] w-[20rem] overflow-y-auto scrollbar-w-2 scrollbar-track-custom scrollbar-thumb-custom scrollbar-thumb-rounded '>
                        <div className='py-[0.875rem]'>
                            <h1 className='font-semibold text-white uppercase px-5'>admin panel</h1>
                            <div className=''>
                                <ul className='  py-[.75rem]'>
                                    {
                                        data.map((item, index) => (
                                            <li key={index} className={`text-white text-lg font-medium py-2 px-8 my-1 hover:bg-[#35495d] transition-all duration-100 ease-in ${pathname === `${item.route}` ? ` bg-[#35495d] border-r-4 border-r-[#1abb9c]` : ``}`}>
                                                {item.component}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <aside className='w-[calc(100vw-20rem)] overflow-y-auto scrollbar-w-2 scrollbar-track-custom scrollbar-thumb-custom scrollbar-thumb-rounded '>{children}</aside>
                </div>
            </div>
        </>
    )
}

export default layout