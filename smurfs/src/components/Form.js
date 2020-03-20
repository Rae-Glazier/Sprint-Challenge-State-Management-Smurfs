import React, {useState} from 'react';
import axios from 'axios';

function Form () {
    const [form, setForm] = useState({
        name: '',
        age: '',
        height: ''
    })
    
    const onSubmit = () => {
        axios.post('http://localhost:3333/smurfs', form)
            .then(res => {
                console.log(res)
                setForm(form = [...form, res])
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className='form'>
            <form onSubmit={onSubmit}>
                <input 
                    name='name'
                    placeholder= 'Name'
                    value = {form.name}
                    onChange={onChange}
                />
                <br />
                <input 
                    name='age'
                    placeholder= 'Age'
                    value = {form.age}
                    onChange={onChange}
                />
                <br />
                <input 
                    name='height'
                    placeholder= 'Height'
                    value = {form.height}
                    onChange={onChange}
                />
                <br />
                <button type='submit'>Smurf It Up!!</button>
            </form>
        </div>
                        
    )
}

export default Form;