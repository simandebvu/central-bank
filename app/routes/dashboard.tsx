import { Tab } from '@headlessui/react'
import { useState } from 'react'

const stats = [
    {
        title: 'CPI Index',
        value: '1.2',
        month: 'October 2022',
    },
    {
        title: 'MOM Inflation',
        value: '1.2',
        month: 'October 2022',
    },
    {
        title: 'Y-O-Y Inflation',
        value: '1.2',
        month: 'October 2022',
    }
]



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const StatsCard = ({ title, value, month }: any) => {
    return (<div className="px-4 flex">
        <div className="card bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{value}</p>
                <p>{month}</p>
            </div>
        </div>

    </div>)
}


export const Dashboard: React.FC = () => {
    let [categories] = useState({
        'Gold Coin Price': [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        'Exchange Rates': [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        'Inflation Rates': [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
        'Auction Results': [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })
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

            <div className="mt-20">
                <div className="w-full px-2 py-16 sm:px-0">
                    <Tab.Group onChange={(index) => {
        console.log('Changed selected tab to:', index)
      }}>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative rounded-md p-3 hover:bg-gray-100"
                                            >
                                                <h3 className="text-sm font-medium leading-5">
                                                    {post.title}
                                                </h3>

                                                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                    <li>{post.date}</li>
                                                    <li>&middot;</li>
                                                    <li>{post.commentCount} comments</li>
                                                    <li>&middot;</li>
                                                    <li>{post.shareCount} shares</li>
                                                </ul>

                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        'absolute inset-0 rounded-md',
                                                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                    )}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>


        </div>
    )
}


export default Dashboard;