
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
function Hello(){
    alert("Hello World");
}
function website(){
    window.location.href = "https://www.w3schools.com/js/default.asp";
}
