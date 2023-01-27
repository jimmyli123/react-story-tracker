
import './App.css';
import StoryCard from './components/StoryCard';
import {Container, Stack, Button} from 'react-bootstrap'

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal">
        <StoryCard/>
        <StoryCard/>
      </Stack>
      

    </Container>

  );
}

export default App;
