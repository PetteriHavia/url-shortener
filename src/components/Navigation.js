import {Container, InnerContainer, NavBar} from "../styles/styled-components" 
import GitLogo from "../assets/github-mark.png"

const Navigation = () => {
    return(
        <Container>
            <InnerContainer>
                <h2>LinkShorter</h2>
                <a href="https://github.com/PetteriHavia?tab=repositories"><img src={GitLogo} alt="GitHub" width="50px" height="50px"/></a>
            </InnerContainer>
        </Container>
    )
}

export default Navigation;