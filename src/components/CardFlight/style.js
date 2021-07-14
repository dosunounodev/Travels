import styled, { css } from 'styled-components';

const StyledCard = styled.article`
  display: flex;
  flex: 1 0 280px;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  max-width: 500px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fafafa;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3), 2px 2px 10px rgba(0, 0, 0, 0.2),
    1px 1px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  &:hover {
    background-color: #1380c0;
    span {
      color: #fff;
    }
  }
  ${({ isSelectedCard }) =>
    isSelectedCard &&
    css`
      background-color: #1380c0;
    `}
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 200px; */
  padding: 0 10px;

  p {
    width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: center;
  }

  span {
    display: block;
    color: #1380c0;
  }
  ${({ isSelectedCard }) =>
    isSelectedCard &&
    css`
      span {
        color: #fff;
      }
    `}
`;

export { StyledCard, ImageWrapper, DataWrapper };
