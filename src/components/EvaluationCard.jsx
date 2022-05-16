import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { setDone } from "../store/actions/doneActions";
import { updateEvaluation } from "../store/actions/evaluationActions";

const MySwal = withReactContent(Swal);

const EvaluationCard = () => {
    const evaluation = useSelector((state)=>state.evaluation.evaluation)
    const dispatch = useDispatch();
    const handleDone = (event) =>{
        const index= event.target.value;
        const data = evaluation[index];
        let newEvaluation = [...evaluation];
        delete newEvaluation[index];
        newEvaluation = newEvaluation.filter(b=>b);
        dispatch(setDone(data));
        dispatch(updateEvaluation(newEvaluation));

        MySwal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'you have done '+ data,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className="rounded-md border-solid border px-2 w-64 mr-4 h-full">
            <h1 className="font-semibold py-4 px-2 bg-cyan-400 rounded-md my-2">Evaluation</h1>
            {
                evaluation.map((evaluation,index)=>{
                    return (
                        <div key={index} className="rounded-md border p-2 mb-2">
                            <p className="py-3">{evaluation}</p>
                            <button onClick={handleDone} className="bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-1 px-4 rounded" value={index}>DONE</button>
                        </div>
                    )
                })
            }
        </div>  
    )
}

export default EvaluationCard;