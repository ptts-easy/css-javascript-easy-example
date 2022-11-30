document.addEventListener('DOMContentLoaded', function (){
    console.log("content::document.DOMContentLoaded()");

    document.getElementById("restart").addEventListener("click", (evt) => {
      document.querySelectorAll("animate").forEach((element) => {
        element.beginElement();
      });
    });
});