import {
  Container,
  InputInnerContainer,
  ActionButton,
  ShortLinkBox,
  CopyButton,
} from "../styles/styled-components";
import { useState, useEffect } from "react";
import { FaClipboardList } from "react-icons/fa";

const LinksShortener = () => {
  const [link, setLink] = useState(null);
  const [copied, setCopied] = useState(false);
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //API call
  const handleGetLinks = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLink(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("There was an error");
    }
  };

  //Get inputfield value
  const handleGetValue = (e) => {
    setInput(e.target.value);
  };

  //API result JSX
  const ShowResults = ({ link, setErrorMessage, setCopied }) => {

    const handleCopyToClipboard = () => {
      const textToCopy = link.result.short_link;
      navigator.clipboard.writeText(textToCopy).then(
        function () {
          setCopied(true);
          setErrorMessage("");
        },
        function (err) {
          console.error(err);
        }
      );
    };

    return (
          <ShortLinkBox>
            <h3>{link.result.short_link}</h3>
            <CopyButton onClick={handleCopyToClipboard}>
              <FaClipboardList /> {copied ? "Copied!" : "Copy Link" }
            </CopyButton>
          </ShortLinkBox>
    );
  };

  return (
    <>
      <Container>
        <InputInnerContainer>
          <input
            onChange={handleGetValue}
            value={input}
            type="text"
            placeholder="Place link here..."
          />
          <ActionButton onClick={handleGetLinks}>Shorten Link</ActionButton>
        </InputInnerContainer>
      </Container>
      <Container>
        {link && !errorMessage && (
          <ShowResults
            link={link}
            setErrorMessage={setErrorMessage}
            setCopied={setCopied}
          />
        )}
        {errorMessage && <h3>{errorMessage}</h3>}
      </Container>
    </>
  );
};

export default LinksShortener;
