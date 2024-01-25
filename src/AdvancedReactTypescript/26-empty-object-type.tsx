// const Component = (props: { config: {} }) => {
//   return <div />;
// };

const Component = (props: Record<string, never>) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */

<>
  <Component config={true} />
</>;
