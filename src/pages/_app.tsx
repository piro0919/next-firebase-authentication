import useInitAuth from "hooks/useInitAuth";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { isSignedIn } = useInitAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      return;
    }

    router.replace("/");
  }, [isSignedIn, router]);

  return <Component {...pageProps} />;
}

export default MyApp;
