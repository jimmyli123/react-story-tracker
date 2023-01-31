import { Form, Modal, Button } from "react-bootstrap";
import { useRef } from "react" 
import { useStoryContext } from "../contexts/StoryContext";

export default function AddStoryModal({ show, handleClose }) {
    const nameRef = useRef();
    const categoryRef = useRef();
    const { addStory } = useStoryContext()
    function handleSubmit(e) {
        e.preventDefault()
        addStory(
            {
                name: nameRef.current.value,
                category: categoryRef.current.value
            }
        )
        handleClose()
    }
    return (
        <div> 
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Story</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>
                                Category
                            </Form.Label>
                            <Form.Control ref={categoryRef} type="text" required/>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">Add</Button>
                        </div>
                    </Modal.Body>
                </Form>

            </Modal>
        </div>
        )
}