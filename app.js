let heartBtns = document.getElementsByClassName("fa-heart");
let commentInput = document.querySelector("[name = 'comment']");
console.log(commentInput);

let reviews = document.querySelector(".reviews");
// let textArea = form.querySelector('textarea[name="body"]');
// console.log(textArea);
// console.log(form);

for (let i = 0; i < heartBtns.length; i++) {
  heartBtns[i].addEventListener("click", function (e) {
    e.target.classList.toggle("like");
  });
}

// function postComment(e) {
//   //   e.preventDefault();
//   console.log(commentInput.value);
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         const textarea = form.querySelector('textarea[name="body"]');
//         const commentText = textarea.value.trim();

//         if (commentText !== '') {
//             const discussionContainer = document.querySelector('.flex.flex-col');
//             const newComment = createComment(commentText);
//             discussionContainer.appendChild(newComment);

//             // Clear the textarea after posting the comment
//             textarea.value = '';
//         }
//     });

//     function createComment(text) {
//         const commentDiv = document.createElement('div');
//         commentDiv.classList.add('border', 'rounded-md', 'p-3', 'ml-3', 'my-3');

//         const commentHeader = document.createElement('div');
//         commentHeader.classList.add('flex', 'gap-3', '

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const textarea = form.querySelector('textarea[name="body"]');
    const commentText = textarea.value.trim();

    if (commentText !== "") {
      const discussionContainer = document.querySelector(".flex.flex-col");
      const newComment = createComment(commentText);
      discussionContainer.appendChild(newComment);

      // Clear the textarea after posting the comment
      textarea.value = "";
    }
  });

  function createComment(text) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("border", "rounded-md", "p-3", "ml-3", "my-3");

    const commentHeader = document.createElement("div");
    commentHeader.classList.add("flex", "gap-3", "items-center");

    const commenterImg = document.createElement("img");
    commenterImg.src = "https://avatars.githubusercontent.com/u/22263436?v=4";
    commenterImg.classList.add(
      "object-cover",
      "w-8",
      "h-8",
      "rounded-full",
      "border-2",
      "border-emerald-400",
      "shadow-emerald-400"
    );
    commentHeader.appendChild(commenterImg);

    const commenterName = document.createElement("h3");
    commenterName.classList.add("font-bold");
    commenterName.textContent = "Foulen Ben Falten";
    commentHeader.appendChild(commenterName);

    commentDiv.appendChild(commentHeader);

    const commentText = document.createElement("p");
    commentText.classList.add("text-gray-600", "mt-2");
    commentText.textContent = text;
    commentDiv.appendChild(commentText);

    const heartIcons = document.createElement("i");
    heartIcons.setAttribute("class", "fa-regular fa-heart");
    commentDiv.appendChild(heartIcons);
    reviews.appendChild(commentDiv);
    textArea.innerHTML = "";
    console.log(commentDiv);
  }
});
