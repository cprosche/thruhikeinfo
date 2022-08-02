import { useEffect, useState } from "react";

interface IProps {
  length: number;
  units: string;
}

const TrailLength = ({ length, units }: IProps) => {
  const milesToKm = 1.61;
  const defaultAvgDistance = 15;
  
  const [displayLength, setDisplayLength] = useState(length);
  const [avgDistance, setAvgDistance] = useState(defaultAvgDistance);
  const [hikingDays, setHikingDays] = useState(
    Math.ceil(displayLength / avgDistance)
  );
  const [hikingDuration, setHikingDuration] = useState(hikingDays);
  const [durationOption, setDurationOption] = useState("days");

  useEffect(() => {
    switch (units) {
      case "miles":
        setDisplayLength(length);
        setAvgDistance(defaultAvgDistance);
        break;
      case "kilometers":
        setDisplayLength(Math.ceil(displayLength * milesToKm));
        setAvgDistance(Math.ceil(avgDistance * milesToKm));
        break;
      default:
        break;
    }
  }, [units]);

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
    setHikingDays(Math.ceil(displayLength / avgDistance));
  }, [avgDistance, setHikingDays]);

  return (
    <>
      Length*: {displayLength} {units}, {hikingDuration}{" "}
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
        value={avgDistance}
        onChange={(event) => {
          setAvgDistance(event.target.valueAsNumber);
        }}
        step={1}
        min={1}
        max={80}
      />{" "}
      {units} per day.
    </>
  );
};

export default TrailLength;
