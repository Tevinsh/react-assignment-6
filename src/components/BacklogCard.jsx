import { useDispatch, useSelector } from "react-redux";
import { updateBacklog } from "../store/actions/backlogActions";

const BacklogCard = () => {
    const backlog = useSelector((state)=>state.backlog.backlog);
    const dispatch = useDispatch();
    const handleTake = (event) =>{
        const index = event.target.value;
        const takeBacklog = backlog[index];
        let newBacklog = [...backlog];
        delete newBacklog[index]
        newBacklog = newBacklog.filter(b=>b);
        dispatch({type:'addInProgress',payload:takeBacklog})
        dispatch(updateBacklog(newBacklog))
    }
    return (
        <>
        <div className="rounded-md border-solid border px-2 w-64 mr-4 h-full">
            <h1 className="font-semibold py-4 px-2 bg-slate-400 rounded-md my-2">Backlog</h1>
            {
            backlog.map((backlog,index)=>{
                    return (
                        <div key={index} className="rounded-md border p-2 mb-2">
                            <p className="py-3">{backlog}</p>
                            <button onClick={handleTake} className="bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-1 px-4 rounded" value={index}>Take</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default BacklogCard;