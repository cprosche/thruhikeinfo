import React from "react";
import { countryCodes } from "../../data/countryCodes";
import Table from "../../node_modules/react-bootstrap/esm/Table";

const TrailInfoTable = ({
  trail: {
    name,
    length,
    aliases,
    terminusA,
    terminusB,
    trailAssociation,
    type,
    continent,
  },
}) => {
  return (
    <Table striped bordered style={{ backgroundColor: "white" }}>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{name}</td>
        </tr>
        {aliases && (
          <tr>
            <td>Other Name(s)</td>
            <td>{aliases.join(", ")}</td>
          </tr>
        )}
        <tr>
          <td>Length</td>
          <td>
            {length} miles ({Math.ceil(length * 1.61)} kilometers)
          </td>
        </tr>
        <tr>
          <td>Type</td>
          <td>{type}</td>
        </tr>
        <tr>
          <td>Continent</td>
          <td>{continent}</td>
        </tr>
        {trailAssociation && (
          <tr>
            <td>Trail Association</td>
            <td>
              <a href={trailAssociation.url}>{trailAssociation.name}</a>
            </td>
          </tr>
        )}
        {type === "Linear" ? (
          <>
            <tr>
              <td>Terminus A</td>
              <td>
                <a
                  href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
                  target="_blank"
                >
                  {terminusA.name +
                    ", " +
                    terminusA.city +
                    ", " +
                    terminusA.region +
                    ", " +
                    countryCodes[terminusA.country]}
                </a>
              </td>
            </tr>
            <tr>
              <td>Terminus B</td>
              <td>
                <a
                  href={`https://maps.google.com/?q=${terminusB.location.latitude},${terminusB.location.longitude}`}
                  target="_blank"
                >
                  {terminusB.name +
                    ", " +
                    terminusB.city +
                    ", " +
                    terminusB.region +
                    ", " +
                    countryCodes[terminusB.country]}
                </a>
              </td>
            </tr>
          </>
        ) : (
          <>
            <tr>
              <td>Recommended Start</td>
              <td>
                <a
                  href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
                  target="_blank"
                >
                  {terminusA.name +
                    ", " +
                    terminusA.city +
                    ", " +
                    terminusA.region +
                    ", " +
                    countryCodes[terminusA.country]}
                </a>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </Table>
  );
};

export default TrailInfoTable;
