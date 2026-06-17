import type { ProductSpecification } from "@/types/product";

interface ProductSpecificationProps {
  specifications: ProductSpecification[];
}

export default function ProductSpecification({
  specifications,
}: ProductSpecificationProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <h2 className="bg-slate-50 px-5 py-3 text-lg font-semibold text-slate-900">
        Specifications
      </h2>
      <dl className="divide-y divide-slate-200">
        {specifications.map((spec) => (
          <div
            key={spec.label}
            className="grid grid-cols-2 gap-4 px-5 py-3 sm:grid-cols-3"
          >
            <dt className="text-sm font-medium text-slate-500">{spec.label}</dt>
            <dd className="col-span-1 text-sm text-slate-900 sm:col-span-2">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
