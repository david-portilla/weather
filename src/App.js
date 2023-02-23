import React, {useEffect, useState} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Weather from './components/Weather'
import Error from './components/Error'

function App () {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const [query, saveQuery] = useState(false)
  const [apiResult, saveApiResult] = useState({})
  const [error, setError] = useState(false)

  const {city, country} = search
  const fetchAPI = async () => {
    if (query) {
      const apiKey = '01f8143c1269e0ef136cc629f37a2b08'
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ apiKey }`
      const request = await fetch(URL)
      const response = await request.json()
      saveApiResult(response)
      saveQuery(false)
      // verify result status
      if (response.cod === '404') {
        setError(true)
      } else {
        setError(false)
      }
    }
  }

  useEffect(() => {
    fetchAPI()
    // eslint-disable-next-line
  }, [query])

  return (
    <>
      <Header
        title='Weather React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                saveQuery={saveQuery}
              />
            </div>
            <div className="col m6 s12">
              { error ?
                <Error message="No result found for this search" />
              :
                <Weather apiResult={apiResult} />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
