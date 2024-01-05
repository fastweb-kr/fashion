import { StyleItem } from '../../../@types';
import * as S from './StyleWrite.styled';
import React, { useEffect, useState } from 'react';
import { useGetDistanceToRight, useStyleItems } from '../../../hooks';
import uuid from 'react-uuid';
import { useFileSelect } from '../../../hooks/useFileSelect';
import { Swiper, SwiperSlide } from 'swiper/react';

const StyleWrite = () => {
  const initialNewStyleItem: StyleItem = {
    id: uuid(),
    userId: 'admin',
    imgSrc: [],
    imgThumb: '',
    postDate: '',
    tag: [],
    content: '',
    comments: [],
  };

  const { addStyleItem } = useStyleItems();
  const positionX = useGetDistanceToRight();
  const { fileUrl, handleFileSelect } = useFileSelect();
  const [newStyleItem, setNewStyleItem] = useState(initialNewStyleItem);

  const [imgSrcArray, setImgSrcArray] = useState<string[]>([]);

  const buttonPosition = { right: positionX };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewStyleItem((prev) => ({ ...prev, content: value }));
  };

  const handleUpload = async () => {
    if (fileUrl) {
      const updatedStyleItem = { ...newStyleItem, imgThumb: imgSrcArray[0], imgSrc: imgSrcArray };
      addStyleItem(updatedStyleItem);
    }
  };

  const pushImgSrcArray = () => {
    if (fileUrl) {
      setImgSrcArray((prev) => [...prev, fileUrl]);
    }
  };

  useEffect(() => {
    pushImgSrcArray();
  }, [fileUrl]);

  return (
    <>
      <S.Container>
        <S.Form>
          {imgSrcArray.length === 0 ? (
            <S.UploadImage>
              <input type="file" accept="image/*" onChange={handleFileSelect} />
              <h3>사진 올리기</h3>
              <p>10장까지 올릴 수 있어요.</p>
            </S.UploadImage>
          ) : (
            <>
              <S.UploadImage>
                <S.PreviewImage src={imgSrcArray[imgSrcArray.length - 1]} />
              </S.UploadImage>
              <S.ImageListWrap>
                <S.UploadImage>
                  <input type="file" accept="image/*" onChange={handleFileSelect} />
                  <h3>사진 추가</h3>
                </S.UploadImage>
                <Swiper slidesPerView={'auto'}>
                  {imgSrcArray.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                      <img src={imgSrc} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.ImageListWrap>
            </>
          )}
          <S.InputWrap>
            <S.InputText value={newStyleItem.content} onChange={handleOnChange} placeholder={`어떤 사람인지 짧은 소개로 시작해보세요. \n다양한 #태그도 추가할 수 있어요`} />
          </S.InputWrap>
          <S.ButtonWrap style={buttonPosition}>
            <S.SubmitButton onClick={handleUpload}>작성완료</S.SubmitButton>
          </S.ButtonWrap>
        </S.Form>
      </S.Container>
    </>
  );
};

export default StyleWrite;
