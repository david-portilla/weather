import React from "react";

const TimeAndLocation = ({
  time = "Tue May 12 2020 18:50:21 GMT-0500",
  country = "CO",
  name = "Medellin",
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{time} </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {name}, {country}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
