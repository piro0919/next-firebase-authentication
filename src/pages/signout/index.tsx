import useSignOut from "hooks/useSignOut";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Signout(): JSX.Element {
  const { isSignedOut, signOut } = useSignOut();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedOut) {
      return;
    }

    router.replace("/");
  }, [isSignedOut, router]);

  return (
    <>
      <dl className="list">
        <dt>isSignedOut</dt>
        <dd>{JSON.stringify(isSignedOut)}</dd>
      </dl>
      <button onClick={signOut}>Sign out</button>
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

export default Signout;
