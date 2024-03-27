const input = document.getElementById("input");
const form = document.getElementById("form");

form?.addEventListener("submit", (ev) => {
  ev.preventDefault()
  const text = input.innerText;
  console.log(text)
  input.innerText = "";
})

function isValidURL(str) {
  const a  = document.createElement('a');
  a.href = str;
  return (a.host && a.host != window.location.host);
}