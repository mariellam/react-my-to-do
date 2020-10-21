import React, {useState}  from 'react'

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="add-todos" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add your to dos"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;