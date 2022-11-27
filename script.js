
const Selectproduct = document.querySelector("#selectProduct");
document.querySelector("form").addEventListener("submit", item);
const container = document.querySelector("#container");


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

    //delete button
    let deleteTask = document.querySelectorAll("button");
    for (let i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
        this.parentNode.remove();
      }
    }
  }
}

//filter buttons
const choose = (products, filter) => {
  container.innerHTML = "";
  const filterItem = products.filter((item) => filter == 'all' ? true : item.type == filter)
  console.log(filterItem);
  filterItem.map((products) => {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.classList.add(`${productType.value}`);
    const productPic = document.createElement("div");
    productPic.classList.add("Url");

  })
}




