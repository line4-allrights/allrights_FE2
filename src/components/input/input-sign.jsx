import styled from "styled-components";
import colors from "../../styles/colors.js";

const InputBox = styled.input`
    width: 19vw;
    height: 2.2vw;
    border: 0.1vw solid ${colors.white};
    border-radius: 1.2vw;
    color: ${colors.navtext};
    font-size: 0.8vw;
    font-weight: 400;
    box-sizing: border-box;
    padding: 0 1vw 0 1vw;
`;

const InputSign = ({ type, placeholder, value, onChange }) => {
    return (
        <InputBox type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
};

export default InputSign;