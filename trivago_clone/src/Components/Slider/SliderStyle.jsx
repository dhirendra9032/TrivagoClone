import styled from "styled-components";

export default styled.div`
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  height: 350px;
  width: 90%;
  background-color: white;
  color: black;

  img {
    border-radius: 10px;
    margin: 0;
    width: 100%;
  }
  .detail {
    width: 100%;
    margin: auto;
    /* border: 1px solid red; */
    /* height: 250px; */
    font-size: 1vw;
    text-align: left;
  }
  .detail span {
    margin-left: 5px;
  }
  .detail :first-child {
    font-weight: 700;
  }
  .name {
    white-space: 12;
  }
  .rs {
    color: #028000;
  }
  .rs img {
    width: 8px;
  }
`;
