import { ITerminus } from "../data/trails";

interface IProps {
  label: string;
  terminus: ITerminus;
}

const TrailTerminus = ({ label, terminus }: IProps) => {
  return (
    <>
      {label}:{" "}
      <a
        href={`https://maps.google.com/?q=${terminus.location.latitude},${terminus.location.longitude}`}
        target="_blank"
      >
        {terminus.name + ", " + terminus.city + ", " + terminus.region}
      </a>
    </>
  );
};

export default TrailTerminus;
