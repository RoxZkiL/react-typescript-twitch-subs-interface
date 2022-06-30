import React, { SetStateAction, useState } from 'react'
import { Sub } from '../types';

interface FormState {
    inputValues: Sub,
}

interface FromProps {
   onNewSub: (newSub: Sub) => void;
}

const Form = ({onNewSub}: FromProps) => {

    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: "",
        subMonths: 0,
        avatar: "",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder='nick'/>
            <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder='avatar'/>
            <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder='subMonths'/>
            <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder='description'/>
            <button type='button'>Input Cleaner</button>
            <button type='submit'>Save New Sub</button>
        </form>
    </div>
  )
}

export default Form