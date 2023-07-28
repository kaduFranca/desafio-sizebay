const iframe = (link) => `<iframe
src=${link}
frameborder="0"
id="iframe"
>
</iframe>`;

const link = (mode) =>
  `https://vfr-v3-production.sizebay.technology/V4/?mode=${mode}&id=38478062&sid=0A7E1A4DF1FBe0ab44fca6a740609d7ce525732807f7&tenantId=837&lang=br`;

const iframeProvador = iframe(link("vfr"));
const iframeTabela = iframe(link("chart"));

function selectButtonSizebay(type) {
  var element = document.querySelector("#sizebayModal");
  if (type == "provador") {
    element.innerHTML += iframeProvador;
  } else if (type == "tabela") {
    element.innerHTML += iframeTabela;
  }
  showModal("#modal");
}

function showModal(id) {
  var element = document.querySelector(id);
  var overlay = document.querySelector(`${".overlay"}`);
  if (element.classList.contains("show")) {
    element.classList.remove("show");
    overlay.style.display = "none";
    document.querySelector("#iframe").remove();
  } else {
    element.classList.add("show");
    overlay.style.display = "block";
  }
}


function selectColor(button) {
    const buttons = document.querySelectorAll("#cor");
    buttons.forEach((b) => b.classList.remove("selecionado"));
  
    button.classList.add("selecionado");
}

function selectImage(element) {

    document.querySelector('.imagemPrincipal').innerHTML = element.outerHTML;
    
}