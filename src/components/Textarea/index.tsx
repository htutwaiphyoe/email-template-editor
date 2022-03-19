import classes from "./style.module.css";

type TextareaProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({ value, onChange }: TextareaProps): JSX.Element {
  return (
    <textarea
      name=""
      id=""
      value={value}
      cols={30}
      rows={30}
      className={classes.textarea}
      onChange={onChange}
    />
  );
}

export default Textarea;
