import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;

  & input {
    margin-left: 20px;
    height: 25px;
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: 250ms ease;
  margin-left: 50px;

  &:hover {
    background-color: greenyellow;
  }
`;
