import type { BlizzardAccessToken } from "../models/blizzardAccessToken.ts";

type ResponseAccessToken = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

const GetBlizzardAPIToken = async (): Promise<BlizzardAccessToken> => {
  const response = await fetch("https://eu.oauth.battle.net/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        btoa(
          `${process.env.BLIZZARD_API_CLIENT_ID}:${process.env.BLIZZARD_API_CLIENT_SECRET}`,
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  const data = (await response.json()) as ResponseAccessToken;

  const token: BlizzardAccessToken = {
    AccessToken: data.access_token,
    ExpiresIn: data.expires_in,
    TokenType: data.token_type,
  };

  return token;
};

export { GetBlizzardAPIToken };
