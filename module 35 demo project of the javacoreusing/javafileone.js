const loadCatagories = () => {

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => (response).json())
        .then((data) => displayCatagories(data.categories))

}

const loadVideo = (input= "") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${input}`)
        .then((response) => (response).json())
        .then((data) => {

            remove_bg_button();
            const clickhere = document.getElementById("btn_all");
            clickhere.classList.add("active");
            displayVideo(data.videos)
        })
}


const remove_bg_button = () => {
    //by clicking the button we store the active for the one time and crate the active button array
    const activebutton = document.getElementsByClassName("active");

    for (btn of activebutton) {


        btn.classList.remove("active");

    }

}

const showreallodding = ()=>{
    document.getElementById("real_load").classList.remove("hidden");
    document.getElementById("video_section").classList.add("hidden");
}

const hiderealloading=()=>{
    document.getElementById("real_load").classList.add("hidden");
    document.getElementById("video_section").classList.remove("hidden");
}

const loadofsinglebutton = (id) => {


    const url = `
    https://openapi.programming-hero.com/api/phero-tube/category/${id}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => {

            remove_bg_button();
            const clickhere = document.getElementById(`btn-${id}`);
            clickhere.classList.add("active");

            displayVideo(data.category)
        })

}


const buttonload = (button_id) => {


    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${button_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {

            modal_display(data.video);

        })

}

const modal_display = (vd) => {

    document.getElementById("my_modal_1").showModal();

    const container = document.getElementById("modal_contains");
    container.innerHTML = `
     
     <div class="card bg-base-100 w-auto shadow-sm">
            <figure>
                <img class="h-[150px] w-full object-cover"
                    src="${vd.thumbnail}" alt="Shoes" />
            </figure>
            <div class="card-body flex flex-row gap-4">
                <div>
                    <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                        <img src="${vd.authors[0].profile_picture}" />
                    </div>
                </div>
                </div>
                
                <div>
                    <p class="text-lg font-bold">${vd.title}</p>
                    <div class="flex flex-row ">
                        <p class="text-sm text-zinc-500">${vd.authors[0].profile_name}</p>
                        <div class="mr-16">
                            <img class="w-6" src="/ph-tube-resources/verified_7641727.png" alt="">

                        </div>
                        

                    </div>
                    <p class="text-sm text-zinc-500">100k views</p>
                </div>
            </div>
               <div>
        </div>
        </div>

     `



}

const displayCatagories = (categories) => {

    const container = document.getElementById("Container_of_dynamic_button");

    for (let cata of categories) {

        const custom_div = document.createElement("div");
        custom_div.innerHTML = `
        <button id="btn-${cata.category_id}" class="btn hover:bg-red-400" onclick="loadofsinglebutton(${cata.category_id})">${cata.category}</button>
        `;
        container.append(custom_div);

    }

}

const displayVideo = (video) => {


    showreallodding();

    const container = document.getElementById("video_section");

    container.innerHTML = "";

    //video.length==0 means the array is empty
    if (video.length == 0) {

        container.innerHTML = `
        
        
        <div class="col-span-full flex flex-col justify-center items-center mt-32">
            <img class="w-[200px]" src="/ph-tube-resources/Icon.png" alt="not_here">
            <p class="text-xl font-bold text-center mt-4">Oops!! Sorry, There is no <br>content here</p>
        </div>

        `

        return;
    }

    video.forEach((v) => {

        const vad = document.createElement("div");
        vad.innerHTML = `
        
        <div class="card bg-base-100 w-80 shadow-sm">
            <figure>
                <img class="h-[150px] w-full object-cover"
                    src="${v.thumbnail}" alt="Shoes" />
            </figure>
            <div class="card-body flex flex-row gap-4">
                <div>
                    <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                        <img src="${v.authors[0].profile_picture}" />
                    </div>
                </div>
                </div>
                
                <div>
                    <p class="text-lg font-bold">${v.title}</p>
                    <div class="flex flex-row ">
                        <p class="text-sm text-zinc-500">${v.authors[0].profile_name}</p>
                        ${v.authors[0].verified==true?`<div class="mr-16">
                            <img class="w-6" src="/ph-tube-resources/verified_7641727.png" alt="">

                        </div>`:``}
                        
                        

                    </div>
                    <p class="text-sm text-zinc-500">100k views</p>
                </div>
            </div>
               <div>
        <button  class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onclick="buttonload('${v.video_id}')">Click on the button</button>
        </div>
        </div>

     

        `
        container.append(vad);
        hiderealloading();

    })

}

document.getElementById("search_work").addEventListener("keypress",(e)=>{

    const input = e.target.value;
    loadVideo(input);




})

loadCatagories();
