import { Icon } from "@iconify/react";
import strings from "../../../common/constants/strings";

function TrustBarSection() {
  const { trustBar } = strings.home;

  return (
    <section className="border-y border-neutral-200 bg-neutral-100">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 text-center sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-neutral-200">
        {trustBar.items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 md:px-4">
            <Icon icon={item.icon} width={24} height={24} className="text-primary-600" />
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900 sm:text-sm">
              {item.label}
            </p>
            <p className="text-[11px] text-neutral-500">{item.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBarSection;
