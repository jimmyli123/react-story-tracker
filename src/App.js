// import './App.css';
import StoryCard from './components/StoryCard';
import { Container, Stack, Button } from 'react-bootstrap'

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap={2}>
        <h1 className="me-auto">What stories am I following?</h1>
        <Button variant="primary">Add Story</Button>
        <Button variant="secondary">Bye</Button>
      </Stack>
      <StoryCard/>
        <StoryCard/>
    </Container>

  );
}

export default App;
