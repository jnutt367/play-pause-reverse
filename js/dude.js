var dudeGo = gsap.fromTo(".dude", { x: 400, opacity: "0" }, { duration: 3, x: 245, y: 190, marginLeft: "100", rotate: "360", scale: "3", width: "146", border: "2px inset green", ease: "bounce.inOut", zIndex: "0", opacity: ".5", paused: true });

document.getElementById("play").onclick = () => dudeGo.play();


document.getElementById("pause").onclick = () => dudeGo.pause();
document.getElementById("rewind").onclick = () => dudeGo.reverse();
document.getElementById("restart").onclick = () => dudeGo.restart();

gsap.to("button", { padding: "10", color: "black", backgroundColor: "green", zIndex: "1", borderRadius: "15px", fontFamily: "fantasy", fontWeight: "bold" });
gsap.to("a", { backgroundColor: "green", color: "white" });

gsap.fromTo(".text", { x: 10, y: -10, opacity: "0" }, { duration: 2, x: 200, y: -10, ease: "back(6)", ease: "elastic", backgroundColor: "grey", color: "white", padding: "20", width: "400", fontSize: "1.5em", opacity: "1", fontFamily: "fantasy" });