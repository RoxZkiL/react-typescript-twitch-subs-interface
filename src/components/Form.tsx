import useNewSubForm from '../hooks/userNewSub';
import { Sub } from '../types';
interface FromProps {
   onNewSub: (newSub: Sub) => void;
}

const Form = ({onNewSub}: FromProps) => {

    const [inputValues, dispatch] = useNewSubForm();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
        handleClearState();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClearState = () => {
        dispatch({
            type: "clear",
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