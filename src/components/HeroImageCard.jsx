/* eslint-disable react/prop-types */

const HeroImageCard = ({imgSrc}) => {
  return (
    <div className=' rounded-xl w-[900px] h-[750px] border border-[#1A1A1A]  '>
        <img className="object-cover w-[1050px] h-[750px] rounded-xl" src={imgSrc} alt="" />
    </div>
  )
}

export default HeroImageCard