export default function Friends({key,pops}){

    const{name,email,phone,id}=pops;

    return(
        <div className="P_s_css">
            <p>Name: {name}</p>
            <p>EmailL {email}</p>
            <p>Phone: {phone}</p>
            <p>Key:{id}</p>
        </div>
    )


}