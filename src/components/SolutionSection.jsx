/* eslint-disable react/prop-types */

const Card = ({message}) => {
    return (
        <div className="px-5 py-12 text-white border border-[#1E1E1E] rounded-2xl font-medium text-[1.2rem] bg-[#111111]">
            <p className="text-center">{message}</p>
        </div>
    );
}

const SolutionSection = () => {
  return (
    <div className="mt-[100px] mx-[80px]">
        <p className="text-[3rem] mb-[70px] font-bold text-white"> <span className="text-[#FFEE00]">The solution </span> to all your design needs.</p>
        <div className="py-9 px-[80px] items-center justify-center grid gap-5 grid-cols-4 text-white border border-[#1E1E1E] rounded-2xl font-medium text-[1.2rem] bg-[#080808]">
            <Card message={"Logos"}/>
            <Card message={"Brand Guidelines"}/>
            <Card message={"Landing Pages & Web"}/>
            <Card message={"Digital Products"}/>
            <Card message={"Mobile Apps"}/>
            <Card message={"Social Media"}/>
            <Card message={"Pitch Decks"}/>
            <Card message={"Print Design"}/>
            <Card message={"Sports Graphics"}/>
            <Card message={"Email Templates"}/>
        </div>
    </div>
  )
}

export default SolutionSection