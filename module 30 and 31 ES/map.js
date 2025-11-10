//map always return a array

const number_arr=[1,2,3,4,5,6];

const tmp=[];

for(let i=0;i<number_arr.length;i++){

    const element= number_arr[i];
    const sum=element+1;
    tmp.push(sum);
}

console.log(tmp);

//instead of doing a long code we can use the map

const map_array = number_arr.map(element=>{
    return element+1;
})

console.log(map_array);





const friends=["Borshan","kaml","rahim"];

for(let i=0;i<friends.length;i++){

    const elements=friends[i];
    console.log(elements);

}

//instead of doning like this we can use the map

const map_new_array=friends.map((elementes,index)=>{
    console.log(index);
    return elementes;
})

console.log(map_new_array);