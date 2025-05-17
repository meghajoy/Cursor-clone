import features from '@/app/content/contents.json'

export default function FeatureCard() {
  return (
    <div className='px-4 md:px-6 lg:px-16 mx-auto'>
      {features.Contents.FeatureCards.map((item, index) => (
        <div key={item.id} className='flex flex-col gap-10 py-16'>
          <div className="flex flex-col lg:flex-row rounded-xl bg-[url('/img/gradient.avif')] mx-auto bg-cover bg-center w-full h-auto lg:h-[632px]">
            <div className='flex flex-col items-start justify-end w-full lg:w-[50%] p-6 md:p-10 lg:p-16 gap-6 md:gap-8'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-200'>{item.heading}</h1>
              <p className='font-mono text-sm md:text-base font-normal text-neutral-200'>{item.description}</p>
            </div>
            {index === 0 || index === 2 ? (
              <div className='flex justify-center items-end w-full h-full px-4'>
                <img src={item.big} alt="Image" className='w-full max-w-[600px] object-contain' />
              </div>
            ) : (
              <div className='flex justify-end items-end w-full h-full px-4'>
                <img src={item.big} alt="Image" className='w-full max-w-[600px] object-contain' />
              </div>
            )}
          </div>

          {index === 3 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {item.small.map((smallItem) => (
                <div key={smallItem.id} className='flex flex-col gap-6 md:gap-8 border-solid border-[0.5px] rounded-xl border-neutral-400 p-5 md:p-7'>
                  <img src={smallItem.img} alt="Image" className='rounded-lg w-full' />
                  <div className='flex flex-col gap-3 md:gap-4'>
                    <h1 className='text-xl md:text-2xl font-semibold text-neutral-200'>{smallItem.heading}</h1>
                    <p className='font-mono text-base font-normal text-neutral-400'>{smallItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {item.small.map((smallItem) => (
                <div key={smallItem.id} className='flex flex-col gap-6 md:gap-8 border-solid border-[0.5px] rounded-xl border-neutral-400 p-5 md:p-7'>
                  <img src={smallItem.img} alt="Image" className='rounded-lg w-full' />
                  <div className='flex flex-col gap-3 md:gap-4'>
                    <h1 className='text-xl md:text-2xl font-semibold text-neutral-200'>{smallItem.heading}</h1>
                    <p className='font-mono text-sm md:text-base font-normal text-neutral-400'>{smallItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
