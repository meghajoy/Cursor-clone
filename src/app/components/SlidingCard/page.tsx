import Contents from "@/app/content/contents.json"
export default function SlidingCard() {
    const details = Contents.SlidingCards?.Slider1;
  return (
    <div>
        {details.map((item) =>(
            <div key={item.id}>
                <p>{item.feedback}</p>
                <div>
                    <img src={item.img} alt="Profile" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.job}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
