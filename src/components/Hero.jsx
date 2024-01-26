
const Hero = () => {
  return (
    <div className="h-screen  relative overflow-x-hidden overflow-y-hidden">
        <video className="absolute scale-x-[1.9] scale-y-[1.7] -z-10 object-center h-[100%] w-[100%]  object-cover inset-0" src="https://framerusercontent.com/assets/Us8p6iJDobKmLxWxqT3XtWtijqU.mp4" autoPlay muted></video>
        <div className="">
            <div className="flex flex-col mt-[80px]">
                <span className="text-[#EDEDED] font-semibold lg:leading-[6.5rem] text-[5rem]">Your all-in-one</span>
                <span className="text-[#D4D4D4] font-semibold lg:leading-[6.5rem] text-[5rem]">design solution under </span>
                <span className="text-[#FFEE00] font-semibold lg:leading-[6.5rem] text-[5rem]">one subscription.</span>
            </div>
            
            <div className="mt-[80px]  flex justify-between">
                <div className='flex items-center max-w-[500px]'>
                    <img className="h-[80px] w-[100px]" src="https://framerusercontent.com/images/a418tl2e8DFKkf6sOn8l2YVarnQ.png?scale-down-to=512" alt="" />
                    <div className="flex flex-col gap-3">
                        <p className="text-[#C1C1C1] text-balance text-[1.2rem] font-medium">“They absolutely crush all requests. Every design has been spot on!”</p>
                        <p className="text-[#6E6E6E]">Octav Cretu, Managing Partner @ Nexus Media</p>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <p className="text-[#C1C1C1] text-end text-balance text-[1.5rem] font-medium">Artone is a design agency that offers world-class, unlimited design for a flat monthly price.</p>
                    <div className="flex gap-3 justify-end mt-5">
                        <button className="py-3 px-8 text-[1.7rem] border-t-[0.005px] border-[#C1C1C1] font-medium rounded-2xl bg-[#FFEE00]">See plans</button>
                        <button className="py-3 px-8 text-[1.7rem] font-medium text-[#C1C1C1] rounded-2xl border border-[#353535] bg-[#0C0C0C]">2 spots left</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Hero