const load_of_api_1=()=>{

    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(Response=>Response.json())
    .then(data=>work_with_buttons(data.data))

}

const work_with_buttons=(data_array)=>{

for(num of data_array){
    const div = document.createElement("div");
    div.innerHTML=`
 <button class="btn btn-outline btn-primary" onclick="buttons_click_work(${num.level_no})"><img src="/B11-A6-English-Janala/assets/fa-book-open.png"  alt="">Lesson-${num.level_no}</button>
    `
    buttons_section.append(div);
}


}

const buttons_click_work=(id)=>{

    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>display_cards(data.data))


}

const display_cards=(data_word_array)=>{

     const btnwork = document.getElementById("buttons_work");
     btnwork.innerHTML = ""; 

    for(eatch_data of data_word_array){

        const div = document.createElement("div");

        div.innerHTML=`
    
    <div class="card w-96 bg-base-100 card-xl shadow-sm">
                <div class="card-body flex items-center">
                    <h1 class="font-bold text-3xl">${eatch_data.word}</h1>
                    <p class="text-base font-medium">Meaning/Pronounciation</p>
                    <p class="text-xl font-semibold">${eatch_data.meaning}</p>
                </div>
                <div class="flex justify-between mx-6 mb-8">
                    
                    <img class="btn bg-white px-0.25 w-12 py-0.25" src="/B11-A6-English-Janala/assets/i_icon.png" alt="">
                    <img class="btn bg-white px-0.25 w-12 py-0.25" src="/B11-A6-English-Janala/assets/sound_icon.png" alt="">
                </div>
    </div>
    `

    btnwork.append(div);

    }
    
    
    
}

load_of_api_1();

