import React from "react";
// import Form from "./components/Form";
// import Header from "./components/Header";
// import Weather from "./components/Weather";
// import Error from "./components/Error";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  // const [city, setCity] = useState("");
  // const [query, setQuery] = useState(false);
  // const [apiResult, saveApiResult] = useState({});
  // const [error, setError] = useState(false);
  // const _URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;

  // const fetchAPI = async () => {
  //   try {
  //     const request = await fetch(_URL);
  //     const response = await request.json();
  //     saveApiResult(response);
  //     setQuery(false);

  //     if (response.cod === "404") {
  //       // City not found
  //       return setError(true);
  //     }
  //     setError(false);
  //   } catch (error) {
  //     // Server error or API not available
  //     setError(true);
  //   }
  // };

  // useEffect(() => {
  //   // if (query) {
  //   //   fetchAPI();
  //   // }
  //   // eslint-disable-next-line
  // }, [query]);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons></TopButtons>
        <Inputs />

        <TimeAndLocation />
      </div>
      {/* <Header title="React Weather App" />
      <UilReact />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <p>Type the city you would like to get the weather.</p>
            <div className="col m6 s12">
              <Form city={city} setCity={setCity} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">
              {error && <Error message="No result found for this city." />}
              <Weather apiResult={apiResult} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
