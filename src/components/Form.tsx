import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { diagnoseImage } from "../modules/prediction.slice";

const Form = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState<any>();
  const { isLoading, predicted_result } = useTypedSelector(
    (state) => state.prediction
  );

  useEffect(() => {
    if (!isLoading && predicted_result) {
      alert(predicted_result);
    }
  }, [isLoading, predicted_result]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("file", file);
          dispatch(diagnoseImage(formData));
        }}
      >
        <input
          type='file'
          name='file'
          onChange={(e) => {
            if (e.target.files) {
              console.log(e.target.files[0]);
              setFile(e.target.files[0]);
            }
          }}
        />
        <input type='submit' />
      </form>
    </>
  );
};

export default Form;
