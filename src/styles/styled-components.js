import styled from "styled-components";

//--------Navigation---------//

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  align-items: center;
  flex: 1;
  margin: 1rem 0rem 2rem 0rem;
`;

//--------IMAGE-SECTION---------//

export const HeroImage = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 90%;
  }
`;

export const HeroText = styled.div`
  flex-basis: 65%;
  h1 {
  }
  h3 {
    font-weight: 400;
    color: hsl(260, 5%, 53%);
  }
`;

//--------LINKSHORTER-SECTION---------//

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputInnerContainer = styled.div`
  display: flex;
  max-width: 1000px;
  justify-content: space-around;
  flex: 1;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #eff1f7;

  input {
    width: 75%;
    padding: 1.2rem 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
    border: none;
  }
`;

export const ActionButton = styled.button`
  padding: 0.5rem 2rem;
  background: none;
  background-color: #30c59b;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  margin-left: 1rem;
  border-radius: 8px;

  &:hover{
    background-color: #269e7c;
  }
`;

export const ShortLinkBox = styled(InputInnerContainer)`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  border-radius: 0px;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
`;

export const CopyButton = styled(ActionButton)`
  padding: 1rem 1.8rem;
  margin:0rem;
`;
