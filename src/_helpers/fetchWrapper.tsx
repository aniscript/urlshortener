import { authHeader } from "./authHeader";

type bodyProps = {
    domain: string;
    originalURL: string;
}

function post(url: string, body: bodyProps) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then((response) => response.json());
}

export const fetchWrapper = {
    post,
}