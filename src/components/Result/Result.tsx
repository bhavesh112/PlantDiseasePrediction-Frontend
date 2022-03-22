import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import leaf from "./../../assets/leaf.svg";
import { CardTitle, Wrapper } from "../UploadForm/UploadForm.style";
import { ResultCard } from "./Result.style";
const isAvailable = [
  "Apple",
  "Blueberry",
  "Corn",
  "Grape",
  "Peach",
  "Pepper",
  "Potato",
  "Tomato",
];
const Result = () => {
  const { predicted_result, isLoading } = useTypedSelector(
    (state) => state.prediction
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!predicted_result && !isLoading) {
      navigate("/", {
        replace: true,
      });
    }
  }, [isLoading, predicted_result, navigate]);
  if (isLoading) return <Loader />;
  if (!predicted_result) return <Loader />;
  return (
    <>
      <Wrapper>
        <img src={leaf} alt='leaf' />
        <CardTitle mar>
          {predicted_result?.isHealthy
            ? "The leaf is healthy and the plant is"
            : "This leaf is found to be infected from"}
        </CardTitle>
        <ResultCard isHealthy={predicted_result?.isHealthy}>
          {isAvailable.includes(predicted_result.plant_name) && (
            <img
              src={require(`./../../assets/${predicted_result.plant_name}.svg`)}
              alt={predicted_result.plant_name}
            />
          )}
          <div>
            <div className='plant-name'>
              {predicted_result.plant_name +
                (predicted_result?.isHealthy
                  ? ""
                  : " - " + predicted_result.disease_name)}
            </div>

            {!predicted_result.isHealthy && predicted_result.wiki && (
              <a href={predicted_result.wiki} target='_blank' rel='noreferrer'>
                Wikipedia
              </a>
            )}
          </div>
        </ResultCard>
      </Wrapper>
    </>
  );
};

export default Result;
