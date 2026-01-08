import { use } from "react"
import Friends from "./friend";


export default function Users2({pops2}){

    //use is needed for the api function call
     const use_pops2 =use(pops2);

     

    return(
        <div className="P_s_css">
            <p>Users2: {use_pops2.length}</p>

        {
            use_pops2.map(use_pops2=><Friends key={use_pops2.id} pops={use_pops2}></Friends>)
        }

        </div>
    )


}