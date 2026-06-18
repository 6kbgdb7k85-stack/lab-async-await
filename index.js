// Write your code here!
function displayPosts(posts) {
  const postList = document.querySelector("#post-list");
  posts.forEach((post) => {
    const postItem = document.createElement("li");
    const postHeader = document.createElement("h1");
    const postBody = document.createElement("p");
    postHeader.textContent = post.title;
    postBody.textContent = post.body;
    postItem.append(postHeader, postBody);
    postList.appendChild(postItem);
  });
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => displayPosts(posts))
  .catch((error) => console.error(error));
