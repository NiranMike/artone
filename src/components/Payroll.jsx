/* eslint-disable react/prop-types */

const Card = ({title, message}) => {
    return(
        <div className="space-y-3 max-w-[400px]">
            <p className="text-white font-medium text-xl">{title}</p>
            <p className="text-[#757575] text-lg">{message}</p>
        </div>
    )
}


const Payroll = () => {
  return (
    <div className="grid bg-[#0D0D0D] my-12 rounded-3xl border border-[#272727] px-[200px] py-[100px] justify-center gap-y-[80px] mx-[80px] grid-cols-2">
        <Card title={"A “payroll” that makes sense"} message={"Say goodbye to absurd salaries, bonuses, vacations, and sick days."}/>
        <Card title={"Few available spots"} message={"We keep our clients list short so you get that special treatment."}/>
        <Card title={"Unlimited brands"} message={"Only one monthly fee for streamlining your designs across all your businesses."}/>
        <Card title={"No (useless) meetings"} message={"We handle everything efficiently on Slack, in your dedicated chat – no meetings to waste your time."}/>
        <Card title={"No need for contracts"} message={"Begin immediately, retain full copyright control over your designs, and forget about tricky contract terms."}/>
        <Card title={"Tools you know and love"} message={"We use Figma, the Adobe Creative Suite, Slack, and Stripe to deliver you the best results."}/>
    </div>
  )
}

export default Payroll