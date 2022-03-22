import React, { useRef, useState } from "react";
import {
  CardTitle,
  FileName,
  FileSubmit,
  FileWrapper,
  UploadButton,
  Wrapper,
} from "./UploadForm.style";
import leaf from "./../../assets/leaf.svg";
import camera from "./../../assets/camera.svg";
import image from "./../../assets/image.svg";
import upload from "./../../assets/upload.svg";
import close from "./../../assets/close.svg";
import { diagnoseImage } from "../../modules/prediction.slice";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
const UploadForm = () => {
  const [file, setFile] = useState<any>();
  const fileRef = useRef<any>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <Wrapper>
        <img src={leaf} alt='leaf' />
        <CardTitle mar>Upload a picture of an infected leaf</CardTitle>
        <input
          type='file'
          name='file'
          id='file'
          hidden
          ref={fileRef}
          accept='.jpg,.png'
          onChange={onFileChange}
        />
        {!file ? (
          <CSSTransition timeout={200} classNames='upload-button'>
            <UploadButton htmlFor='file'>
              <img src={camera} alt='upload' />
              <span>Choose File </span>
            </UploadButton>
          </CSSTransition>
        ) : (
          <FileWrapper>
            <FileName>
              <img src={image} alt='logo' />
              <span>{file.name}</span>
              <img
                onClick={() => {
                  setFile(null);
                  if (fileRef.current) fileRef.current.files = null;
                }}
                src={close}
                alt='close'
                className='close'
                title='remove file'
              />
            </FileName>
            <FileSubmit
              onClick={(e) => {
                const formData = new FormData();
                formData.append("file", file);
                dispatch(diagnoseImage(formData));
                navigate("/result");
              }}
            >
              <img src={upload} alt='upload' />
              SUBMIT
            </FileSubmit>
          </FileWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default UploadForm;
