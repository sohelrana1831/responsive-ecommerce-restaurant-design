import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
export const CartContainer = styled.div `
    color: yellow;
    left: 20px;
    box-shado: 0 0 3px 0 rgba(0,0,0,.2);
    background-color: transparent;
    border-radius: 4px;
    top: 50%;
    height: 50px;
    opacity: 1;
    position: fixed;
    transition: all .4s ease;
    visibility: visible;
    width: 50px;
    z-index: 10000;
    padding: 5px;

    span {
        align-items: center;
        background-color: #fff;
        background-color: #000;
        border-radius: 50%;
        top: -10px;
        color: #fff;
        display: flex;
        height: 20px;
        justify-content: center;
        position: absolute;
        right: -2px;
        vertical-align: top;
        width: 20px;
    }
`;

export const CartIcon = styled(FaCartPlus)
`
font-size: 28px;
`;