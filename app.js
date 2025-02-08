document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            navLinks.style.display = "flex"; 
            menuToggle.style.display = "none"; 
        } else {
            navLinks.style.display = "none"; 
            menuToggle.style.display = "block"; 
        }
    }

    menuToggle.addEventListener("click", () => {
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            navLinks.style.display = "flex";
        } else {
            navLinks.style.display = "none";
        }
    });

    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});










document.querySelectorAll(".items img").forEach(img => {
    img.addEventListener("mousemove", (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;
        
        const moveX = (offsetX / clientWidth - 0.5) * 20; 
        const moveY = (offsetY / clientHeight - 0.5) * 20; 
        
        img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1) rotate(${moveX / 5}deg)`;
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "translate(0, 0) scale(1) rotate(0deg)";
    });
});









const coffeeRecipes = {
    "Espresso": "Espresso shot, hot water",
    "Latte": "Espresso, steamed milk, foam",
    "Cappuccino": "Espresso, hot milk, thick foam"
};

document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        let item = this.closest(".items");
        let imgSrc = item.querySelector(".coffee-img").src;
        let title = item.querySelector("h5").innerText;
        let price = item.querySelector("h1").innerText;

        document.getElementById("modalImage").src = imgSrc;
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalPrice").innerText = price;
        document.getElementById("modalRecipe").innerText = coffeeRecipes[title] || "Recipe not available";

        document.getElementById("coffeeModal").style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("coffeeModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    let modal = document.getElementById("coffeeModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
