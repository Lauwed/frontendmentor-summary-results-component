const summaryList = document.querySelector(".summary__list");

const renderListElement = (elementData) => {
    const li = document.createElement('li');
    li.classList.add("summary__element");
    li.classList.add(`summary__element--${elementData.category}`)

    const img = document.createElement('img');
    img.src = elementData.icon;
    img.alt = `Icon of ${elementData.category}`;

    const h3 = document.createElement('h3');
    h3.innerHTML = elementData.category;

    li.appendChild(img);
    li.appendChild(h3);

    const p = document.createElement("p");
    p.innerHTML = `${elementData.score} `;

    const span = document.createElement("span");
    span.innerHTML = "/ 100";

    p.appendChild(span);
    li.appendChild(p);

    summaryList.appendChild(li);
}

fetch("/data.json")
  .then((req) => req.json())
  .then((data) => {
    console.log(data);

    data.forEach(d => renderListElement(d));
  });
