import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  flex-direction: column;
  border-radius: 15px;
`;
export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 5px solid #44bba4;
  box-shadow: 5px 5px 10px 0px #a4bac1;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster Two", cursive;
  text-align: center;
  font-size: 50px;
  color: #2b3a40;
  text-transform: capitalize;
`;

export const Block = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  z-index: 2;

  border-bottom: 1px solid #dce7eb;
  background: #fff;
  line-height: 1.5;
`;
export const BlockControl = styled.div`
  display: flex;
  padding: 15px 15px 15px 30px;
  align-items: center;
  text-align: left;
  cursor: pointer;
  svg {
    margin-right: 15px;
    color: #44bba4;
  }
`;
export const BlockContent = styled.div`
  display: flex;
  padding: 0 40px 10px 60px;
`;
