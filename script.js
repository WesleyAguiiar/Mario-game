const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".nuvens")
const points = document.querySelector(".points")

let score = 0

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = +window.getComputedStyle(pipe).left.replace("px", "")
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace("px", "")

    console.log(cloudsPosition)

    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        clouds.style.animation = "none"
        clouds.style.left = `${cloudsPosition}px`

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`
        mario.setAttribute("src", "Imagens/lose.png")
        mario.setAttribute("class", "lose")
        score += 1
    }
}, 10)

points.innerHTML = `Score: ${score}`

document.addEventListener("keydown", jump);