var wizRight = gsap.fromTo(".wizard", { x: 10, opacity: "0" }, { duration: 3, x: 400, y: 100, scale: "2", ease: "linear", opacity: "1", paused: true });

document.getElementById("play").onclick = () => wizRight.play();


document.getElementById("pause").onclick = () => wizRight.pause();
document.getElementById("rewind").onclick = () => wizRight.reverse();
document.getElementById("restart").onclick = () => wizRight.restart();

gsap.to("button", { padding: "10", color: "orange", backgroundColor: "black", borderRadius: "15px" })