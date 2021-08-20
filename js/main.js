let prev = document.getElementById("icon-prev");
let next = document.getElementById("icon-next");
const imagesUsers = document.getElementById("img-user");
const textHeader = document.getElementById("header-text");
const subt = document.getElementById("header-subt");
const job = document.getElementById("header-job");
let numb = true;



next.addEventListener("click", () => {
  button();
});

prev.addEventListener("click", () => {
  button();
});

button = () => {
  if (numb == true) {
    imagesUsers.setAttribute("src", "/images/image-john.jpg");
    textHeader.innerHTML ="“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    subt.innerHTML = "John Tarkpor";
    job.innerHTML = "Junior Front-end Developer";
    numb = false;
  } else if (numb == false) {
    imagesUsers.setAttribute("src", "/images/image-tanya.jpg");
    textHeader.innerHTML ="“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    subt.innerHTML = "Tanya Sinclair";
    job.innerHTML = "UX Engineer";
    numb = true;
  }
};
