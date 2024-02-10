onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const elementoH1 = document.createElement("H1");
elementoH1.setAttribute("class","titulo");

elementoH1.textContent = "Hola,mundo";

console.log(elementoH1)






