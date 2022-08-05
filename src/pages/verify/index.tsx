import verifyIdToken from "libs/verifyIdToken";
import { GetServerSideProps } from "next";

export type VerifyProps = {
  signInProvider: string;
};

function Verify({ signInProvider }: VerifyProps): JSX.Element {
  return (
    <>
      <dl className="list">
        <dt>signInProvider</dt>
        <dd>{signInProvider}</dd>
      </dl>
      <style jsx>{`
        .list {
          display: grid;
          grid-template: auto / auto auto;
          justify-content: flex-start;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<VerifyProps> = async (
  ctx
) => {
  try {
    const {
      firebase: { sign_in_provider: signInProvider },
    } = await verifyIdToken(ctx);

    return {
      props: { signInProvider },
    };
  } catch {
    return {
      props: { signInProvider: "none" },
    };
  }
};

export default Verify;
