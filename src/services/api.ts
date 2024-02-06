export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fecthing data:", error);
  }
};
