import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  max-width: var(--app-width);
  min-height: 100vh;
  background-color: var(--color-wh);
  overflow: hidden;

  @media (max-width: 840px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
