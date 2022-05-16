import { useSelector } from "react-redux";

const DoneCard = () => {
    const done = useSelector((state)=>state.done.done);
    return (
        <div className="rounded-md border-solid border px-2 w-64 mr-4 h-full">
            <h1 className="font-semibold py-4 px-2 bg-emerald-400 rounded-md my-2">Done</h1>
            {
                done.map((done,index)=>{
                    return (
                    <div key={index} className="rounded-md border p-2 mb-2">
                        <p className="py-3">{done}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default DoneCard;