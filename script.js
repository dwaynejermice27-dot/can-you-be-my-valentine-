document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const btnContainer = document.querySelector(".buttons");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const img = document.querySelector(".img");

    let noCount = 0;
    const MAX_NO_CLICKS = 5;

    // Static Image Array
    const images = [
        "no.jpg", 
        "ayaw.jpg",  
        "sige.jpg",           
        "break.jpg",
        "nya.jpg"   
    ];

    const messages = [
        "No????? 😔",
        "ayaw mo talaga?",
        "sige na po baby plese",        
        "You're breaking my heart apart",
        "Wala kanang choice nyahahahaha",
    ];

    yesBtn.onclick = () => {
        title.innerHTML = "Yeheyyy! I Love You!! 💗";
        btnContainer.style.display = "none";
        img.src = "yehey.jpg"; // Happy image
    };

    noBtn.onclick = () => {
        noCount++;
        
        if (noCount < MAX_NO_CLICKS) {
            // Update image
            img.src = images[Math.min(noCount, images.length - 1)];
            
            // Update "No" text
            noBtn.innerHTML = messages[Math.min(noCount, messages.length - 1)];

            // Scale Yes button UP
            let yesScale = 1 + (noCount * 0.5); 
            yesBtn.style.transform = `scale(${yesScale})`;

            // Scale No button DOWN
            let noScale = 1 - (noCount * 0.1);
            noBtn.style.transform = `scale(${noScale})`;
        } else {
            // Final phase: Force Yes
            noBtn.innerHTML = "Yes";
            noBtn.style.backgroundColor = "#26953c";
            noBtn.onclick = () => {
                yesBtn.click(); // Redirects to the "Yes" logic
            };
        }
    };
});