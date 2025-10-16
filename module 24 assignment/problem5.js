function calculateWatchTime(array){

    let total=0;
    for(let i=0;i<array.length;i++){
        
        total+=array[i];

    }

    const hour = Math.floor(total/3600);
    const min = Math.floor((total%3600)/60);
    const sec = total%60;

    return obj={
        hour: hour,
        min :min,
        sec :sec,
    }

}

const array =[100, 3800];
const res = calculateWatchTime(array);
console.log(res);