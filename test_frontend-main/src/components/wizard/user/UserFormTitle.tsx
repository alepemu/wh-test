export default function UserFormTitle({ title }: { title: string }) {
  return (
    <div className="title-wrapper">
      <h1>{title}</h1>
      <div className="title-underline" />
    </div>
  );
}
