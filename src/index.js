//fetch images and add to image container
function fetchImages(){  
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(data => data.json())
    .then(data => data.message.forEach(thing => {
        const div = document.createElement("div");
        div.innerHTML = `<img src=${thing} class="dogs">`
        document.getElementById("dog-image-container").append(div)
    }))
}

//fetch breeds, add to empty array, and add to breed list
function fetchBreeds(){
    const dogBreeds = []

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(data => data.json())
    .then(data => {
        for(const key in data.message){
            dogBreeds.push(key)
        }
        dogBreeds.forEach((dog)=>{
            const li = document.createElement("li");
            li.innerHTML = `${dog}`
            document.getElementById("dog-breeds").append(li)
            li.addEventListener("click", () => li.style.color = "red")             
        }) 
        
        const selectBreed = document.getElementById("breed-dropdown");
        const dogBreedList = document.getElementById("dog-breeds");
        
        //even listener on dropdown list
        selectBreed.addEventListener("change", (event) => {
            dogBreedList.innerHTML = ""; //set UL to empty when change event occurs
            const eventValue = event.target.value;
        
            //if option = x, then filter through array, if array[i] first letter = x, add to UL
            if(eventValue === "a"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="a"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
            if(eventValue === "b"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="b"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
            if(eventValue === "c"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="c"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
            if(eventValue === "d"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="d"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
        })

     })
}
    




fetchBreeds()
fetchImages()
