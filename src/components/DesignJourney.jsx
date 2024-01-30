/* eslint-disable react/prop-types */
 const JourneyCard = ({message}) => {
    return (
        <div className="p-5 text-white border border-[#1E1E1E] rounded-2xl font-medium text-[1.2rem] bg-[#080808]">
            <p>{message}</p>
        </div>
    );
}
const DesignJourney = () => {
  return (
    <div className="mt-[100px] flex gap-5 mx-[80px]">
        <div className="space-y-5">
            <p className="text-[3rem] w-[650px] font-bold text-white">Your design journey in <span className="text-[#FFEE00]">three effortless steps.</span></p>
            <JourneyCard message={"Subscribe and get immediate access to an exclusive Slack channel, connecting you and your team with a dedicated designer."} />
            <JourneyCard message={"Start chatting about the work you need, and we’ll get started right away."} />
            <JourneyCard message={"Start chatting about the work you need, and we’ll get started right away."} />
        </div>
        <div className="border border-[#1E1E1E] rounded-2xl">
            <img className="rounded-2xl object-cover h-full" src="https://framerusercontent.com/images/7OgwUsL44yC6xmtycyE4rn9ZSX8.svg" alt="" />
        </div>
    </div>
  )
}

export default DesignJourney