const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
  if(event.code === "Enter"){
    search();
  }
})

function search() {
  const input = searchInput.value;

  window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enJP970JP970&oq=" + input + "&aqs=chrome..69i57j46i512j46i199i465i512j0i512j46i199i291i512j0i512l2j69i60.732j0j4&sourceid=chrome&ie=UTF-8"
}