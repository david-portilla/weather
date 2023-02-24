const Icons = (icon) => {
  switch (icon) {
    case "Thunderstorm":
      icon = "icons/thunderstorm-rain.svg";
      break;
    case "Drizzle":
      icon = "icons/drizzle.svg";
      break;
    case "Rain":
      icon = "icons/rain.svg";
      break;
    case "Snow":
      icon = "icons/snow.svg";
      break;
    case "Clear":
      icon = "icons/clear-day.svg";
      break;
    case "Clouds":
      icon = "icons/cloudy.svg";
      break;
    case "Fog":
      icon = "icons/fog.svg";
      break;
    case "Haze":
      icon = "icons/haze.svg";
      break;
    case "Smoke":
      icon = "icons/smoke.svg";
      break;
    default:
      icon = "icons/clear-day.svg";
      break;
  }
  return icon;
};

export default Icons;
