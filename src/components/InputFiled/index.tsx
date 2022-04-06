
interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent) => void
}
const InputTaskField = ({todo, setTodo,handleAdd}:Props) => {
    return <form className="form__input--submit" onSubmit={handleAdd}>
        <input type="text" className="form__input" value={todo} placeholder="Enter task"onChange={
            (e) => {
                setTodo(e.target.value);
            }
        } ></input>
        <button type="submit" className="btn__submit">Submit</button>
    </form>
}

export default InputTaskField