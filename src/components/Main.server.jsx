import { Link, Image } from "@shopify/hydrogen";

export default function Main() {
  return (
    <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
      <div className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Main component
      </div>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
        Main content
      </div>
    </section>
  );
}
