import { authHeader } from "./auth-header";

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
  return fetch(url, requestOptions).then((response) => response.json()).then((data)=> data.shortURL);
}

export const fetchWrapper = {
    post,
}