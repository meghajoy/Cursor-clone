import features from '@/app/content/contents.json'
export default function FeatureCard() {
  return (
    <div className='px-4 mx-auto py-16'>
      {features.Contents.FeatureCards.map((item) => (
        <div key={item.id} className='flex flex-col gap-10'>
          <div className="flex rounded-xl px-4 bg-[url('/img/gradient.avif')] mx-auto bg-cover bg-center w-fit h-[632px]">
              <div className='flex flex-col items-start justify-end w-[50%] p-10 gap-8'>
                <h1 className='text-5xl font-semibold text-neutral-200'>{item.heading}</h1>
                <p className='font-mono text-md font-normal text-neutral-200'>{item.description}</p>
              </div>
              <div className='flex justify-end items-end w-[50%]'>
                <img src={item.big} alt="Image" />
              </div>
          </div>
          <div className='flex gap-5'>
            {item.small.map((smallItem) => (
              <div key={smallItem.id} className='flex flex-col border-solid border-[0.5px] rounded-lg border-neutral-400'>
                <img src={smallItem.img} alt="Image" />
                <h1 className='text-xl font-medium text-neutral-200'>{smallItem.heading}</h1>
                <p className='font-mono text-sm font-normal text-neutral-200'>{smallItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
