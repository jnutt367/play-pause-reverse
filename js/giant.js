var giantGo = gsap.fromTo(".giant", { x: 400, opacity: "0" }, { duration: 3, x: 550, y: 400, scale: "3", height: "400", ease: "steps(12)", opacity: "1", paused: true });

document.getElementById("play").onclick = () => giantGo.play();


document.getElementById("pause").onclick = () => giantGo.pause();
document.getElementById("rewind").onclick = () => giantGo.reverse();
document.getElementById("restart").onclick = () => giantGo.restart();

gsap.to("button", { padding: "10", color: "white", backgroundColor: "purple", borderRadius: "15px", fontFamily: "fantasy", fontWeight: "bold" });
gsap.to("a", { backgroundColor: "black", color: "white" });

gsap.fromTo(".text", { x: 10, y: -10, opacity: "0" }, { duration: 2, x: 200, y: -10, fontSize: "1.5em", opacity: "1", fontFamily: "fantasy" });