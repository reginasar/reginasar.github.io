

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var hide_ = content.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
      hide_.style.display = "none";
    } else {
      content.style.display = "flex";
      hide_.style.display = "flex";
    }
  });
}

var hide = document.getElementsByClassName("hidecoll");
var i;

for (i = 0; i < hide.length; i++) {
    hide[i].addEventListener("click", function() {
      var content = this.previousElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
        this.style.display = "none";
      } else {
        content.style.display = "flex";
        this.style.display = "flex";
        this.classList.toggle("active");
      }
    });
  }

