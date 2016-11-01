import  React from 'react';
export default function Error(props) {
    const renderErrorLists = messages => {
        if (!Array.isArray(messages)) {
            messages = [messages];
        }
        return messages.map(message => {
            return (
                <li key={Date.now()}> {message}</li>
            );
        });
    };
    return (
        <div className="alert alert-danger">
            <ul >
                { renderErrorLists(props.messages)}
            </ul>
        </div>
    );
}