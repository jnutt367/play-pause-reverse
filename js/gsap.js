var wizRight = gsap.fromTo(".wizard", { x: 400, opacity: "0" }, { duration: 3, x: 500, y: 200, scale: "2", ease: "circ.inOut", opacity: "1", paused: true });



document.getElementById("play").onclick = () => wizRight.play();


document.getElementById("pause").onclick = () => wizRight.pause();
document.getElementById("rewind").onclick = () => wizRight.reverse();
document.getElementById("restart").onclick = () => wizRight.restart();

gsap.to("button", { padding: "10", color: "orange", backgroundColor: "black", borderRadius: "15px" });