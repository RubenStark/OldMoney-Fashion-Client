const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export default async function getStoreName() {
  const res = await fetch(`${URL}`);

  return res.json();
}
