import Loader from "@/components/common/Loader";

export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Loader label="Loading products..." />
    </div>
  );
}
