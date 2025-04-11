(function () {
    function createButton() {
      if (document.getElementById("gfg-x-post-btn")) return;
  
      const btn = document.createElement("button");
      btn.id = "gfg-x-post-btn";
      btn.innerText = "📤 Post to X";
      btn.style.position = "fixed";
      btn.style.top = "10px";
      btn.style.left = "700px";
      btn.style.padding = "10px 15px";
      btn.style.fontSize = "16px";
      btn.style.backgroundColor = "#1DA1F2";
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.borderRadius = "6px";
      btn.style.zIndex = "9999";
      btn.style.cursor = "pointer";
      btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  
      btn.onclick = () => {
        const dayInput = prompt("Enter today's day number (e.g. 45):");
        if (!dayInput || isNaN(parseInt(dayInput))) {
          alert("Invalid day. Please enter a valid number.");
          return;
        }
  
        const titleElement = document.querySelector(".problem-title, h1.entry-title, .g-m-0");
        const title = titleElement ? titleElement.innerText.trim() : "a GFG Problem";
  
        chrome.runtime.sendMessage({
          action: "just_post",
          day: parseInt(dayInput),
          title: title
        });
      };
  
      document.body.appendChild(btn);
    }
  
    // Try on load, and re-attempt after 3 seconds if missed
    window.addEventListener("load", () => {
      setTimeout(createButton, 2000);
      setTimeout(() => {
        if (!document.getElementById("gfg-x-post-btn")) createButton();
      }, 5000);
    });
  })();
  