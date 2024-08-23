import styled from "styled-components";

const NameStyle = styled.div.attrs<{ error: boolean }>((props) => ({
  error: props.error,
}))`
  margin-bottom: 1rem;
  & input,
  & label {
    display: block;
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & input {
    background: ${(props) => (props.error ? "#bd6d5b" : "")};
  }
  & input,
  & select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  & input:focus {
    outline: none;
    border-color: #240370;
    background-color: ${(props) => (props.error ? "#bd6d5b" : "#b0edab")};
  }
`;
export default NameStyle