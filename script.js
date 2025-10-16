const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    faq.classList.toggle("active");
    faqs.forEach((item) => {
      if (item !== faq) item.classList.remove("active");
    });
  });
});
