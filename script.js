// complete the js code
const fetchButton = document.getElementById("fetch-button");
const resultsDiv = document.getElementById("results");

const cache = new Map();
const cachedTime = 60000;
const cached = new Map();

const fetchData = async () => {
  // implement the caching here and store data in cache variable
	const cacheKey = "validData";

	if(cached.has(cacheKey)){
		const data = cached.get(cacheKey;
		const currTime = Date.now();

		console.log(data);
		if(currTime - data.timestamp < cachedTime){
			return data.data
		}
	}

  console.log("Making API call");
  const response = await fetch("https://opentdb.com/api.php?amount=3");
  const data = await response.json();

  cached.set(cacheKey, {
    timestamp: Date.now(),
    data: data,
  });

  return data;
};

const displayData = (data) => {
  const question = data.results[0].question;
  resultsDiv.textContent = question;
};

fetchButton.addEventListener("click", async () => {
  const data = await fetchData();
  displayData(data);
});
