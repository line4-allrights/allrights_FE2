import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";
import { NavLink } from "react-router-dom";


const MainButton = styled.button`
    min-width: 3.5vw;  
    height: 2.2vw;
    padding:0.5vw 1.2vw;
    background-color: ${(props) => props.variant === 'white' ? colors.white : colors.mainBlue};
    border-radius: 1.8vw;
    border: none;
    font-size: 0.8vw;
    font-weight: 600;
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    color: ${props => props.variant === 'white' ? colors.mainBlue : colors.white};
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    
    

    &:hover {
        cursor: pointer;
    }
`;

const ButtonMain = ({ buttonText, linkTo, ...rest }) => {
    return (
        <NavLink to={linkTo} style={{ textDecoration: 'none'}}>
            <MainButton {...rest}>
                {buttonText}
             </MainButton>
        </NavLink>
    );
};

export default ButtonMain;
