import React from "react";
import { formatToLocalTime } from "../services/utils";
import { DateTime } from "luxon";

const TimeAndLocation = ({
  dt,
  timezone,
  name = "Santiago de Cali",
  country = "CO",
}) => {
  const now = DateTime.now();

  return (
    <>
      <div className="flex items-center justify-center my-6">
        {now && dt === undefined && (
          <p className="text-white text-xl font-extralight">
            {now
              .toFormat("cccc, dd LLL yyyy' | Local time: 'hh:mm a")
              .toString()}
          </p>
        )}

        {dt && (
          <p className="text-white text-xl font-extralight">
            {formatToLocalTime(dt, timezone)}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {name}, {country}
        </p>
      </div>
    </>
  );
};

export default TimeAndLocation;
