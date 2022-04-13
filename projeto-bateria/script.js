document.body.addEventListener("keyup", function(event){
    playSound(event.code.toLowerCase())
})

document.querySelector(".composer button").addEventListener("click", function(event){
    let song = document.querySelector("#input").value
    if(song != ""){
        let songArray = song.split("")
        playComposition(songArray)
    }
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
        let keyElement = document.querySelector(`div[data-key="${sound}"]`)
        if(keyElement){
            keyElement.classList.add("active");
            setInterval(()=>{
                keyElement.classList.remove("active");
            },500)
        }
    }
}

function playComposition(songArray){
    let wait = 0;
    
    songArray.map((songItem) =>{
        setTimeout(() =>{
            playSound(`key${songItem}`) 
        }, wait)
        wait += 250;
    })
}