


function fetchImages(){  
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(data => data.json())
    .then(data => data.message.forEach(thing => {
        const div = document.createElement("div");
        div.innerHTML = `<img src=${thing} class="dogs">`
        document.getElementById("dog-image-container").append(div)
    }))
}

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
        
        const lis = document.getElementsByTagName("li");
        const selectBreed = document.getElementById("breed-dropdown");
        const dogBreedList = document.getElementById("dog-breeds");

        selectBreed.addEventListener("change", (event) => {
            dogBreedList.innerHTML = "";
        
            if(event.target.value === "a"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="a"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
            if(event.target.value === "b"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="b"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
            if(event.target.value === "c"){
                for(let i = 0; i < dogBreeds.length; i++){
                   if(dogBreeds[i].charAt(0)==="c"){
                        const li = document.createElement("li");
                        li.innerHTML = dogBreeds[i]
                        document.getElementById("dog-breeds").append(li)
                        li.addEventListener("click", () => li.style.color = "red")  
                   }
                }
            }
            if(event.target.value === "d"){
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
    
   
        // if(event.target.value === "a"){
        //     dogBreeds.forEach(dog => {
        //        if(dog.charAt(0) === "a"){
        //             const li = document.createElement("li");
        //             li.innerHTML = `${dog}`
        //             li.classList.add("dog-breed")
        //             document.getElementById("dog-breeds").append(li)
        //             li.addEventListener("click", () => li.style.color = "red")
        //        }
        //     })
        // }
        // if(event.target.value === "b"){
        //     dogBreeds.forEach(dog => {
        //        if(dog.charAt(0) === "b"){
        //             const li = document.createElement("li");
        //             li.innerHTML = `${dog}`
        //             li.classList.add("dog-breed")
        //             document.getElementById("dog-breeds").append(li)
        //             li.addEventListener("click", () => li.style.color = "red")
        //        }
        //     })
        // }
        // if(event.target.value === "c"){
        //     dogBreeds.forEach(dog => {
        //        if(dog.charAt(0) === "c"){
        //             const li = document.createElement("li");
        //             li.innerHTML = `${dog}`
        //             li.classList.add("dog-breed")
        //             document.getElementById("dog-breeds").append(li)
        //             li.addEventListener("click", () => li.style.color = "red")
        //        }
        //     })
        // }



fetchBreeds()
fetchImages()
