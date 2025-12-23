const load_of_api_1 = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(Response => Response.json())
        .then(data => work_with_buttons(data.data))

}

const work_with_buttons = (data_array) => {

    for (num of data_array) {
        const div = document.createElement("div");
        div.innerHTML = `
 <button id="${"btn_n"+num.level_no}" class="btn btn-outline btn-primary" onclick="buttons_click_work(${num.level_no})"><img src="/B11-A6-English-Janala/assets/fa-book-open.png"  alt="">Lesson-${num.level_no}</button>
    `
        buttons_section.append(div);
    }


}

const buttons_click_work = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(Response => Response.json())
        .then(data =>{

            remove_bg_button();
            const clickhere = document.getElementById("btn_n"+id);
            clickhere.classList.add("active");

            display_cards(data.data)

        } )


}



const display_cards = (data_word_array) => {

    const btnwork = document.getElementById("buttons_work");
    btnwork.innerHTML = "";


    const btnwork3 = document.getElementById("button_work_3");
    btnwork3.innerHTML = "";

    if (data_word_array.length == 0) {


        document.getElementById("button_work_2").classList.add("hidden");

        btnwork3.innerHTML = `
        
          <div class="flex flex-col items-center justify-center pb-20 py-6">
                <div><img src="/B11-A6-English-Janala/assets/alert-error.png" alt=""></div>
                <p class="text-xs">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <p class="text-2xl font-semibold">নেক্সট Lesson এ যান</p>
          </div>

        `

        return
    }

    for (eatch_data of data_word_array) {



        const div = document.createElement("div");

        div.innerHTML = `
    
    <div class="card w-96 bg-base-100 card-xl shadow-sm">
                <div class="card-body flex items-center">
                    <h1 class="font-bold text-3xl">${eatch_data.word}</h1>
                    <p class="text-base font-medium">Meaning/Pronounciation</p>
                    <p class="text-xl font-semibold">${eatch_data.meaning}</p>
                </div>
                <div class="flex justify-between mx-6 mb-8">
                    
                    <img onclick="button_click_work_2_number(${eatch_data.id})" class="btn bg-white px-0.25 w-12 py-0.25" src="/B11-A6-English-Janala/assets/i_icon.png" alt="">
                    <img class="btn bg-white px-0.25 w-12 py-0.25" src="/B11-A6-English-Janala/assets/sound_icon.png" alt="">
                </div>
    </div>
    `

        btnwork.append(div);

        document.getElementById("button_work_2").classList.add("hidden");

    }



}

const button_click_work_2_number = (id) => {

    const url = `https://openapi.programming-hero.com/api/word/${id}`

    fetch(url)
        .then(Response => Response.json())
        .then(data => {

            modal_display(data.data)
        })
}

const modal_display=(data_array)=>{

    document.getElementById("my_modal_1").showModal();
    const container_of_modal = document.getElementById("modal_contains");

    container_of_modal.innerHTML=`
    
                <div>
                   <h3 class="text-3xl font-bold">${data_array.word}:(${data_array.pronunciation})</h3>
                </div>
                <div>

                    
                <p class="text-base font-bold">Meaning </p>
                <p>${data_array.meaning}</p>

                </div>
                <div>
                       <p class="text-base font-bold">Example</p>
                       <p>${data_array.sentence}</p>
                </div>

                <div>
                    <p class="font-bold text-sm">সমার্থক শব্দ গুলো</p>
                    <div>
                        <button class="btn bg-[#edf7ff]">${data_array.synonyms[0]}</button>
                        <button class="btn bg-[#edf7ff]">${data_array.synonyms[1]}</button>
                        <button class="btn bg-[#edf7ff]">${data_array.synonyms[2]}</button>
                    </div>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn btn-primary"> Complete Learning</button>
                    </form>
                </div>

    `


}


const click_button_then_go_another_page_freaskques=()=>{

    document.getElementById("hiddin_all_body").classList.remove("hidden");
    document.getElementById("head_sec").classList.add("hidden");
    document.getElementById("loc_voc").classList.add("hidden");
    document.getElementById("fre_ask_ques").classList.remove("hidden");
    // document.getElementById("fre_ask_ques").scrollIntoView({ behavior: "smooth" });


}

const click_button_then_go_another_page_learnvocablu=()=>{

    document.getElementById("hiddin_all_body").classList.remove("hidden");
    document.getElementById("head_sec").classList.add("hidden");
    document.getElementById("fre_ask_ques").classList.add("hidden");
    document.getElementById("loc_voc").classList.remove("hidden");
    // document.getElementById("learn_voc").scrollIntoView({ behavior: "smooth" });


}

const click_button_then_go_another_page_logout=()=>{

    document.getElementById("hiddin_all_body").classList.remove("hidden");
    document.getElementById("head_sec").classList.remove("hidden");
    document.getElementById("fre_ask_ques").classList.add("hidden");
    document.getElementById("loc_voc").classList.add("hidden");
    // document.getElementById("learn_voc").scrollIntoView({ behavior: "smooth" });


}


const remove_bg_button = () => {
    //by clicking the button we store the active for the one time and crate the active button array
    const activebutton = document.getElementsByClassName("active");

    //when ever in the buttons class there will see a active class then it remove that 
    for (btn of activebutton) {


        btn.classList.remove("active");

    }

}

const login_logout=()=>{

  const input1 = document.getElementById("input_1");
  const input2 = document.getElementById("input_2");
  const btn_input = document.getElementById("btn_input_1_2");


  btn_input.addEventListener("click", () => {
    const value1 = input1.value.trim();   // read input
    const value2 = input2.value.trim();   // read input

  

    if(value1=="English"&&value2==123){


        document.getElementById("hiddin_all_body").classList.remove("hidden");
        document.getElementById("head_sec").classList.add("hidden");
        document.getElementById("fre_ask_ques").classList.add("hidden");
        

        alert("login is sucess full");

    }

 

    input1.value1 = "";   
    input2.value2 = "";   
     
  });


}

load_of_api_1();
login_logout();
