const toggleBtn = document.querySelector(".toggle-btn");
const navItems = document.querySelector(".nav-items");

const toggleNav = (e) => {
    e.preventDefault();

    navItems.classList.toggle("show-nav-items");
}

toggleBtn.addEventListener("click", toggleNav);



// learning ...

const container = document.querySelector(".flex-container")
console.log(container.innerText);