import Header from "@/app/components/Header/page"
import details from "@/app/content/contents.json"
import Footer from "@/app/components/Footer/page"

export default function Blogs() {
  return (
    <div>
      <Header />
      <div className="flex flex-col py-8 px-4 md:px-6 lg:px-16">
        <div className="flex flex-col items-start gap-2 py-12">
          <h1 className="font-bold h-15 text-3xl md:text-4xl lg:text-5xl bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="font-mono font-medium text-lg md:text-xl lg:text-2xl text-neutral-200 text-left">
            Compiled notes from the team
          </p>
        </div>

        <div className="flex flex-col gap-6 py-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-200">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="bg-neutral-900 w-full flex flex-col gap-12 md:gap-16 border border-neutral-500 rounded-xl p-6 hover:border-neutral-100 transition">
              <div className="flex flex-col gap-4">
                <h1 className="text-neutral-200 font-bold text-2xl md:text-3xl">
                  Character Prefix Conditioning
                </h1>
                <p className="font-mono text-neutral-200 font-normal text-base md:text-lg">
                  A clever algorithm for more accurate code completion sampling.
                </p>
              </div>
              <div className="flex gap-4 md:gap-6 items-center">
                <img src="/img/profile/jacob.avif" alt="Jacob" className="size-10 md:size-12 rounded-xl" />
                <div className="flex flex-col items-start">
                  <p className="font-mono text-neutral-300 font-medium text-base md:text-lg">By Jacob</p>
                  <p className="font-mono text-neutral-300 font-light text-sm md:text-base">2 minutes read</p>
                </div>
              </div>
            </a>

            <a href="#" className="bg-neutral-900 w-full flex flex-col gap-12 md:gap-16 border border-neutral-500 rounded-xl p-6 hover:border-neutral-100 transition">
              <div className="flex flex-col gap-4">
                <h1 className="text-neutral-200 font-bold text-2xl md:text-3xl">
                  Inference Characteristics of Llama
                </h1>
                <p className="font-mono text-neutral-200 font-normal text-base md:text-lg">
                  A primer on inference math and an examination of the surprising costs of Llama.
                </p>
              </div>
              <div className="flex gap-4 md:gap-6 items-center">
                <img src="/img/profile/aman.avif" alt="Aman" className="size-10 md:size-12 rounded-xl" />
                <div className="flex flex-col items-start">
                  <p className="font-mono text-neutral-300 font-medium text-base md:text-lg">By Aman</p>
                  <p className="font-mono text-neutral-300 font-light text-sm md:text-base">19 minutes read</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-16 mx-auto flex flex-col gap-4 pb-40">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-200">All posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            details.Contents.Blog.map((item) => (
              <a key={item.id} href="/Pages/Blogs/BLog" className="bg-neutral-900 border border-neutral-500 rounded-xl hover:border-neutral-100 transition">
                <div className="p-5 md:p-6 flex flex-col gap-12 md:gap-16">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg md:text-xl text-neutral-200">{item.heading}</h2>
                    <p className="font-mono text-neutral-400 text-sm md:text-base">{item.content}</p>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-center">
                    <img src={item.img} alt="Profile" className="size-12 md:size-14 rounded-lg" />
                    <div className="flex flex-col">
                      <p className="font-mono text-neutral-200 text-sm md:text-base font-medium">By {item.name}</p>
                      <p className="font-mono text-neutral-400 text-sm md:text-base font-normal">{item.time} minutes read</p>
                    </div>
                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
