const BASE_URL = "http://localhost:3000";

const retrieveInterpretation = async (dream: string) => {
  const response = await fetch(`${BASE_URL}/interpretation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dream }),
  });
  const data = await response.json();
  return data;
};

export { retrieveInterpretation };
