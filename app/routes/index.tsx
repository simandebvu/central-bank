import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

export default function Index() {

  const pageSections = [
    {
      title: 'About Us',
      link: '/'
    },
    {
      title: 'Visa Cards',
      link: '/'
    }
    , {
      title: 'Monetary Policy',
      link: '/'
    }
    , {
      title: 'Inclusion',
      link: '/'
    }
    , {
      title: 'Media',
      link: '/'
    }, {
      title: 'Markets',
      link: '/'
    }
  ]

  return (
    <>
      <div className=" bg-[url('/img/image.jpg')] bg-cover h-full w-full object-cover">
        <div className="lg:grid grid-cols-2 md:gap-2 p-5 lg:p-16 " >

          <div className="flex flex-col ">

            <h1 className="text-5xl mb-5 lg:text-7xl font-bold text-gray-100  md:my-0   select-none">The Reserve Bank Of Wakanda. </h1>

            <div className="mt-10" >
              <div className="card bg-green-500 md:h-32 md:w-72 rounded-none">
                <div className="card-body text-white font-bold md:text-2xl m-auto select-none cursor-pointer">
                  Our Vision and Mission Statement
                </div>
                <div className='text-white absolute top-0 right-0 p-2 font-bold text-xl'>
                  <BsFillArrowUpRightCircleFill />
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:grid-cols-2  md:m-24 overflow-auto"> {pageSections.map((section, i) => {
            return (
              <SectionCard key={i} title={section.title} link={section.link} />
            )
          })}</div>
        </div>
      </div>
    </>
  );
}


const SectionCard = ({ title, link }: any) => {
  return (
    <div className="card glass my-4 rounded-none cursor-pointer select-none h-32 py-10">
      <div className="card-body text-white font-bold lg:text-xl text-center align-middle p-0">
        {title}
      </div>
      <div className='text-white absolute top-0 right-0 p-2 font-bold text-xl'>
        <BsFillArrowUpRightCircleFill />
      </div>
    </div>
  )

}
