export const allPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await response.json();
  return data;
};
