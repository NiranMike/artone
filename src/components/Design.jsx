/* eslint-disable react/no-unescaped-entities */

const Design = () => {
  return (
    <div className="xl:mx-[80px]">
        <div className="space-y-16">
            <div>
                <p className="text-[3rem] w-[650px] font-bold text-white">Design so good it will make you <span className="text-[#FFEE00]">swipe right.</span></p>
            </div>
            <div className="flex gap-5">
                <div className="py-[30px]  px-[40px] border border-[#1b1b1b] bg-gradient-to-br from-[#020202] via-[#101010] to-[#101010] rounded-[1.5rem]">
                    <p className="text-[#FFEE00] text-[10rem] font-semibold">48h</p>
                    <p className="text-white text-[1.7rem] font-semibold">Lightning speed delivery</p>
                    <p className="text-[#8C8C8C] max-w-[400px] text-[1.2rem]">Make your request, and you'll have it done in around two working days.</p>
                </div>
                <div className="py-[30px] relative flex flex-col gap-[8rem] flex-2 px-[40px] border border-[#1b1b1b] bg-gradient-to-br from-[#020202] via-[#101010] to-[#101010] rounded-[1.5rem]">
                    <img className="absolute inset-0 scale-x-[1.2] scale-y-[1.01]  object-cover" src="https://framerusercontent.com/images/YT41gneC4WgelwuyOrdiwdRkHUI.png" alt="" />
                    <div className="flex gap-3">
                        <img className="w-[140px] z-10" src="https://framerusercontent.com/images/42d5OtV9oEl6FA5WEIMuHsJxMw.png" alt="" />
                        <img className="w-[140px] z-10" src="https://framerusercontent.com/images/d8El51elFf63NLBTQ8n02ZiCjA.png" alt="" />
                        <img className="w-[140px] z-10" src="https://framerusercontent.com/images/R2zUQfjS615rAIgCJ41gWFEk.png" alt="" />
                        <img className="w-[140px] z-10" src="https://framerusercontent.com/images/5oTiGZCfZ6KO1VsTKcs0pflfBPY.png" alt="" />
                        <img className="w-[140px] z-10" src="https://framerusercontent.com/images/Y73QZREO23036r8KmOYtLTzkarE.png" alt="" />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-white text-[1.7rem] font-semibold">Unlimited designs and revisions</p>
                            <p className="text-[#8C8C8C] max-w-[490px] text-[1.3rem]">Request unlimited designs and we will work on them one at a time until you are 100% satisfied.</p>
                        </div>
                        <img className="w-[160px]" src="https://framerusercontent.com/images/kFSCd5rN7NJI6C1rQUwRaWYuA.png?scale-down-to=512" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design