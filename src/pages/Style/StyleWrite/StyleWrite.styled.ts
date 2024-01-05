import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px var(--global-padding);
  border-top: 1px solid var(--color-gray-01);
`;

export const UploadImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background-color: var(--color-gray-01);
  border-radius: 4px;
  line-height: 1.4;

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

export const InputText = styled.input`
  width: 100%;
  height: 150px;
  border: 1px solid var(--color-gray-03);
  margin-top: 8px;
  border-radius: 4px;
  padding: 16px;
  resize: none;

  &::placeholder {
    color: var(--color-gray-03);
  }
`;

export const ButtonWrap = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: var(--app-width);
  height: var(--bottom-appBar-height);
  box-sizing: border-box;
  padding: 8px;
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

export const Form = styled.form``;
