
const Pricing = () => {
  return (
    <div className="my-[80px] mx-[80px]">
        <p className="text-[3rem] mb-[70px] w-[600px] font-bold text-[#E2E2E2]">Discover our pricing and <span className="text-[#FFEE00]"> get started today.</span></p>
        <div>
            <div className="py-9 relative px-[80px]  grid gap-5  text-[#E2E2E2] border border-[#1E1E1E] rounded-2xl font-medium text-[1.2rem] bg-[#080808]">
                <img className="absolute inset-0  scale-y-[1.01]  object-cover" src="https://framerusercontent.com/images/YT41gneC4WgelwuyOrdiwdRkHUI.png" alt="" />
                <div>
                    <div className="border bg-[#0F0F0F] z-10 w-[150px] text-center py-2  border-[#1E1E1E] text-lg rounded-[30px]">2 spots left</div>
                </div>
                <div>
                  <p className="text-[3rem] font-medium text-[#FFEE00]">Monthly</p>
                  <p className="text-[3rem] mb-[70px] font-medium text-[#E2E2E2]">$1,990<span className="text-lg font-normal">/mo</span></p>
                </div>
                <div>
                  <p className="text-[#E2E2E2] text-lg w-[350px]">Ideal for startups with an ongoing demand for design services.</p>
                </div>
                <div className="flex gap-4">
                  <div className='text-[#000000] py-2 px-5 bg-[#FFEE00] text-xl rounded-xl cursor-pointer'>Subscribe</div>
                  <div className='text-[#E2E2E2] py-2 px-5 bg-[#070707] border border-[#232323] text-xl rounded-xl cursor-pointer'>Book a call</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing