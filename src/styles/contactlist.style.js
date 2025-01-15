import styled from "styled-components";

export const ListContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 5px 0;
    font-size: 1rem;
    text-align: center;
  }
`;

export const ActionButton = styled.button`
  padding: 8px 12px;
  font-size: 0.9rem;
  color: white;
  background-color: ${(props) => (props.danger ? "#dc3545" : "#007bff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: ${(props) => (props.danger ? "#b02a37" : "#0056b3")};
  }
`;

export const EditInput = styled.input`
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
