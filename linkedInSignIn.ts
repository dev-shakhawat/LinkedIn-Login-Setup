  const linkedInSignIn = () => {
    const clientId =
      import.meta.env.VITE_LINKEDIN_CLIENT_ID || "77hpr75y3n4oui";
    const redirectUri = "http://localhost:5173/auth/linkedin/callback";
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem("linkedin_oauth_state", state);

    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=openid%20profile%20email`;
    window.location.href = authUrl;
  };
