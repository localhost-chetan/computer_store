import { cn } from "@/lib/utils";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Category = ({ className }: { className: string }) => {
  type CategoryType = {
    image?: string;
    category: string;
    href: string;
  };

  const categories: CategoryType[] = [
    {
      category: "Headsets",
      href: `/products/headsets`,
    },
    {
      category: "Processors",
      href: `/products/processors`,
    },
    {
      category: "Mouse",
      href: `/products/mouses`,
    },
    {
      category: "Motherboards",
      href: `/products/motherboards`,
    },
    {
      category: "Cabinets",
      href: `/products/cabinets`,
    },
    {
      category: "RAM",
      href: `/products/ram_modules`,
    },
    {
      category: "Graphics Cards",
      href: `/products/graphics_cards`,
    },
    {
      category: "Monitors",
      href: `/products/monitors`,
    },

    {
      category: "Keyboard",
      href: `/products/keyboards`,
    },
    {
      category: "Power Supply",
      href: `/products/power_supplies`,
    },
    {
      category: "Storage",
      href: `/products/storage_devices`,
    },

    {
      category: "Case Fans",
      href: `/products/case_fans`,
    },
    {
      category: "Air Coolers",
      href: `/products/air_coolers`,
    },
    {
      category: "AIO Liquid Coolers",
      href: `/products/aio_liquid_coolers`,
    },
  ];

  console.log(`Category component`);

  const router = useRouter();

  return (
    <Select
      items={categories}
      label={`All Categories`}
      aria-label={`Categories`}
      placeholder={`Choose category`}
      className={cn(`${className} select-none`)}
      radius={`none`}
      size={`sm`}
    >
      {({ category, href }) => {
        return (
          <SelectItem
            key={category}
            // textValue={category}
            value={category}
            onClick={() => router.push(href)}
          >
            {category}
          </SelectItem>
        );
      }}
    </Select>
  );
};

export default Category;
