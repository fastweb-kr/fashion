import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  gap: 8px;
  margin: 10px 0 15px 0;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 10px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-black-10);
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-black-20);
`;

export const Figure = styled.figure`
  width: 100%;
  height: 160px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
