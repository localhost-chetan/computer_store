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
      href: "/products",
    },
    {
      category: "RAM",
      href: "/products",
    },
    {
      category: "Motherboards",
      href: "/products",
    },
    {
      category: "Graphics Cards",
      href: "/products",
    },
    {
      category: "Monitors",
      href: "/products",
    },
    {
      category: "Mouse",
      href: "/products",
    },
    {
      category: "Keyboard",
      href: "/products",
    },
    {
      category: "Power Supply",
      href: "/products",
    },
    {
      category: "Storage",
      href: "/products",
    },
    {
      category: "Cabinets",
      href: "/products",
    },
    {
      category: "Case Fans",
      href: "/products",
    },
    {
      category: "Air Coolers",
      href: "/products",
    },
    {
      category: "AIO Liquid Coolers",
      href: "/products",
    },
    {
      category: "Headsets",
      href: "/products",
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
