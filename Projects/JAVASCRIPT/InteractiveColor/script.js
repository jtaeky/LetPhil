const buttons = document.querySelectorAll(".color-btn")
const resetButton = document.getElementById("reset")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = button.getAttribute("data-color");
    })
});

// Reset background color
resetButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
})