import { countryCodes } from "../../data/countryCodes";

const RegionText = ({ termini: { terminusA, terminusB } }) => {
  return (
    <>
      {terminusB && terminusA.country != terminusB.country ? (
        <>
          Countries: {countryCodes[terminusA.country]},{" "}
          {countryCodes[terminusB.country]}
        </>
      ) : (
        <>Country: {countryCodes[terminusA.country]}</>
      )}
    </>
  );
};

export default RegionText;
