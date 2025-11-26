//in the promise there is a resolve and reject
const featch = ()=>{
    return new Promise((resolve,reject)=>{
        const status = true;

        if(status){
            const demoData={
                json:()=>Promise.resolve({name:"borshan"})
            }
            resolve(demoData);
        }
        else{
            reject("here is a server problem");
        }
    })
}

featch()
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))