const buttonTrailer = document.querySelector('.button');
const video = document.getElementById("video");
const modal = document.querySelector('.modal');
const closeButton = document.querySelector(".close-modal")
const linkVideo = video.src;

function alternateModal(){
    modal.classList.toggle("aberto")
}

buttonTrailer.addEventListener("click", () => {
    alternateModal() 
    video.setAttribute("src", linkVideo)    
});

closeButton.addEventListener("click", () => {
    alternateModal()
    video.setAttribute("src", "")
})
