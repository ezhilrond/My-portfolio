 const themeToggle = document.getElementById("themeToggle");
        const body = document.body;
        const navbar = document.getElementById("mainNavbar");

        themeToggle.addEventListener("click", () => {
            const darkModeOn = body.classList.toggle("dark-mode");
            navbar.classList.toggle("dark-mode", darkModeOn);
            themeToggle.textContent = darkModeOn ? "☀️ Light Mode" : "🌙 Dark Mode";
        });

        // 📦 View More / Less
        document.addEventListener("DOMContentLoaded", function () {
            const viewMoreBtn = document.getElementById("viewMoreBtn");
            const boxes = document.querySelectorAll(".boxes-item");
            let isExpanded = false;

            viewMoreBtn.addEventListener("click", function () {
                boxes.forEach((box, index) => {
                    box.style.display = isExpanded && index >= 3 ? "none" : "block";
                });
                isExpanded = !isExpanded;
                viewMoreBtn.textContent = isExpanded ? "View Less" : "View More";
            });

            boxes.forEach((box, index) => {
                if (index >= 3) box.style.display = "none";
            });
        });