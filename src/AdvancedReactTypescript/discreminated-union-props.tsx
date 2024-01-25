// Discreminated Union Types
// Destructuring Discriminated Union Types

// Adding a Props Required Across Discriminated Union Variant

type ModalProps =
  | {
      varient: 'no-title';
    }
  | {
      varient: 'title';
      title: string;
    };

export const Modal = (props: ModalProps) => {
  if (props.varient === 'no-title') {
    return <div>No title</div>;
  } else {
    const { title } = props;
    return <div>Title : {title}</div>;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal varient="title" title="Hello" />
      <Modal varient="no-title" />

      <Modal varient="title" title="Test" />

      <Modal varient="no-title" />
    </div>
  );
};
