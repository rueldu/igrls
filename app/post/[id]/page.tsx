import Section from "./section";

interface Props {
  params: { id: string };
}

async function getData(id: string) {
  const url = `${process.env.API_URL}/post`;
  const config: RequestInit = {
    method: "post",
    body: JSON.stringify({ id }),
    headers: {
      "content-type": "application/json",
      "user-agent": process.env.USER_AGENT!,
    },
    next: {
      revalidate: 60,
    },
  };

  const res = await fetch(url, config);

  if (res.status != 200) {
    throw new Error("server-error");
  }

  return res.json();
}

async function PostPage({ params }: Props) {
  const data = await getData(params.id);

  return (
    <main>
      <Section data={data} />
    </main>
  );
}

export default PostPage;