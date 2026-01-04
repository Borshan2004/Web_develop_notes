//when we take a function as the parameter of the another  function then it is called the call back function

function gotok(partri,name){

    partri(name);

}

const parti1= function(name){

    console.log("Name of partri:",name);
}

const parti2= function(name){

    console.log("Name of partri:",name);
}

//here we are passing parti1 and parti 2 function as  a parameter of the gotok function
gotok(parti1,"Borno");
gotok(parti2,"hans");


