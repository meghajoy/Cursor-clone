import features from '@/app/content/contents.json'
export default function FeatureCard() {
  return (
    <div className='px-4 mx-auto'>
      {features.Contents.FeatureCards.map((item,index) => (
        <div key={item.id} className='flex flex-col gap-10 py-16'>
          <div className="flex rounded-xl bg-[url('/img/gradient.avif')] mx-auto bg-cover bg-center w-fit h-[632px]">
              <div className='flex flex-col items-start justify-end w-[50%] p-16 gap-8'>
                <h1 className='text-5xl font-semibold text-neutral-200'>{item.heading}</h1>
                <p className='font-mono text-md font-normal text-neutral-200'>{item.description}</p>
              </div>
              {index === 0 || index === 2? (
                <div className='flex justify-center items-end w-full h-full'>
                    <img src={item.big} alt="Image" />
                </div>): 
              (
                <div className='flex justify-end items-end w-full h-full'>
                  <img src={item.big} alt="Image" />
                </div>
              )
          }
          </div>
          {index === 3? (
            <div className='grid grid-cols-2 gap-5'>
            {item.small.map((smallItem) => (
              <div key={smallItem.id} className='flex flex-col gap-8 border-solid border-[0.5px] rounded-xl border-neutral-400 p-7'>
                <img src={smallItem.img} alt="Image" className='rounded-lg'/>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-2xl font-semibold text-neutral-200'>{smallItem.heading}</h1>
                  <p className='font-mono text-lg font-normal text-neutral-400'>{smallItem.description}</p>                  
                </div>
              </div>
            ))}
          </div>
          ): 
          (<div className='grid grid-cols-3 gap-5'>
            {item.small.map((smallItem) => (
              <div key={smallItem.id} className='flex flex-col gap-8 border-solid border-[0.5px] rounded-xl border-neutral-400 p-7'>
                <img src={smallItem.img} alt="Image" className='rounded-lg'/>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-2xl font-semibold text-neutral-200'>{smallItem.heading}</h1>
                  <p className='font-mono text-base font-normal text-neutral-400'>{smallItem.description}</p>                  
                </div>
              </div>
            ))}
          </div>)
          }
        </div>
      ))}
    </div>
  )
}
