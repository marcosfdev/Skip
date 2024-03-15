import { isAuthenticated, user } from '$lib/stores/authStore';

// ...

export function signIn(email, password) {
  // ...
  return new Promise((resolve, reject) => {
    // ...
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        isAuthenticated.set(true);
        user.set({
          username: email,
          // Add other user properties if needed
        });
        resolve(result);
      },
      // ...
    });
  });
}

export function signOut() {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
  isAuthenticated.set(false);
  user.set(null);
}
