import Badge from "../../node_modules/react-bootstrap/esm/Badge";
import OverlayTrigger from "../../node_modules/react-bootstrap/esm/OverlayTrigger";
import Tooltip from "../../node_modules/react-bootstrap/esm/Tooltip";

interface IProps {
  slug: string;
  name: string;
  length: number;
  offRoadLength: number;
}

const TrailName = ({ name, length, offRoadLength }: IProps) => {
  const offRoadPercent = Math.ceil((offRoadLength / length) * 100);
  const offRoadDisplay = offRoadPercent
    ? `${offRoadPercent}%*`
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
      {name}
      {!!offRoadPercent && (
        <>
          {" "}
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                This is the percent of the trail that is off road. More off road
                is assumed to be better.
              </Tooltip>
            }
          >
            <Badge pill bg={pillColor}>
              {offRoadDisplay}
            </Badge>
          </OverlayTrigger>
        </>
      )}
    </>
  );
};

export default TrailName;
