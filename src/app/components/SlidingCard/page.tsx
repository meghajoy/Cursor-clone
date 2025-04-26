export default function SlidingCard({data}) {
  return (
    <div>
        {data?.map((item) =>(
            <div className="border-[0.5px] border-solid border-neutral-400 rounded-xl p-4 mb-4">
            <div key={item.id} className="flex flex-col justify-between">
                <p className="font-mono text-neutral-300 font-medium text-lg">{item.feedback}</p>
                <div className="flex gap-4">
                    <img src={item.img} alt="Profile" className="size-4 rounded-full"/>
                    <div className="flex flex-col">
                        <p className="font-mono text-neutral-300 font-medium text-lg">{item.name}</p>
                        <p className="font-mono text-neutral-300 font-normal text-lg">{item.job}</p>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}
