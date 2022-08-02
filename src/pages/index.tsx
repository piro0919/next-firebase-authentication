import useUser from "hooks/useUser";
import Link from "next/link";

function Pages(): JSX.Element {
  const { isLoading, user } = useUser();

  return (
    <>
      <dl className="list">
        <dt>isLoading</dt>
        <dd>{JSON.stringify(isLoading)}</dd>
        <dt>user.uid</dt>
        <dd>{user?.uid || "none"}</dd>
      </dl>
      <div className="linksWrapper">
        {user ? (
          <Link href="/signout">
            <a>Sign out</a>
          </Link>
        ) : (
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        )}
        <Link href="/verify">
          <a>Verify id token</a>
        </Link>
        <Link href="/verify-by-middleware">
          <a>Verify id token by middleware</a>
        </Link>
      </div>
      <style jsx>{`
        .list {
          display: grid;
          grid-template: auto / auto auto;
          justify-content: flex-start;
        }
        .linksWrapper {
          display: flex;
          gap: 12px;
        }
      `}</style>
    </>
  );
}

export default Pages;
