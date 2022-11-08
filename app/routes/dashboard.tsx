import { useState } from 'react'
import {
    Avatar,
    Button,
    Card,
    Dropdown,
    Modal,
    Steps,
    Tabs,
    Theme,
    Toggle
} from "react-daisyui";


export const Dashboard: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [tabs] = useState([
        {
            key: '1',
            title: 'Overview',
            content: 'Overview content'
        }
    ])

    const tester = () => {
        console.log('Chanegd')
        setTabIndex(1)
    }

    return (
        <div className='flex flex-col justify-between h-full'>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Stats</h3>
                    <p>November 2022</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">M-O-M Inflation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">2.2</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">CPI Index</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">2.3</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Y-O-Y Inflation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">2.5</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <Tabs
             value={tabIndex}
             onChange={(e) => setTabIndex(e)}
             variant="lifted" 
             className="m-4" 
             boxed >
                <Tabs.Tab
                    value={0}
                    className="active cursor-pointer"
                >
                    Tab 01
                </Tabs.Tab>
                <Tabs.Tab
                    value={1}
                    activeValue={tabIndex}
                    className="cursor-pointer"
                >
                    Tab 02
                </Tabs.Tab>
                <Tabs.Tab
                    value={2}
                    className="cursor-pointer"
                >
                    Tab 03
                </Tabs.Tab>
            </Tabs>

        </div>
    )
}


export default Dashboard;