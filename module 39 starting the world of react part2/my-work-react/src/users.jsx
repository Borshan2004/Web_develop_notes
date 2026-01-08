import { use } from "react"

export default function Users({pops}){

    const users = use(pops);
    console.log(users);

    return(
        <div className="P_s_css">
            <p>Users: {users.length}</p>
        </div>
    )


}