import { useEffect, useState } from "react";

const TrailLength = ({ length }) => {
  const avgMilesPerDay = 15;
  const daysToHike = Math.ceil(length / avgMilesPerDay);
  const [hikingDuration, setHikingDuration] = useState(daysToHike);
  const [durationOption, setDurationOption] = useState("days");

  // changes displayed value for hike duration when user changes day/week/month option
  useEffect(() => {
    switch (durationOption) {
      case "days":
        setHikingDuration(daysToHike);
        break;
      case "weeks":
        setHikingDuration(Math.ceil(daysToHike / 7));
        break;
      case "months":
        setHikingDuration(Math.ceil((daysToHike / 30.4) * 10) / 10);
        break;
      default:
        break;
    }
  }, [durationOption]);

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
      at {avgMilesPerDay} miles per day.
    </>
  );
};

export default TrailLength;
