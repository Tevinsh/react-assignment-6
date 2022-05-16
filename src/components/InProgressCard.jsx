import { useDispatch, useSelector } from "react-redux";
import { addEvaluation } from "../store/actions/evaluationActions";
import { updateInProgress } from "../store/actions/inProgressActions";

const InProgressCard = () =>{
    const inProgress = useSelector((state)=>state.inProgress.inProgress);
    const dispatch = useDispatch();
    const handleEvaluate = (event) => {
        const index = event.target.value;
        const data = inProgress[index];
        let newInProgress = [...inProgress];
        delete newInProgress[index];
        newInProgress = newInProgress.filter(d=>d);
        dispatch(addEvaluation(data));
        dispatch(updateInProgress(newInProgress));
    }
    return (
        <div className="rounded-md border-solid border px-2 w-64 mr-4 h-full">
            <h1 className="font-semibold py-4 px-2 bg-amber-400 rounded-md my-2">In Progess</h1>
            {
                inProgress.map((inProgress,index)=>{
                    return (
                        <div key={index} className="rounded-md border p-2 mb-2">
                            <p className="py-3">{inProgress}</p>
                            <button onClick={handleEvaluate} className="bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-1 px-4 rounded" value={index}>Evaluate</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InProgressCard;