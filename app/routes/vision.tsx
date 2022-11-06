import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const Vision = () => {
    return (<>

        <div className="flex flex-col flex-grow">

            <div className="p-3 text-sm breadcrumbs flex">
                <ul className="flex">
                    <li><a href='/'>Home</a></li>
                    <li><a>Vision</a></li>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full px-4 pt-16">
                    <div className="mx-auto w-full max-w-md rounded-2xl  p-2">
                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-gray-700 text-primary-content peer-checked:text-secondary-content">
                                About Us
                            </div>
                            <div className="collapse-content text-primary-content peer-checked:text-secondary-content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur modi vitae quis eveniet necessitatibus ratione laborum, aperiam, veniam accusantium exercitationem ipsam voluptas corrupti rerum iure non? Natus vero saepe porro!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 pt-16">
                    <div className="mx-auto w-full max-w-md rounded-2xl  p-2">
                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-gray-700 text-primary-content peer-checked:text-secondary-content">
                                Vision and Mission
                            </div>
                            <div className="collapse-content text-primary-content peer-checked:text-secondary-content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur modi vitae quis eveniet necessitatibus ratione laborum, aperiam, veniam accusantium exercitationem ipsam voluptas corrupti rerum iure non? Natus vero saepe porro!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </>)
}


export default Vision;