import Header from "@/app/components/Header/page"
import details from "@/app/content/contents.json"
import Footer from "@/app/components/Footer/page"
export default function Blogs() {
  return (
    <div>
        <Header/>
        <div className="flex flex-col py-8 px-4">
            <div className="flex flex-col items-start gap-2 py-12 ">
                <h1 className="font-bold h-15 text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Blog</h1>
                <p className="font-mono font-medium text-[24px] text-neutral-200 text-center">Compiled notes from the team</p>
            </div>
            <div className="flex flex-col gap-4 py-3">
                <h2 className="text-4xl font-semibold text-neutral-200">Featured</h2>
                <a href="#" className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-900 w-fit flex flex-col gap-16 border-solid border-[0.5px] border-neutral-500 rounded-xl p-6 hover:border-neutral-100">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-neutral-200 font-bold text-3xl">Character Prefix Conditioning</h1>
                            <p className="font-mono text-neutral-200 font-regular text-lg">A clever algorithm for more accurate code completion sampling.</p>
                        </div>
                        <div className="flex gap-6 items-center ">
                            <img src="/img/profile/jacob.avif" alt="Jacob" className="size-12 rounded-xl"/>
                            <div className="flex flex-col items-start">
                                <p className="font-mono text-neutral-300 font-medium text-lg">By Jacob</p>
                                <p className="font-mono text-neutral-300 font-light text-base">2 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-900 w-fit flex flex-col gap-16 border-solid border-[0.5px] border-neutral-500 rounded-xl p-6 hover:border-neutral-100">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-neutral-200 font-bold text-3xl">Inference Characteristics of Llama</h1>
                            <p className="font-mono text-neutral-200 font-regular text-lg">A primer on inference math and an examination of the surprising costs of Llama.</p>
                        </div>
                        <div className="flex gap-6 items-center ">
                            <img src="/img/profile/aman.avif" alt="Aman" className="size-12 rounded-xl"/>
                            <div className="flex flex-col items-start">
                                <p className="font-mono text-neutral-300 font-medium text-lg">By Aman</p>
                                <p className="font-mono text-neutral-300 font-light text-base">19 minutes read</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="px-4 mx-auto flex flex-col gap-4 pb-60">
            <h2 className="text-4xl font-semibold text-neutral-200">All posts</h2>
            <a href="/Pages/Blogs/BLog" className="grid grid-cols-3 gap-5 ">
                {
                    details.Contents.Blog.map((item) =>(
                        <div key={item.id} className="bg-neutral-900 border-solid border-[0.5px] border-neutral-500 rounded-xl hover:border-neutral-100">
                            <div className="p-6 flex flex-col gap-16">
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-xl text-neutral-200">{item.heading}</h2>
                                    <p className="font-mono text-neutral-400">{item.content}</p>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <img src={item.img} alt="Profile" className="size-14 rounded-lg"/>
                                    <div className="flex flex-col">
                                        <p className="font-mono text-neutral-200 text-base font-medium">By {item.name}</p>
                                        <p className="font-mono text-neutral-400 text-base font-normal">{item.time} minutes read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </a>
        </div>
        <Footer/>
    </div>
  )
}
