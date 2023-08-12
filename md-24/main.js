// console.log('From outside html file');

// const allLi = document.getElementsByTagName('li');
// // console.log(allLi)
// const allTitles = document.getElementsByClassName('title');
// // console.log(allTitles)

const secondSection = document.getElementById("second");
secondSection.style.backgroundColor = "cyan";
secondSection.style.padding = "20px";
secondSection.style.color = "tomato";

const firstSection = (document.querySelector(".sec").style.backgroundColor =
  "yellow");
// let allSections = document.querySelectorAll('.sec');
// console.log(allSections)
// allSections.style.color = "tomato";

// const newUl = document.createElement("ul");
// const h1 = document.createElement("h1");
// const li = document.createElement("li");
// h1.innerText = "dynamically added";
// li.innerText = "kiwi is added dynamic";
// newUl.appendChild(h1);
// newUl.appendChild(li);
// secondSection.appendChild(newUl);

const mainSection = document.getElementById("main");
const section = document.createElement("section");
const ul = document.createElement("ul");
const h1 = document.createElement("h1");
const li = document.createElement("li");
ul.innerHTML = `
    <h1>This is dynamic section</h1>
    <li> Hi </li>
    <li> Hi </li>
    <li> Hi </li>
`;

mainSection.appendChild(ul);
