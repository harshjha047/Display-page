let a = "a"
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let p = document.querySelector("#paradost");
let h = document.querySelector("#heading");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let image = document.querySelector(".image");
let webimg = document.querySelector(".about");
let leftframe = document.querySelector("#leftframe");
let rightframe = document.querySelector("#rightframe");

let pro1 = () => {
    h.innerText="PROJECTS";
    h.style.color ="#FFF";
    box1.style.border= '2px solid white';
    box2.style.border= 'none';
    box3.style.border= 'none';
    box4.style.border= 'none';
    p.innerText ="";
    leftframe.style.backgroundImage = "url('https://i0.wp.com/showitbetter.co/wp-content/uploads/2022/09/cover-architecture-templates-1.jpg?fit=750%2C750&ssl=1')"
    rightframe.style.backgroundImage = "url('https://preview.redd.it/some-cool-wallpapers-v0-j2yf7bna47da1.png?width=3060&format=png&auto=webp&s=00b124bc310094df3b9be8cc7dbf1a4b60207716')"
    image.style.backgroundImage="url('https://preview.redd.it/some-cool-wallpapers-v0-5zx1lkna47da1.jpg?width=3840&format=pjpg&auto=webp&s=1c52c3aabf87a68b04aa7fde850813ce6d920b0a')";
    webimg.style.backgroundImage = "none";
  }
let pro2 = () => {
    h.innerText="RING RODE";
    h.style.color ="#FFF";
    p.innerText ="A Webpage."
    box1.style.border= 'none';
    box2.style.border= '2px solid white';
    box3.style.border= 'none';
    box4.style.border= 'none';
    leftframe.style.backgroundImage = "url('https://preview.redd.it/some-cool-wallpapers-v0-5zx1lkna47da1.jpg?width=3840&format=pjpg&auto=webp&s=1c52c3aabf87a68b04aa7fde850813ce6d920b0a')"
    rightframe.style.backgroundImage = "url('https://media2.themorningcontext.com/media/posts_images/thibault-penin-AWOl7qqsffM-unsplash-1.jpg')"
    image.style.backgroundImage="url('https://preview.redd.it/some-cool-wallpapers-v0-j2yf7bna47da1.png?width=3060&format=png&auto=webp&s=00b124bc310094df3b9be8cc7dbf1a4b60207716')";
    webimg.style.backgroundImage = "url('https://iili.io/JE9ArUx.png')";
}
let pro3 = () => {
    h.innerText="NETFLIX";
    h.style.color ="red";
    p.innerText ="Netflix login page.";
    box1.style.border= 'none';
    box2.style.border= 'none';
    box3.style.border= '2px solid white';
    box4.style.border= 'none';
    leftframe.style.backgroundImage = "url('https://preview.redd.it/some-cool-wallpapers-v0-j2yf7bna47da1.png?width=3060&format=png&auto=webp&s=00b124bc310094df3b9be8cc7dbf1a4b60207716')"
    rightframe.style.backgroundImage = "url('https://i0.wp.com/showitbetter.co/wp-content/uploads/2022/09/cover-architecture-templates-1.jpg?fit=750%2C750&ssl=1')"
    webimg.style.backgroundImage = "url('https://iili.io/JE9RCgf.png')";
    image.style.backgroundImage="url('https://media2.themorningcontext.com/media/posts_images/thibault-penin-AWOl7qqsffM-unsplash-1.jpg')";
  }
  let pro4 = () => {
    h.innerText="PortFolio";
    h.style.color ="blueviolet";
    p.innerText ="My Portfolio.";
    box1.style.border= 'none';
    box2.style.border= 'none';
    box3.style.border= 'none';
    box4.style.border= '2px solid white';
    leftframe.style.backgroundImage = "url('https://media2.themorningcontext.com/media/posts_images/thibault-penin-AWOl7qqsffM-unsplash-1.jpg')"
    rightframe.style.backgroundImage = "url('https://preview.redd.it/some-cool-wallpapers-v0-5zx1lkna47da1.jpg?width=3840&format=pjpg&auto=webp&s=1c52c3aabf87a68b04aa7fde850813ce6d920b0a')"
    webimg.style.backgroundImage = "url('https://i.postimg.cc/0NxtR2Dr/Screenshot-2024-02-13-214913.png')";
    image.style.backgroundImage="url('https://i0.wp.com/showitbetter.co/wp-content/uploads/2022/09/cover-architecture-templates-1.jpg?fit=750%2C750&ssl=1')";
  }
  box1.addEventListener("click", ()=>{
    pro1();
  });
  box2.addEventListener("click", ()=>{
    pro2();
  });
  box3.addEventListener("click", ()=>{
    pro3();
  });
  box4.addEventListener("click", ()=>{
    pro4();
  });
  btn2.addEventListener("click", ()=>{
    if(a==="a"){
      a = "b"
      pro1();
    }
    else if(a==="b"){
      a = "c"
      pro2();
    }
    else if(a==="c"){
      a = "d"
      pro3();
    }
    else{
      a ="a"
      pro4();
    } 
  });
  btn1.addEventListener("click", ()=>{
    if(a==="a"){
      a = "b"
      pro4();
    }
    else if(a==="b"){
      a = "c"
      pro3();
    }
    else if(a==="c"){
      a = "d"
      pro2();
    }
    else{
      a ="a"
      pro1();
    } 
  });