const card = document.querySelectorAll(".card-body");

card.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.classList.contains("copy-button")) {
      let btn = e.target;
      btn.textContent = "Copied!";
      btn.style.backgroundColor = "#198754";
      setTimeout(() => {
        btn.textContent = "Copy";
        btn.style.backgroundColor = "#0d6efd";
      }, 2000);
      /* Get the text inside the code element */
      var code = el.querySelector("#code").innerText;

      /* Create a textarea element */
      var textarea = document.createElement("textarea");
      textarea.value = code;

      /* Hide the textarea */
      textarea.style.position = "fixed";
      textarea.style.opacity = 0;

      /* Append the textarea to the body */
      document.body.appendChild(textarea);

      /* Select and copy the code */
      textarea.select();
      document.execCommand("copy");

      /* Clean up */
      document.body.removeChild(textarea);
    }
  });
});
