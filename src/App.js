import React, {useEffect, useState} from 'react'
import Form from './components/Form'
import Header from './components/Header'

function App () {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const [query, saveQuery] = useState(false)

  const {city, country} = search

  useEffect(() => {
    const fetchAPI = async () => {
      if (query) {
        const apiKey = '01f8143c1269e0ef136cc629f37a2b08'
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ apiKey }`
        const response = await fetch(URL)
        const res = await response.json()
        console.log(res)
      }
    }
    fetchAPI()
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
              2
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
