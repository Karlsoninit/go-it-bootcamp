import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  flex-basis: 100%;
  border: 1px solid black;
  min-height: 100%;
`

export const Sidebar = styled.div`
  width: 30%;
  min-height: 100vh;
  border: 1px solid black;
  
`

export const ContentBox = styled.div`
  width: 70%;
  min-height: 100vh;
  border: 1px solid black;
`

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    border: 1px solid #DDDFE2;
    margin: 20px auto 0;
    min-height: 350px;
    //border-radius: 5px;
    background: white;
`

export const StyledButton = styled.button`
    width: 55%;
    margin:  0 auto 10px;
    // border: 2px solid blue;
    //border-radius: 5px;
    outline: none;
    // color: blue;
    height: 25px;
    //font-weight: bold;
    background-color: blue;
    color: white;
    font-size: 16px;
    &:hover {
        background: #E9EBEE;
        color: blue;
        border: none;
        
    }
    
`

export const ImgUserProfile = styled.div`
    width: 70%;
    height: 120px;
    border: 2px solid blue;
    margin: 30px auto 40px;
    //border-radius: 5px;
`
