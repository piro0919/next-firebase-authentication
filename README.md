## Overview

`next-firebase-authentication` makes it easy to connect Next.js to Firebase Authentication.

## Example

- [Demo](https://next-firebase-authentication.kk-web.link)
- [Source code](https://github.com/piro0919/next-firebase-authentication)

## Getting Started

### 1. Install

```
npm i -S next-firebase-authentication
```

```
yarn add next-firebase-authentication
```

### 2. Set environment variables

```
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_APP_ID="..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="..."
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="..."
```

If you want to verify id token, add the following environment variables.

```
FIREBASE_CLIENT_EMAIL="..."
FIREBASE_PRIVATE_KEY="..."
FIREBASE_PROJECT_ID="..."
```

### 3. Initialize Firebase Authentication with `App` component

`_app.tsx`

```tsx
import useInitAuth from "hooks/useInitAuth";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useInitAuth();

  return <Component {...pageProps} />;
}

export default MyApp;
```

## Reference

### useInitAuth

Initialize Firebase Authentication.

Make sure to call it only once with `App` component.

- isSignedIn: boolean
- userCredential?: object

### useSignIn

It's hooks about signing in.

- signInWithFacebook: function
- signInWithGoogle: function
- signInWithTwitter: function

### useSignOut

It's hooks about signing out.

- isSignedOut: boolean
- signOut: function

### useUser

It's hooks about user.

- error: Error
- isLoading: boolean
- user: object

### verifyIdToken

It is a function that does verify for id token.

Can be used with `getServerSideProps` and `api`.

It is also possible to use indirectly from `middleware`.

## License

MIT
