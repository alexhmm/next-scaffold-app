export default function Post({ params: { id } }: { params: { id: string } }) {
  return <div>{id}</div>;
}
