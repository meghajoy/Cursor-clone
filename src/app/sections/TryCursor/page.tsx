// // export default function Try() {
// //   return (
// //     <div className="flex mx-auto px-4 pt-68 py-24 lg:justify-between items-center md:flex-wrap-reverse md:justify-center">
// //       <div className="flex flex-col gap-4 md:items-center justify-center">
// //         <h1 className="font-bold bg-linear-to-b from-neutral-200 to-neutral-300 bg-clip-text text-transparent lg:text-[110px] sm:text-5xl">Try Cursor Now</h1>
// //         <a href="#">
// //             <div className="flex p-1 items-center border-[0.5px] border-stone-100 rounded-xl w-fit">
// //                 <div className="flex gap-4 items-center bg-stone-100 rounded-lg px-4 py-3">
// //                     <img src="https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp" alt="Image" className="size-8"/>
// //                     <p className="font-mono font-semibold uppercase text-stone-900">Download for free</p>  
// //                 </div>
// //             </div>
// //         </a>
// //       </div>
// //       <img src="/img/logo-dark.avif" alt="Image" className="w-[381px] h-[439.9px]"/>
// //     </div>
// //   )
// // }

// export default function Try() {
//   return (
//     <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 py-24 gap-12">
//       {/* Left Content */}
//       <div className="flex flex-col gap-6 md:items-center md:text-center lg:items-start lg:text-left">
//         <h1 className="font-bold bg-gradient-to-b from-neutral-200 to-neutral-300 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-[110px] leading-tight">
//           Try Cursor Now
//         </h1>
//         <a href="#">
//           <div className="flex p-1 items-center border border-stone-100 rounded-xl w-fit">
//             <div className="flex gap-4 items-center bg-stone-100 rounded-lg px-4 py-3">
//               <img
//                 src="https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp"
//                 alt="Download"
//                 className="size-8"
//               />
//               <p className="font-mono font-semibold uppercase text-stone-900">
//                 Download for free
//               </p>
//             </div>
//           </div>
//         </a>
//       </div>

//       {/* Image */}
//       <img
//         src="/img/logo-dark.avif"
//         alt="Cursor logo"
//         className="w-[280px] h-auto sm:w-[320px] md:w-[360px] lg:w-[381px] lg:h-[439.9px]"
//       />
//     </div>
//   );
// }
export default function Try() {
  return (
    <div className="flex flex-col-reverse md:flex-row mx-auto px-4 pt-68 py-24 lg:justify-between items-center md:items-center">
      <div className="flex flex-col gap-4 md:items-start justify-center text-center md:text-left">
        <h1 className="font-bold bg-linear-to-b from-neutral-200 to-neutral-300 bg-clip-text text-transparent lg:text-[110px] sm:text-5xl">
          Try Cursor Now
        </h1>
        
        <a href="#">
          <div className="relative group p-1 items-center border-[0.5px] border-stone-100 rounded-xl w-fit mx-auto md:mx-0">
            {/* Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-0 group-hover:opacity-100 transition duration-300 blur-md rounded-lg z-0 pointer-events-none 
                bg-gradient-to-tr from-pink-400 via-purple-500 to-pink-400" />
            
            {/* Actual Button */}
            <div className="relative z-10 flex gap-4 items-center bg-stone-100 rounded-lg px-4 py-3">
              <img src="https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp" alt="Image" className="size-8"/>
              <p className="font-medium text-stone-900">Download for free</p>  
            </div>
          </div>
        </a>
      </div>
      
      <img src="/img/logo-dark.avif" alt="Image" className="w-[381px] h-[439.9px] mx-auto md:mx-0" />
    </div>
  )
}
