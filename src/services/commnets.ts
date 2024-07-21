export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getComments = async (): Promise<Comments> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
