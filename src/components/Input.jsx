export const Input = ({ name, id, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type='number' id={id} required value={value} onChange={setValue} />
    </div>
  );
};
