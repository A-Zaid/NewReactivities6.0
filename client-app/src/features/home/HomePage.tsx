import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
export default function HomePage() {
  return (
<Segment textAlign="center" vertical inverted className="masthead">
  <Container text>
    <Header as='h1' inverted>
      <Image size="massive" src='/assets/logo.png' alt='logo' style={{ marginBottom: 12}} />
      Reactivities
    </Header>
    <Header inverted as='h2' content='Welcome to Reactivities'></Header>
    <Button inverted as={Link} to='/activities' size="huge">Take me to the Activities!</Button>
  </Container>
</Segment>
  );
}
