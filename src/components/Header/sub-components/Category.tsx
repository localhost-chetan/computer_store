import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Category({ className }: { className: string }) {
  type CategoryType = {
    image?: string;
    category: string;
    href: string;
  };

  const categories: CategoryType[] = [
    {
      category: "Processors",
      href: "/products/processors",
    },
    {
      category: "RAM",
      href: "/products/ram_modules",
    },
    {
      category: "Motherboards",
      href: "/products/motherboards",
    },
    {
      category: "Graphics Cards",
      href: "/products/graphics_cards",
    },
    {
      category: "Monitors",
      href: "/products/monitors",
    },
    {
      category: "Mouse",
      href: "/products/mouse",
    },
    {
      category: "Keyboard",
      href: "/products/keyboards",
    },
    {
      category: "Power Supply",
      href: "/products/power_supplies",
    },
    {
      category: "Storage",
      href: "/products/storage",
    },
    {
      category: "Cabinets",
      href: "/products/cabinets",
    },
    {
      category: "Case Fans",
      href: "/products/case_fans",
    },
    {
      category: "Air Coolers",
      href: "/products/air_coolers",
    },
    {
      category: "AIO Liquid Coolers",
      href: "/products/aio_liquid_coolers",
    },
    {
      category: "Headsets",
      href: "/products/headsets",
    },
  ];

  console.log(`Category`);

  const router = useRouter();

  return (
    <Select
      items={categories}
      label={`All Categories`}
      aria-label={`Categories`}
      placeholder={`Choose category`}
      className={className}
      radius={`none`}
      size={`sm`}
    >
      {({ category, href }) => {
        return (
          <SelectItem
            key={category}
            value={category}
            onClick={() => router.push(href)}
          >
            {category}
          </SelectItem>
        );
      }}
    </Select>
  );
}
