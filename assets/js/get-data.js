const url = './data.json';

export const fetchData = async (site) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return await data[site];
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};
