/* eslint-disable react/no-unescaped-entities */
import HeroImageCard from "./HeroImageCard"

const OurWork = () => {
  return (
    
        <div className="  mt-10 ">
            
            <div className="flex overflow-x-scroll gap-10 overflow-y-hidden xl:px-[80px] ">
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/z9yot9v28Irh7oCr7PUEalkodw.jpg?scale-down-to=2048"} />
                </div>
                
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/Bq1Q6Wrzl0rAwgHs8W6d2kvPOLo.jpg?scale-down-to=2048"} />
                </div>
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/STXzu1JLodtGIiHUr0MRmmgEQ.jpg?scale-down-to=2048"} />
                </div>
                
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/3AxNWVFkaEcT5Gm86OqMImpXwv8.jpg?scale-down-to=2048"} />
                </div>
                
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/htHEwzuiQ2oaU4LZy13ojHOf8.jpg?scale-down-to=2048"} />
                </div>
                
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/fqjgHhdrqwk1ysrQ4FBG6o76EWU.png?scale-down-to=2048"} />
                </div>
                
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/PsROunJXC6AulqoEz6ZJ9VZdE.jpg?scale-down-to=2048"} />
                </div>
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/JiEgsDq04HOfAh43oVFf2TnM.jpg?scale-down-to=2048"} />
                </div>
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/VIWcQxKFHsDXCNEx42yL6WAY.jpg?scale-down-to=2048"} />
                </div>
                <div>
                    <HeroImageCard imgSrc={"https://framerusercontent.com/images/Uw5b5bgAL6xhkuZtB8d1gvv87sE.jpg?scale-down-to=2048"} />
                </div>
            </div>
            <div className="lg:px-[80px] mt-10 flex items-center">
                <p className="text-2xl   text-[#EDEDED]">Partnered with global industry leaders. <span className="text-[#FFEE00]">You're in good hands.</span></p>
                <p className="text-[#818181] w-full text-end ">Drag horizontally to see our work</p>
            </div>
            
        </div>

    
  )
}

export default OurWork