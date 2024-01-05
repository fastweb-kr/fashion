import { StyleItem } from '../../../@types';
import * as S from './StyleWrite.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWriteData } from '../../../redux/modules/WriteSlice';
import { useStyleItems } from '../../../hooks';
import uuid from 'react-uuid';

const StyleWrite = () => {
  const dispatch = useDispatch();
  const { addStyleItem } = useStyleItems();

  const initialNewStyleItem: StyleItem = {
    id: uuid(),
    userId: 'admin',
    imgSrc: [],
    imgThumb: '',
    postDate: '',
    tag: [],
    content: '',
  };

  const [newStyleItem, setNewStyleItem] = useState(initialNewStyleItem);

  const handleAddStyleItem = () => {
    return addStyleItem(newStyleItem);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewStyleItem((prev) => ({ ...prev, content: value }));
    dispatch(setWriteData(newStyleItem));
  };

  return (
    <>
      <S.Container>
        <S.UploadImage>
          <h3>사진 올리기</h3>
          <p>10장까지 올릴 수 있어요.</p>
        </S.UploadImage>
        <S.InputText value={newStyleItem.content} onChange={handleOnChange} placeholder={`어떤 사람인지 짧은 소개로 시작해보세요. \n다양한 #태그도 추가할 수 있어요`} />
        <div>
          <button onClick={handleAddStyleItem}>올리기</button>
        </div>
      </S.Container>
    </>
  );
};

export default StyleWrite;
