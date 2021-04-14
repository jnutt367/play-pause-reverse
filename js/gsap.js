var wizRight = gsap.fromTo(".wizard", { x: 400, opacity: "0" }, { duration: 3, x: 300, y: 200, borderRadius: "15px", scale: "2", ease: "circ.inOut", opacity: "1", paused: true });



document.getElementById("play").onclick = () => wizRight.play();


document.getElementById("pause").onclick = () => wizRight.pause();
document.getElementById("rewind").onclick = () => wizRight.reverse();
document.getElementById("restart").onclick = () => wizRight.restart();

gsap.to("button", { padding: "10", color: "orange", backgroundColor: "black", borderRadius: "15px" });
gsap.to("a", { backgroundColor: "orange", color: "white" });
gsap.to("body", { duration: 4, backgroundColor: "beige" });
gsap.fromTo(".text", { x: 10, y: -10, opacity: "0" }, { duration: 2, x: 100, y: -10, ease: "elastic", backgroundColor: "orange", color: "white", padding: "20", width: "400", borderRadius: "15px", fontSize: "1.5em", opacity: "1", fontFamily: "fantasy" });