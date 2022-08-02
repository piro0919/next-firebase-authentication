import useSignIn from "hooks/useSignIn";
import useUser from "hooks/useUser";

function Signin(): JSX.Element {
  const { isLoading } = useUser();
  const { signInWithGoogle } = useSignIn();

  return (
    <>
      <dl className="list">
        <dt>isLoading</dt>
        <dd>{JSON.stringify(isLoading)}</dd>
      </dl>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
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

export default Signin;
