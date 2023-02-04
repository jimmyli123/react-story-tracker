import { Modal, Button, Stack } from "react-bootstrap";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext";

export default function ViewStoriesModal({ show, handleClose }) {
    const stories = getStories()
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Stack direction="horizontal" gap="2">
                            <div>Stories</div>
                            {stories.map(story => (
                                <Stack direction="horizontal" gap="2" > 
                                <div className="me-auto fs-4">{story.name}</div>
                                <div className="me-auto fs-5">{story.category}</div>
                                </Stack>
                            ))}
                        </Stack>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    )
}