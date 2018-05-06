import React, {Component} from 'react';
import { UserProfileContainer , StyledButton, ImgUserProfile } from '../../ui/index'



export default class UserProfile extends Component{

    render(){
        return(
            <UserProfileContainer>
                <ImgUserProfile>

                </ImgUserProfile>

                <StyledButton>
                    Statistic
                </StyledButton>
                <StyledButton>
                    Topic of the day
                </StyledButton>
                <StyledButton>
                    User list
                </StyledButton>
                <StyledButton>
                    I am here
                </StyledButton>
                <StyledButton>
                    Log out
                </StyledButton>
            </UserProfileContainer>
        )
    }
}