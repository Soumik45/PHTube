

// load categories
const loadcategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=> res.json())
    .then(data=> displaycategories(data.categories))
    .catch(e => console.log(e));



};


//display categories

const displaycategories= (data)=>{
    data.forEach(element => {
        const button = document.createElement("button");

        button.classList = "btn";
        button.innerText = element.category;
        document.getElementById("catsec").append(button);


       // console.log(element.category)
    });

}

loadcategories();



const loadVideos = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=> res.json())
    .then(data=> displayVideos(data.videos))
    .catch(e => console.log(e));



};

//display videos

const displayVideos= (data)=>{
    data.forEach(element => {

        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card card-compact bg-base-100  shadow-xl">
            <figure class="h-48">
                <img
                src="${element.thumbnail}" class="object-cover h-full w-full"
                alt="Shoes" />
            </figure>
            <div class="flex gap-2 p-2">
                     <img src= ${element.authors[0].profile_picture} class="p-1 h-10 w-10 rounded-full object-cover">
                     <div class="flex flex-col  px-2">
                     
                        <h2 class="font-bold"> ${element.title}</h2>
                        
                       <div class="flex items-center">
                        <p class="font-light">${element.authors[0].profile_name}  </p>
                        <img class="p-1 w-7 " src = "https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">
                        </div>
                     </div>


            </div>
            
            </div>

        `

        document.getElementById("videos").append(card);

        


        console.log(element.video_id)
    });

}



loadVideos()