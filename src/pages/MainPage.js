import { Input, Form, Button, Icon } from 'semantic-ui-react';
import React, { useState } from 'react';
import { FormFeedback } from 'reactstrap';

// import { useHistory } from 'react-router-dom';


const MainPage = () => {
    const [messageInput, setMessageInput] = useState("");
    const [username, setUsername] = useState("Karen");
    // const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(messageInput)
        setMessageInput("")
        // history.push("/")
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setMessageInput(e.target.value)
    }

    // Form validation
    const characterLimit = () => {
        console.log(messageInput.length);
        if (!messageInput.length) {
            return null;
        }
        if (messageInput.length >= 500) {
            return { invalid: true };
        } else {
            return { valid: true }
        }
    };

    const characterLimitFormFeedback = () => {
        if (!messageInput.length) {
            return null;
        }
        if (messageInput.length >= 500) {
            return <FormFeedback invalid>You've exceeded character count of 500</FormFeedback>
        }
        else
            return <FormFeedback valid></FormFeedback>
    };


    return (

        <div className="container-fluid row mt-3 justify-content-center" >

            {/* SIDE BAR */}
            <div className="col-md-1" style={{ backgroundColor: "#666666", color: "#d9d9d9" }}>
                <p>Side bar thingy</p>
            </div>

            {/* USERS PANEL */}
            <div className="col-md-2" style={{ backgroundColor: "#333333", color: "#d9d9d9" }} >
                <p>Show Users</p>
            </div>

            {/* LIVE CHAT */}
            <div className="col-md-6 pb-2" style={{ backgroundColor: "#666666", color: "#d9d9d9" }}>
                <p>Show chats</p>

                <Form onSubmit={handleSubmit}>
                    <Form.Field onChange={handleChange} value={messageInput} {...characterLimit()}
                        id='form-input-control-error-email'
                        control={Input}
                        placeholder='New message'
                        error={{
                            content: "You've exceeded character count of 500",
                            pointing: 'below',
                        }}
                    >
                        {/* <Input onChange={handleChange} value={messageInput} placeholder="New message" type="text" {...characterLimit()} /> */}
                    </Form.Field>
                    {characterLimitFormFeedback()}
                    <Button icon disabled={!(messageInput)}>
                        <Icon name='send' />
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default MainPage;