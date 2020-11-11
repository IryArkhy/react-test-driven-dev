import React, { Component } from 'react';
import { Form, FormGroup, FormControl,  FormLabel, Button } from 'react-bootstrap';

class Gift extends Component {
    state = {
        person: '',
        present: ''
     }

    render() {
        const { removeGift, gift } = this.props;
        return ( <div className='gift'>
            <Form>
                <FormGroup>
                <FormLabel>Person</FormLabel>
                    <FormControl className='input-person'
                    onChange={({target}) => this.setState({person: target.value})}
                    />
                </FormGroup>
                <FormGroup>
                <FormLabel>Present</FormLabel>
                    <FormControl className='input-present'
                    onChange={({target}) => this.setState({present: target.value})}
                    />
                </FormGroup>
            </Form>
            <Button className='btn-remove' onClick={() => removeGift(gift.id)}>Remove Gift</Button>
        </div> );
    }
}

export default Gift;