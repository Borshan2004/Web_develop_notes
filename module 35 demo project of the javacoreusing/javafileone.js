const loadCatagories=()=>{

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response)=>(response).json())
    .then((data)=>displayCatagories(data.categories))

}

const loadVideo=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response)=>(response).json())
    .then((data)=>displayVideo(data.videos))
}

const displayCatagories=(categories)=>{

    const container =document.getElementById("Container_of_dynamic_button");

    for(let cata of categories){

        const custom_div= document.createElement("div");
        custom_div.innerHTML=`
        <button class="btn  ">${cata.category}</button>
        `;
        container.append(custom_div);

    }

}

const displayVideo=(video)=>{

    const container = document.getElementById("video_section");

    video.forEach((v)=>{

        const vad = document.createElement("div");
        vad.innerHTML=`
        
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
                        <div class="mr-16">
                            <img class="w-6" src="/ph-tube-resources/verified_7641727.png" alt="">

                        </div>
                        

                    </div>
                    <p class="text-sm text-zinc-500">100k views</p>
                </div>
            </div>
        </div>

        `
        container.append(vad);

    })

}

loadCatagories();
loadVideo();