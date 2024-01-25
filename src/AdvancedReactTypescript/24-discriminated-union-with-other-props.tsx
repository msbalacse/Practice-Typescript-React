// Discreminated Union Types
// Destructuring Discriminated Union Types

// Adding a Props Required Across Discriminated Union Variant

// type ModalProps = (
//   | {
//       varient: 'no-title';
//     }
//   | {
//       varient: 'title';
//       title: string;
//     }
// ) & {
//   buttonColor: string;
// };

type VariantModalProps =
  | {
      variant: 'no-title';
    }
  | {
      variant: 'title';
      title: string;
    };

type ModalProps = VariantModalProps & {
  buttonColor: string;
};
/**
 *How to we add a `buttonColor` prop to the ModelProps type that is _always_ required across different variants?
 *
 */
/** Solution: The best way to add this using intersection to add the props*/

export const Modal = (props: ModalProps) => {
  if (props.variant === 'no-title') {
    return (
      <div>
        <span>No title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  } else {
    const { title } = props;
    return <div>Title : {title}</div>;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" buttonColor="#000" />
      <Modal variant="no-title" buttonColor="blue" />

      <Modal variant="title" title="Test" buttonColor="#fff" />

      <Modal variant="no-title" buttonColor="orange" />
    </div>
  );
};
