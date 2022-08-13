import Link from "../../node_modules/next/link";
import Badge from "../../node_modules/react-bootstrap/esm/Badge";

interface IProps {
  slug: string;
  name: string;
  length: number;
  offRoadLength: number;
}

// TODO: improve pill responsive
const TrailName = ({ slug, name, length, offRoadLength }: IProps) => {
  const offRoadPercent = Math.ceil((offRoadLength / length) * 100);
  const offRoadDisplay = offRoadPercent
    ? `${offRoadPercent}%* off road`
    : "off road amount unknown";

  const decidePillColor = (percent) => {
    if (!percent) return "secondary";
    if (percent > 80) return "success";
    if (percent > 50) return "warning";
    return "danger";
  };

  const pillColor = decidePillColor(offRoadPercent);

  return (
    <>
      <Link
        href={`/hikes/${slug}`}
        style={{ textTransform: "capitalize", fontWeight: 700 }}
      >
        {name}
      </Link>{" "}
      <Badge pill bg={pillColor}>
        {offRoadDisplay}
      </Badge>
    </>
  );
};

export default TrailName;
