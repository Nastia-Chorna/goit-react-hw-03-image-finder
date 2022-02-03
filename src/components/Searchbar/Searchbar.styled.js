import styled from '@emotion/styled'
import { ImSearch } from 'react-icons/im';

export const Searchbar = styled.header`
display: flex;
justify-content: center;
align-items: center;
min-height: 50px;
border-radius: 5px;
padding-top: 12px;
padding-bottom: 12px;
margin-top: 10px;
color: #;
background-color: #b64db8;
`;

export const Form = styled.form`
display: flex;
align-items: center;
max-width: 600px;
`;

export const Button = styled.button`
color: black;
padding-left: 20px;
padding-right: 20px;
padding-top: 7px;
padding-bottom: 7px;
margin-right: 7px;
background-color: #f4fa41;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
  opacity: 1;
}
`;

export const Icon = styled(ImSearch)`
  color: black;  
`;


export const Input = styled.input`
padding-left: 70px;
padding-right: 70px;
padding-top: 7px;
padding-bottom: 7px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
`;