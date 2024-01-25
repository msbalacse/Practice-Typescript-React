type ValueInputProps =
  | {
      value: string;
      onChange: ChangeEventHandler;
    }
  | {};

type InputProps = ValueInputProps & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label} <input {...props} />
      </label>
    </div>
  );
};

export const Test = () => {
  return (
    <div>
      <Input label="Greeting" value="hello" onChange={() => {}} />
      <Input label="Greeting" />

      <Input label="Greeting" value="hello" />

      <Input label="Greeting" onChange={() => {}} />
    </div>
  );
};
