export const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return await res.json();
};

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((users) => setMonsters(users));
