import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid var(--color-gray-01);
  padding: var(--global-padding);
`;

export const UploadImage = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background-color: var(--color-gray-01);
  border-radius: 4px;
  line-height: 1.4;

  & input {
    display: none;
  }

  & h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-gray-02);
  }

  & p {
    font-size: 14px;
    color: var(--color-gray-02);
  }
`;

export const InputWrap = styled.div``;

export const InputText = styled.input`
  width: 100%;
  height: 150px;
  border: 1px solid var(--color-gray-03);
  margin-top: 8px;
  border-radius: 4px;
  padding: 16px;
  resize: none;
  font-size: 13px;

  &::placeholder {
    color: var(--color-gray-03);
  }
`;

export const ButtonWrap = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: var(--app-width);
  height: var(--bottom-appBar-height);
  box-sizing: border-box;
  padding: 8px;
  background-color: var(--color-wh);
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--color-bk);
  color: var(--color-wh);
  font-size: 18px;
  font-weight: 600;
`;

export const Form = styled.div`
  & .swiper-slide {
    width: 25%;
    background-color: var(--color-gray-01);
    margin-right: 8px;
    border-radius: 4px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:first-child {
      margin-left: var(--global-padding);
    }

    &:last-child {
      margin-right: var(--global-padding);
    }
  }
`;

export const ImageListWrap = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;

  padding: 8px 0;

  & .swiper {
    width: 100%;
  }

  & ${UploadImage} {
    padding: 0 8px;
    width: 80px;
    max-height: 100px;
  }

  & h3 {
    font-size: 13px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;
