import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Form = ({search, setSearch, saveQuery}) => {

  const [error, setError] = useState(false)

  const {city, country} = search

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (city.trim() === '' || country.trim() === '') {
      setError(true)
      return
    }

    setError(false)
    saveQuery(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >

      {error ? <p className="red darken-4 error">All the fields are required</p> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City:</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value=""> -- Select a country -- </option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country:</label>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Search weather
        </button>
      </div>

    </form>
  )
}

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  saveQuery: PropTypes.func.isRequired
}

export default Form
