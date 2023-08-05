import Table from "../UI/table";

export default function homePage() {
  return (
    <div className="mx-auto w-1/2">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <h1>Messages</h1>
      <div className="mx-auto max-w-3xl">
        <Table />
      </div>
    </div>
  );
}
