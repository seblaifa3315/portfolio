import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`

export const Img = styled.img`
  width:200px;
  height:200px;
  overflow: hidden;
  border-radius: 100%;
  opacity: 0.5;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 50px;
  



  
  

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100px;
    height:100px;
    margin-left: 5px;
    margin-top: 10px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100px;
    height:100px;
    margin-left: 5px;
    margin-top: 10px;
  }

`
;

