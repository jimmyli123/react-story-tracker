import React from 'react'
import {Card} from 'react-bootstrap'

export default function StoryCard() {
  return (
    <Card className="bg-success">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            This is the card title.
        </Card.Title>
        This is the card body.
      </Card.Body>
    </Card>
  )
}
