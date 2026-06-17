import Loader from "@/components/common/Loader";

export default function ProductDetailLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Loader label="Loading product details..." />
    </div>
  );
}
