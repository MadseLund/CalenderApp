// Simple interactive FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = question.classList.contains("open");

    // Close all other questions
    faqQuestions.forEach((item) => {
      item.classList.remove("open");
      item.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      question.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Time-slot interaction
const timeButtons = document.querySelectorAll(".time-grid button");

timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timeButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Mobile menu
const mobileMenu = document.querySelector(".mobile-menu");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

mobileMenu?.addEventListener("click", () => {
  const open = mobileMenu.getAttribute("aria-expanded") === "true";
  mobileMenu.setAttribute("aria-expanded", String(!open));

  [navLeft, navRight].forEach((nav) => {
    if (!nav) return;
    nav.style.display = open ? "" : "flex";
    if (!open) {
      nav.style.position = "absolute";
      nav.style.left = "16px";
      nav.style.right = "16px";
      nav.style.top = "82px";
      nav.style.background = "#fff";
      nav.style.padding = "20px";
      nav.style.border = "1px solid #e7e9ee";
      nav.style.borderRadius = "12px";
      nav.style.flexDirection = "column";
      nav.style.alignItems = "stretch";
      nav.style.gap = "18px";
    }
  });
});

// Example conversion tracking for your CTA
const ctaButton = document.querySelector("#ctaButton");

ctaButton?.addEventListener("click", () => {
  if (window.gtag) {
    window.gtag("event", "cta_click", {
      cta_name: "get_started_for_free",
      location: "final_cta"
    });
  }

  if (window.clarity) {
    window.clarity("set", "cta_clicked", "get_started_for_free");
  }
});
