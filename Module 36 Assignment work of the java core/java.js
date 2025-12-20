const load_of_api_1=()=>{

    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(Response=>Response.json())
    .then(data=>work_with_buttons(data.data))

}

const work_with_buttons=(data_array)=>{

for(num of data_array){
    const div = document.createElement("div");
    div.innerHTML=`
 <button class="btn btn-outline btn-primary"><img src="/B11-A6-English-Janala/assets/fa-book-open.png" onclick="buttons_click_work(${num.level_no})" alt="">Lesson-${num.level_no}</button>
    `
    buttons_section.append(div);
}


}

const buttons_click_work=(id)=>{



}

const display_cards=()=>{

    
}

load_of_api_1();

