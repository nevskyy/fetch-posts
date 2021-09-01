export const getPosts = () => {
  return (
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
  );
};