import { useEffect, useState } from "react";

const TrailLength = ({ length }) => {
  const [avgMileage, setAvgMileage] = useState(15);
  const [hikingDays, setHikingDays] = useState(Math.ceil(length / avgMileage));
  const [hikingDuration, setHikingDuration] = useState(hikingDays);
  const [durationOption, setDurationOption] = useState("days");

  // changes displayed value for hike duration when user changes day/week/month option
  useEffect(() => {
    switch (durationOption) {
      case "days":
        setHikingDuration(hikingDays);
        break;
      case "weeks":
        setHikingDuration(Math.ceil(hikingDays / 7));
        break;
      case "months":
        setHikingDuration(Math.ceil((hikingDays / 30.4) * 10) / 10);
        break;
      default:
        break;
    }
  }, [durationOption, setHikingDuration, hikingDays]);

  // change the number of days hiking based on average mileage
  useEffect(() => {
    setHikingDays(Math.ceil(length / avgMileage));
  }, [avgMileage, setHikingDays]);

  return (
    <>
      Length: {length} miles, {hikingDuration}{" "}
      <select
        name=""
        id=""
        style={{ border: "1px solid rgba(0,0,0,.175)" }}
        onChange={(event) => setDurationOption(event.target.value)}
        value={durationOption}
      >
        <option value="days">days</option>
        <option value="weeks">weeks</option>
        <option value="months">months</option>
      </select>{" "}
      at{" "}
      <input
        style={{
          border: "1px solid rgba(0,0,0,.175)",
          height: 25,
          width: 45,
        }}
        type="number"
        defaultValue={avgMileage}
        onChange={(event) => {
          setAvgMileage(event.target.value);
        }}
        step={1}
        min={1}
        max={50}
      />{" "}
      miles per day.
    </>
  );
};

export default TrailLength;
