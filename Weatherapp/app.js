const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-location");
const searchBtn = document.querySelector("#search-btn");
const searchResult = document.querySelector("#results");
const colorTheme = document.querySelector("#switch");
const body = document.getElementsByTagName("BODY")[0];
const main = document.querySelector(".main");
const resetBtn = document.querySelector("#reset");
const results = document.querySelector("#results");

const key = "8fa7e1cd71794a429f263914232703";

searchForm.addEventListener("submit", async function getData(e) {
  e.preventDefault();
  const inputValue = searchInput.value;
  let tempConv = true;
  let distConv = true;

  if (inputValue !== "") {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputValue}&aqi=yes`;

    const resultCard = document.createElement("div");
    resultCard.classList.add("result-card", "flex-col");

    //1. Card Title
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title", "flex-row");
    const titleLogo = document.createElement("i");
    titleLogo.classList.add("bx", "bx-current-location", "loc-logo");
    const titleLocation = document.createElement("h3");
    titleLocation.classList.add("title-location");

    cardTitle.append(titleLogo, titleLocation);

    //2. Data conversion
    const dataConvertors = document.createElement("div");
    dataConvertors.classList.add("data-convertors", "flex-row");
    const temperatureConvertor = document.createElement("button");
    temperatureConvertor.classList.add("temperature-convert", "convert");
    const distanceConvertor = document.createElement("button");
    distanceConvertor.classList.add("speed-convert", "convert");

    dataConvertors.append(temperatureConvertor, distanceConvertor);

    //3. Card data
    const cardData = document.createElement("div");
    cardData.classList.add("card-data", "flex-col");

    //Temperature data
    const dataTemperature = document.createElement("div");
    dataTemperature.classList.add("data-temperature", "flex-row");
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temperature");
    const feelsLike = document.createElement("div");
    feelsLike.classList.add("feels-like");
    dataTemperature.append(currentTemp, feelsLike);

    //Cloud data
    const dataClouds = document.createElement("div");
    dataClouds.classList.add("data-clouds", "flex-col");
    const clouds = document.createElement("div");
    clouds.classList.add("clouds");
    const humidity = document.createElement("div");
    humidity.classList.add("humidity");
    const visibility = document.createElement("div");
    visibility.classList.add("visibility");
    dataClouds.append(clouds, humidity, visibility);

    //Winds data
    const dataWinds = document.createElement("div");
    dataWinds.classList.add("data-wind", "flex-row");
    const windSpeed = document.createElement("div");
    windSpeed.classList.add("wind-speed");
    const windDirection = document.createElement("div");
    windDirection.classList.add("wind-direction");
    dataWinds.append(windSpeed, windDirection);

    cardData.append(dataTemperature, dataClouds, dataWinds);

    //4. Result card
    resultCard.append(cardTitle, dataConvertors, cardData);

    const result = await fetch(url);
    result.json().then(data => {
      const cardBackground = data.current.cloud < 50 ? "sun" : "cloud";
      resultCard.classList.add(cardBackground);
      titleLocation.textContent = `${data.location.name}, ${data.location.country}`;

      // Convert from C to F
      temperatureConvertor.textContent = "°C";
      temperatureConvertor.addEventListener("click", () => {
        tempConv = !tempConv;
        currentTemp.textContent = tempConv
          ? `Temp: ${data.current.temp_c.toFixed(2)}°C`
          : `Temp: ${(data.current.temp_c * 1.8 + 32).toFixed(2)}°F`;
        feelsLike.textContent = tempConv
          ? `Feels like: ${data.current.feelslike_c.toFixed(2)}°C`
          : `Feels like: ${(data.current.feelslike_c * 1.8 + 32).toFixed(2)}°F`;
        temperatureConvertor.textContent = tempConv ? "°C" : "°F";
      });

      //Convert from Km to M
      distanceConvertor.textContent = "Km";
      distanceConvertor.addEventListener("click", () => {
        distConv = !distConv;
        visibility.textContent = distConv
          ? `Visibility: ${data.current.vis_km.toFixed(2)} km`
          : `Visibility: ${(data.current.vis_km * 0.62).toFixed(2)} m`;
        windSpeed.textContent = distConv
          ? `Wind speed: ${data.current.wind_kph.toFixed(2)} `
          : `Wind speed: ${(data.current.wind_kph * 0.62).toFixed(2)} `;
        distanceConvertor.textContent = distConv ? "Km" : "M";
      });

      currentTemp.textContent = `Temp: ${data.current.temp_c.toFixed(2)} °C`;
      feelsLike.textContent = `Feels like: ${data.current.feelslike_c.toFixed(2)} °C`;

      clouds.textContent = `Cloud coverage: ${data.current.cloud}%`;
      humidity.textContent = `Humidity: ${data.current.humidity} g/${"\u33A5"}`;
      visibility.textContent = `Visibility: ${data.current.vis_km.toFixed(2)} km`;

      windSpeed.textContent = `Wind speed: ${data.current.wind_kph.toFixed(2)}`;
      windDirection.textContent = `Wind direction: ${data.current.wind_dir}`;

      searchResult.appendChild(resultCard);
      results.style.visibility = "visible";
    });
  }
  searchInput.value = "";
});

let toggleTheme = true;

colorTheme.addEventListener("click", () => {
  toggleTheme = !toggleTheme;
  if (toggleTheme) {
    body.classList.remove("cloudy");
    body.classList.add("sunny");
    main.classList.remove("cloudy-theme");
    main.classList.add("sunny-theme");
    colorTheme.innerHTML = "<i class='bx bx-sun' ></i>";
    colorTheme.classList.remove("cloudy-theme");
    colorTheme.classList.add("sunny-theme");
  } else {
    body.classList.remove("sunny");
    body.classList.add("cloudy");
    main.classList.remove("sunny-theme");
    main.classList.add("cloudy-theme");
    colorTheme.innerHTML = "<i class='bx bxs-cloud' ></i>";
    colorTheme.classList.remove("sunny-theme");
    colorTheme.classList.add("cloudy-theme");
  }
});

resetBtn.addEventListener("click", () => {
  results.innerHTML = "";
  results.style.visibility = "hidden";
});
