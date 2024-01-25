/**
 * Differentiating Props with a Boolean Discriminator
 */

type EmbeddedPlaygroundProps =
  | {
      // useStackblitz?: boolean;
      // stackblitzId?: string;
      // codeSandboxId?: string;
      useStackblitz: true;
      stackblitzId: string;
    }
  | {
      useStackblitz?: false;
      codeSandboxId: string;
    };

const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props.useStackblitz) {
    return (
      <iframe
        src={`https://stackblitz.com/edit/${props.stackblitzId}?embed=1`}
      ></iframe>
    );
  }

  return (
    <iframe
      src={`https://codesandbox.io/embed/${props.codeSandboxId}`}
    ></iframe>
  );
};

<>
  <EmbeddedPlayground useStackblitz stackblitzId="my-stackblitz-id" />

  <EmbeddedPlayground codeSandboxId="my-code-sandbox-id" />

  <EmbeddedPlayground codeSandboxId="my-code-sandbox-id" />

  <EmbeddedPlayground useStackblitz stackblitzId="my-stackblitz-id" />
</>;
