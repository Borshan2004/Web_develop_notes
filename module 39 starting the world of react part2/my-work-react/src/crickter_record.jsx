import { useState } from "react"

export default function Player_Score(){

    //this is the main thing of this code
    const[runs,setRuns] = useState(0);
    const[six_call,setSix_call]=useState(0);

    const onclick_single=()=>{
        const new_runs_1=runs+1;
        setRuns(new_runs_1);
    }

    const onclick_four=()=>{
        const new_runs_2=runs+4;
        setRuns(new_runs_2);
    }

    const onclick_six=()=>{
        const new_runs_3=runs+6;
        const six_hit = six_call+1;
        setSix_call(six_hit);
        setRuns(new_runs_3);
    }

    return(
        
         <div className="P_s_css">
            <h3>Player name: Bangladeshi Bastsman Score</h3>
            {
                runs>50 && <p>half cencury</p>
            }
            <h2>Score: {runs}</h2>
            <h4>six hitted: {six_call}</h4>
            <div className="btn_css">
            <button onClick={onclick_single}>Single</button>
            <button onClick={onclick_four}>Four</button>
            <button onClick={onclick_six}>Six</button>
            </div>
            
        </div>
    )
}