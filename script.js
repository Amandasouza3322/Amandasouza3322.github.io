const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Fechar" : "Menu";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menu";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.querySelector("#copy-email");
const feedback = document.querySelector("#contact-feedback");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    if (!email) {
      if (feedback) feedback.textContent = "Edite o index.html e preencha seu e-mail no atributo data-email deste botão.";
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      if (feedback) feedback.textContent = "E-mail copiado!";
    } catch {
      if (feedback) feedback.textContent = `Meu e-mail: ${email}`;
    }
  });
}
