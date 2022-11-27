
const Selectproduct = document.querySelector("#selectProduct");
document.querySelector("form").addEventListener("submit", item);


function item(event) {
  event.preventDefault();
  if (document.querySelector("#url").value.length == 0) {
    alert("Enter URL")
  } else {
    let Div = document.createElement("div");

    const Url = document.querySelector("#url").value;
    let Image = document.createElement("img");
    Image.src = Url;

    let btn = document.createElement("button");
    btn.innerText = "Delete";

    Div.append(Image, btn);
    document.querySelector("#container").append(Div);

    delete button
    let deleteTask = document.querySelectorAll("button");
    for (let i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
        this.parentNode.remove();
      }
    }

    //filter buttons

    const filterBtn = document.querySelector("#btn");
    galleryItems = document.querySelector("#gallery");

    filterBtn.addEventListener("click", (ele) => {
      if (ele.target.classList.contains("btn1"))

        filterBtn.querySelector(".active").classList.remove("active");
      ele.target.classList.add("active");

      const filterValue = ele.target.getAttribute("data-filter");
      galleryItems.forEach((item) => {
        if (item.classList.contains(filterValue) || filterValue === 'all') {
          item.classList.remove("hide");
          item.classList.add("show");
        }
        else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      })
    })


  }
}
