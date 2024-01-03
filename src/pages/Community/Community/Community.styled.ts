import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  line-height: 28px;
`;

export const Section = styled.div`
  border-top: 8px solid #f7f9fa;
  padding: 24px var(--global-padding);

  &#event,
  &#suggestItem {
    padding: 24px 0 24px var(--global-padding);

    ${TitleWrap} {
      padding-right: var(--global-padding);
    }
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const QuickLink = styled(Link)`
  font-size: 12px;
  color: #b4b4b4;
  font-weight: 500;
`;

export const BtnSubScribe = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border: 1px solid var(--color-gray-01);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-gray-02);
`;

export const BannerConatiner = styled.div`
  background-color: var(--color-bk);
  color: var(--color-wh);
  padding: 12px 16px;
  border-top: 8px solid #f7f9fa;
`;

export const BannerTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;

export const BannerDesc = styled.p`
  font-size: 16px;
  line-height: 28px;
`;
