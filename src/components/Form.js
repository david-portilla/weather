import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ city, setCity, setQuery }) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All the fields are required</p>
      ) : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
          autoFocus
          autoComplete="off"
        />
        <label htmlFor="city">City:</label>
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
  );
};

Form.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
