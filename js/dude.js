var dudeGo = gsap.fromTo(".dude", { x: 400, opacity: "0" }, { duration: 3, x: 550, y: 200, scale: "2", rotate: "360", ease: "bounce.inOut", opacity: "1", paused: true });

document.getElementById("play").onclick = () => dudeGo.play();


document.getElementById("pause").onclick = () => dudeGo.pause();
document.getElementById("rewind").onclick = () => dudeGo.reverse();
document.getElementById("restart").onclick = () => dudeGo.restart();

gsap.to("button", { padding: "10", color: "black", backgroundColor: "green", borderRadius: "15px", fontFamily: "fantasy", fontWeight: "bold" });