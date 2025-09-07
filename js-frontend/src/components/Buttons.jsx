export default function ButtonComponent(props) {
  return (
    <div>
      <button 
        className={`rounded-md flex gap-1 justify-center items-center ${props.style}`}
        onClick={props.onClick}
      >
        <div>{props.startIcon}</div>
        <div>{props.text}</div>
      </button>
    </div>
  );
}
