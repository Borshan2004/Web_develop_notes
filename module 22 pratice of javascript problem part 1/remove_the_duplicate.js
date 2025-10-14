

function remove_duplicate(arr){
    let without_duplicate=[];
    for(const i of arr){
        if(without_duplicate.includes(i)===false){
            without_duplicate.push(i);
        }
    }
    return without_duplicate;
}


arr = ['hasan','kamal','rafiq','borshan','afadf','borshan'];

const ans = remove_duplicate(arr);
console.log(ans);

