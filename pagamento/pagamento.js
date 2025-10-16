const numCartao = document.getElementById("numCartao");
const nomeCartao = document.getElementById("nomeCartao");
const validade = document.getElementById("validade");
const cvv = document.getElementById("cvv");
const card = document.getElementById("card");

function soDigitos(str) {
  return (str || "").replace(/\D/g, "");
}

/* Número do cartão: apenas dígitos, max 16, formata em blocos de 4 */
numCartao.addEventListener("input", (e) => {
  let digits = soDigitos(e.target.value).slice(0, 16);
  let formatted = digits.match(/.{1,4}/g)?.join(" ") || "";
  e.target.value = formatted;
  document.querySelector(".card-number").textContent = formatted || "•••• •••• •••• ••••";
});

/* Nome do titular: mostra em maiúsculas no cartão (não alteramos o input) */
nomeCartao.addEventListener("input", () => {
  document.querySelector(".card-holder").textContent =
    (nomeCartao.value || "").toUpperCase() || "NOME DO TITULAR";
});

/* Validade: apenas dígitos, MM/AA automático, limite 4 dígitos */
validade.addEventListener("input", (e) => {
  let v = soDigitos(e.target.value).slice(0, 4); // MMYY
  if (v.length >= 3) {
    v = v.slice(0, 2) + "/" + v.slice(2);
  }
  e.target.value = v;
  document.querySelector(".card-expiration").textContent = v || "00/00";
});

/* CVV: apenas dígitos, limite 3 */
cvv.addEventListener("input", (e) => {
  let v = soDigitos(e.target.value).slice(0, 3);
  e.target.value = v;
  document.querySelector(".cvv-box").textContent = v || "000";
});

/* Flip visual ao focar/blur no CVV */
cvv.addEventListener("focus", () => card.classList.add("flip"));
cvv.addEventListener("blur", () => card.classList.remove("flip"));

function confirmarPagamento() {
  alert("✅ Pagamento simulado com sucesso!\nObrigado por utilizar a Foundry Coworking.");
}
