// import './App.css';
import StoryCard from './components/StoryCard';
import {useState} from 'react'
import { Container, Stack, Button } from 'react-bootstrap'

function App() {

  const [showAddStoryModal, setShowAddStoryModal] = useState(false);

  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap={2}>
        <h1 className="me-auto">What stories am I following?</h1>
        <Button variant="primary" onClick={() => setShowAddStoryModal(true)}>Add Story</Button>
        <Button variant="secondary">Bye</Button>
      </Stack>
      <StoryCard/>
        <StoryCard/>
    </Container>

    <AddStoryModal></AddStoryModal>
    </>

  );
}

export default App;
