const API_KEY = process.env.REACT_APP_API_KEY

export function authHeader() {
    return {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: `${API_KEY}`,
    }
}