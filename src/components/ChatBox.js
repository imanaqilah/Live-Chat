import React from 'react';
import { Form, Input } from 'reactstrap';

const ChatBox = ({ input, setInput, handleSubmit }) => {

    return (
        <Form onSubmit={handleSubmit}>
            {input.length === 500 ? <small>Message should not be more than 500 characters</small> : null}
            <Input
                type="text"
                placeholder="New message"
                value={input}
                maxLength="500"
                onChange={(e) => { setInput(e.target.value) }}
            />
            <Input type="submit" value="Send" className="btn btn-primary" disabled={input.length === 0} />
        </Form>
    );
}

export default ChatBox;