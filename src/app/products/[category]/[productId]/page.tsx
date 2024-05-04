import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import { FaShareAlt } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import { Review } from "@/lib/mongodb/models/User/type/userTypes";
import { TbTruckDelivery } from "react-icons/tb";
import { RiLoopLeftLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link";
import Container from "@/components/Container";
import ProductAssuranceCOD from "@/components/ProductAssuranceCOD";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import ImageSlider from "@/components/ProductComps/ProductSection/ImageSlider";
import WishListIcon from "@/components/ProductComps/ProductCardComps/WishListIcon";
import StarRating from "@/components/ProductComps/ProductCardComps/StarRating";
import PriceConvertor from "@/components/ProductComps/ProductCardComps/PriceConvertor";
import {
  AddToCart,
  BuyNow,
} from "@/components/ProductComps/ProductCardComps/ProductButtons";
import { Metadata } from "next";

type ProductDetailsPropType = {
  params: { category: string; productId: string };
};

const getData = async ({
  category,
  productId,
}: {
  category: string;
  productId: string;
}) => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/products/${category}/${productId}`,
  );

  const productData = await response
    .json()
    .then((data: CommonFields | any) => data);
  return productData;
};

export const generateMetadata = async ({
  params,
}: ProductDetailsPropType): Promise<Metadata> => {
  const productData = await getData(params);

  return {
    title: {
      absolute: productData.name,
      default: `FlashByte - Product Details`,
    },
    description: productData.description,
  };
};

const ProductDetails = async ({ params }: ProductDetailsPropType) => {
  const productData = await getData(params);

  return (
    <Container>
      <Breadcrumb productName={productData.name}>
        {productData.category}
      </Breadcrumb>

      <section
        className={`md:px-18 flex flex-col gap-x-4 py-7 sm:px-10 lg:flex-row lg:px-5`}
      >
        <ImageSlider productData={productData} />

        {/* Details */}
        <div
          className={`w-full space-y-6 bg-slate-100 px-5 py-8 shadow-lg shadow-gray-200 dark:bg-gray-900 dark:shadow-slate-800 md:px-5 lg:py-4`}
        >
          {/* Product Title */}
          <div className={`flex items-center justify-between gap-x-3`}>
            <h2
              className={`md:text-xxl line-clamp-3 text-pretty text-xl font-extrabold tracking-wide text-lime-950 dark:text-lime-100 sm:text-[1.4rem] lg:text-2xl`}
            >
              {productData.name}
            </h2>

            <div className={`flex items-center gap-x-2`}>
              <WishListIcon />
              <span className="sr-only">Add to Wishlist</span>

              <Button
                radius={`full`}
                size={`sm`}
                isIconOnly
                title={`Share this Product on Social Media`}
              >
                <FaShareAlt size={18} />
              </Button>

              <span className="sr-only">
                Share this Product on Social Media
              </span>
            </div>
          </div>

          {/* Rating */}
          <span className="sr-only">Customer Ratings and reviews</span>
          <StarRating
            size={20}
            showReviewCount={true}
            reviews={productData.reviews as Review[] | any}
            iconColor={"orange"}
          />

          {/* Pricing */}
          <span className="sr-only">Product Pricing</span>
          <div className={`flex items-center gap-x-2`}>
            <PriceConvertor
              price={productData.price}
              percentage={productData?.discount?.percentage as number}
              lg={`text-4xl`}
            ></PriceConvertor>

            <p className={`text-md text-slate-500 line-through`}>
              {Math.floor(productData?.price * 80).toLocaleString()}
            </p>
          </div>

          {/* Description */}
          <span className="sr-only">{productData.name} description</span>
          <p
            className={`text-pretty text-sm tracking-wide text-slate-800 dark:text-gray-200 md:text-base`}
          >
            {productData.description}
          </p>

          <ProductAssuranceCOD />

          {/* Cart/Purchase buttons */}
          <div
            className={`flex scale-95 flex-row items-center justify-evenly gap-x-10 pt-4 sm:scale-100 md:justify-start md:gap-6`}
          >
            <span className="sr-only">Add to cart button</span>
            <Tooltip
              content={`Click here to add product to the cart`}
              color={`primary`}
            >
              <AddToCart
                variant={`shadow`}
                radius={`sm`}
                productData={{
                  productId: productData.productId,
                  description: productData.description,
                  price: productData.price,
                  image: productData.imageURLs?.at(0),
                  productName: productData.name,
                  discountPercent: productData.discount?.percentage,
                }}
              />
            </Tooltip>

            <span className="sr-only">Buy Now button</span>
            <Tooltip
              content={`Click here to purchase this product`}
              color={`success`}
              placement={`right`}
            >
              <BuyNow
                color={`success`}
                variant={`shadow`}
                radius={`sm`}
              ></BuyNow>
            </Tooltip>
          </div>

          {/* Extra info */}
          <section
            className={`mt-5 flex w-fit flex-col justify-start border-1.5 border-solid border-slate-400 shadow-slate-200 drop-shadow-xl dark:border-gray-700 dark:shadow-gray-900`}
          >
            <div className={`flex items-center gap-4 px-5 py-4`}>
              {/* icon */}
              <TbTruckDelivery size={30} />
              {/* text */}
              <div className={`line-clamp-2 flex flex-col gap-y-1`}>
                <p className={`font-bold`}>Free Delivery</p>
                <Link
                  href={`#`}
                  className={`text-xs text-slate-600 underline underline-offset-2 dark:text-gray-400 md:text-sm`}
                >
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>

            <hr
              className={`border-1.5 border-slate-400 dark:border-gray-700`}
            />

            <div className={`flex items-center gap-4 px-5 py-4`}>
              {/* icon */}
              <RiLoopLeftLine size={30} />

              {/* text */}
              <div>
                <p className={`font-bold`}>Return Delivery</p>
                <p
                  className={`flex items-center gap-x-1 text-xs text-slate-600 underline underline-offset-2 dark:text-gray-400 md:text-sm`}
                >
                  <span> Free 7 Days Delivery Returns</span>
                  <Link href={``}>
                    <IoMdInformationCircleOutline size={18} />
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <hr
            className={`border-b-small border-solid border-gray-700 dark:border-slate-500`}
          />

          {/*Tech Specifications*/}

          <h3 className={`text-xl font-bold`}>Tech Specifications</h3>

          <table className={`flex flex-col`}>
            {(productData.category === "AIO Liquid Cooler" ||
              productData.category === "AIO Liquid Cooler") && (
              <tbody>
                {productData?.colour && (
                  <tr className={`details`}>
                    <td className={``}>Colour</td>
                    <td className={``}>{productData?.colour}</td>
                  </tr>
                )}

                {productData?.fanSize && (
                  <tr className={`details`}>
                    <td className={``}>Fan Size</td>
                    <td className={``}>{productData?.fanSize}</td>
                  </tr>
                )}

                {productData?.coolerType && (
                  <tr className={`details`}>
                    <td className={``}>Cooler Type</td>
                    <td className={``}>{productData?.coolerType}</td>
                  </tr>
                )}

                {productData?.lighting && (
                  <tr className={`details`}>
                    <td className={``}>Lighting</td>
                    <td className={``}>{productData?.lighting}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Headset" && (
              <tbody>
                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}

                {productData?.connectivity && (
                  <tr className={`details`}>
                    <td className={``}>Connectivity</td>
                    <td className={``}>{productData?.connectivity}</td>
                  </tr>
                )}

                {productData?.wireless_technology && (
                  <tr className={`details`}>
                    <td className={`text-pretty`}>WireLess Technology</td>
                    <td className={``}>{productData?.wireless_technology}</td>
                  </tr>
                )}

                {productData?.compatibility && (
                  <tr className={`details`}>
                    <td className={``}>Compatibility</td>
                    <td className={``}>{productData?.compatibility}</td>
                  </tr>
                )}

                {productData?.microphone && (
                  <tr className={`details`}>
                    <td className={``}>Microphone</td>
                    <td className={``}>{productData?.microphone && "True"}</td>
                  </tr>
                )}

                {productData?.noise_cancellation && (
                  <tr className={`details`}>
                    <td className={`text-pretty`}>Noise Cancellation</td>
                    <td className={``}>
                      {productData?.noise_cancellation && "True"}
                    </td>
                  </tr>
                )}

                {productData?.color && (
                  <tr className={`details`}>
                    <td className={`text-pretty`}>Color</td>
                    <td className={``}>{productData?.color}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Keyboard" && (
              <tbody>
                {productData?.type && (
                  <tr className={`details`}>
                    <td className={``}>Type</td>
                    <td className={``}>{productData?.type}</td>
                  </tr>
                )}

                {productData?.switchType && (
                  <tr className={`details`}>
                    <td className={``}>Switch Type</td>
                    <td className={``}>{productData?.switchType}</td>
                  </tr>
                )}

                {productData?.layout && (
                  <tr className={`details`}>
                    <td className={``}>Layout</td>
                    <td className={``}>{productData?.layout}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Processor" && (
              <tbody>
                {productData?.socketType && (
                  <tr className={`details`}>
                    <td className={``}>Socket Type</td>
                    <td className={``}>{productData?.socketType}</td>
                  </tr>
                )}

                {productData?.coureCount && (
                  <tr className={`details`}>  
                    <td className={``}>Core Count</td>
                    <td className={``}>{productData?.coureCount}</td>
                  </tr>
                )}

                {productData?.clockSpeed && (
                  <tr className={`details`}>
                    <td className={``}>Clock Speed</td>
                    <td className={``}>{productData?.clockSpeed}</td>
                  </tr>
                )}

                {productData?.manufacturer && (
                  <tr className={`details`}>
                    <td className={``}>Manufacturer</td>
                    <td className={``}>{productData?.manufacturer}</td>
                  </tr>
                )}

                {productData?.powerConsumptionWatts && (
                  <tr className={`details`}>
                    <td className={``}>Power Consumption (Watts)</td>
                    <td className={``}>{productData?.powerConsumptionWatts}</td>
                  </tr>
                )}

                {productData?.threadCount && (
                  <tr className={`details`}>
                    <td className={``}>Thread Count</td>
                    <td className={``}>{productData?.threadCount}</td>
                  </tr>
                )}

                {productData?.totalCacheMemoryMb && (
                  <tr className={`details`}>
                    <td className={``}>Total Cache Memory</td>
                    <td className={``}>{productData?.totalCacheMemoryMb}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "RAM Module" && (
              <tbody>
                {productData?.capacity && (
                  <tr className={`details`}>
                    <td className={``}>Capacity</td>
                    <td className={``}>{productData?.capacity}</td>
                  </tr>
                )}

                {productData?.type && (
                  <tr className={`details`}>
                    <td className={``}>Type</td>
                    <td className={``}>{productData?.type}</td>
                  </tr>
                )}

                {productData?.speed && (
                  <tr className={`details`}>
                    <td className={``}>Speed</td>
                    <td className={``}>{productData?.speed}</td>
                  </tr>
                )}

                {productData?.voltage && (
                  <tr className={`details`}>
                    <td className={``}>Voltage</td>
                    <td className={``}>{productData?.voltage}</td>
                  </tr>
                )}

                {productData?.formFactor && (
                  <tr className={`details`}>
                    <td className={``}>Form Factor</td>
                    <td className={``}>{productData?.formFactor}</td>
                  </tr>
                )}

                {productData?.casLatency && (
                  <tr className={`details`}>
                    <td className={``}>Cas Latency</td>
                    <td className={``}>{productData?.casLatency}</td>
                  </tr>
                )}

                {productData?.eccSupport && (
                  <tr className={`details`}>
                    <td className={``}>ECC Support</td>
                    <td className={``}>{productData?.eccSupport}</td>
                  </tr>
                )}

                {productData?.heatSpreader && (
                  <tr className={`details`}>
                    <td className={`text-pretty`}>Heat Spreader</td>
                    <td className={``}>
                      {productData?.heatSpreader && "True"}
                    </td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Motherboard" && (
              <tbody>
                {productData?.manufacturer && (
                  <tr className={`details`}>
                    <td className={``}>Manufacturer</td>
                    <td className={``}>{productData?.manufacturer}</td>
                  </tr>
                )}

                {productData?.socketType && (
                  <tr className={`details`}>
                    <td className={``}>Socket Type</td>
                    <td className={``}>{productData?.socketType}</td>
                  </tr>
                )}

                {productData?.formFactor && (
                  <tr className={`details`}>
                    <td className={``}>Form Factor</td>
                    <td className={``}>{productData?.formFactor}</td>
                  </tr>
                )}

                {productData?.chipset && (
                  <tr className={`details`}>
                    <td className={``}>Chipset</td>
                    <td className={``}>{productData?.chipset}</td>
                  </tr>
                )}

                {productData?.itemWeight && (
                  <tr className={`details`}>
                    <td className={``}>Weight</td>
                    <td className={``}>{productData?.itemWeight}</td>
                  </tr>
                )}

                {productData?.memoryClockSpeedMHz && (
                  <tr className={`details`}>
                    <td className={``}>Clock Speed (MHz)</td>
                    <td className={``}>{productData?.memoryClockSpeedMHz}</td>
                  </tr>
                )}

                {productData?.memoryTechnology && (
                  <tr className={`details`}>
                    <td className={``}>Memory Technology</td>
                    <td className={``}>{productData?.memoryTechnology}</td>
                  </tr>
                )}

                {productData?.numberOfUSB2Ports && (
                  <tr className={`details`}>
                    <td className={``}>USB 2 Ports</td>
                    <td className={``}>{productData?.numberOfUSB2Ports}</td>
                  </tr>
                )}

                {productData?.numberOfUSB3Ports && (
                  <tr className={`details`}>
                    <td className={``}>USB 3 Ports</td>
                    <td className={``}>{productData?.numberOfUSB3Ports}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Storage Device" && (
              <tbody>
                {productData?.capacity && (
                  <tr className={`details`}>
                    <td className={``}>Capacity</td>
                    <td className={``}>{productData?.capacity}</td>
                  </tr>
                )}

                {productData?.interface && (
                  <tr className={`details`}>
                    <td className={``}>Interface</td>
                    <td className={``}>{productData?.interface}</td>
                  </tr>
                )}

                {productData?.formFactor && (
                  <tr className={`details`}>
                    <td className={``}>Form Factor</td>
                    <td className={``}>{productData?.formFactor}</td>
                  </tr>
                )}

                {productData?.type && (
                  <tr className={`details`}>
                    <td className={``}>Type</td>
                    <td className={``}>{productData?.type}</td>
                  </tr>
                )}

                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}

                {productData?.warranty && (
                  <tr className={`details`}>
                    <td className={``}>Warranty</td>
                    <td className={``}>{productData?.warranty}</td>
                  </tr>
                )}

                {productData?.powerConsumption && (
                  <tr className={`details`}>
                    <td className={``}>Power Consumption</td>
                    <td className={``}>{productData?.powerConsumption}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Mouse" && (
              <tbody>
                {productData?.type && (
                  <tr className={`details`}>
                    <td className={``}>Type</td>
                    <td className={``}>{productData?.type}</td>
                  </tr>
                )}

                {productData?.connectivity && (
                  <tr className={`details`}>
                    <td className={``}>Connectivity</td>
                    <td className={``}>{productData?.connectivity}</td>
                  </tr>
                )}

                {productData?.dpi && (
                  <tr className={`details`}>
                    <td className={``}>DPI</td>
                    <td className={``}>{productData?.dpi}</td>
                  </tr>
                )}

                {productData?.buttons && (
                  <tr className={`details`}>
                    <td className={``}>Buttons</td>
                    <td className={``}>{productData?.buttons}</td>
                  </tr>
                )}

                {productData?.handOrientation && (
                  <tr className={`details`}>
                    <td className={``}>Hand Orientation</td>
                    <td className={``}>{productData?.handOrientation}</td>
                  </tr>
                )}

                {productData?.sensorType && (
                  <tr className={`details`}>
                    <td className={``}>Sensor Type</td>
                    <td className={``}>{productData?.sensorType}</td>
                  </tr>
                )}

                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Monitor" && (
              <tbody>
                {productData?.resolution && (
                  <tr className={`details`}>
                    <td className={``}>Resolution</td>
                    <td className={``}>{productData?.resolution}</td>
                  </tr>
                )}

                {productData?.panelType && (
                  <tr className={`details`}>
                    <td className={``}>Panel Type</td>
                    <td className={``}>{productData?.panelType}</td>
                  </tr>
                )}

                {productData?.refreshRate && (
                  <tr className={`details`}>
                    <td className={``}>Refresh Rate</td>
                    <td className={``}>{productData?.refreshRate}</td>
                  </tr>
                )}

                {productData?.responseTime && (
                  <tr className={`details`}>
                    <td className={``}>Response Time(ms)</td>
                    <td className={``}>{productData?.responseTime}</td>
                  </tr>
                )}

                {productData?.aspectRatio && (
                  <tr className={`details`}>
                    <td className={``}>Aspect Ratio</td>
                    <td className={``}>{productData?.aspectRatio}</td>
                  </tr>
                )}

                {productData?.curvature && (
                  <tr className={`details`}>
                    <td className={``}>Curvature</td>
                    <td className={``}>{productData?.curvature}</td>
                  </tr>
                )}

                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Cabinet" && (
              <tbody>
                {productData?.colour && (
                  <tr className={`details`}>
                    <td className={``}>Colour</td>
                    <td className={``}>{productData?.colour}</td>
                  </tr>
                )}

                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}

                {productData?.material && (
                  <tr className={`details`}>
                    <td className={``}>Material</td>
                    <td className={``}>{productData?.material}</td>
                  </tr>
                )}

                {productData?.dimensions && (
                  <tr className={`details`}>
                    <td className={``}>Dimensions</td>
                    <td className={``}>{productData?.dimensions}</td>
                  </tr>
                )}

                {productData?.weight && (
                  <tr className={`details`}>
                    <td className={``}>Weight</td>
                    <td className={``}>{productData?.weight}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Case Fan" && (
              <tbody>
                {productData?.type && (
                  <tr className={`details`}>
                    <td className={``}>Type</td>
                    <td className={``}>{productData?.type}</td>
                  </tr>
                )}

                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}

                {productData?.fanSize && (
                  <tr className={`details`}>
                    <td className={``}>Fan Size</td>
                    <td className={``}>{productData?.fanSize}</td>
                  </tr>
                )}

                {productData?.bearingType && (
                  <tr className={`details`}>
                    <td className={``}>Bearing Type</td>
                    <td className={``}>{productData?.bearingType}</td>
                  </tr>
                )}

                {productData?.noiseLevel && (
                  <tr className={`details`}>
                    <td className={``}>Noise Level</td>
                    <td className={``}>{productData?.noiseLevel}</td>
                  </tr>
                )}

                {productData?.fanSpeed && (
                  <tr className={`details`}>
                    <td className={``}>Fan Speed</td>
                    <td className={``}>{productData?.fanSpeed}</td>
                  </tr>
                )}

                {productData?.airflow && (
                  <tr className={`details`}>
                    <td className={``}>Air Flow</td>
                    <td className={``}>{productData?.airflow}</td>
                  </tr>
                )}

                {productData?.powerConnector && (
                  <tr className={`details`}>
                    <td className={``}>Power Connector</td>
                    <td className={``}>{productData?.powerConnector}</td>
                  </tr>
                )}

                {productData?.dimensions && (
                  <tr className={`details`}>
                    <td className={``}>Dimensions</td>
                    <td className={``}>{productData?.dimensions}</td>
                  </tr>
                )}

                {productData?.compatibility && (
                  <tr className={`details`}>
                    <td className={``}>Compatibility</td>
                    <td className={``}>{productData?.compatibility}</td>
                  </tr>
                )}

                {productData?.warranty && (
                  <tr className={`details`}>
                    <td className={``}>Warranty</td>
                    <td className={``}>{productData?.warranty}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Power Supply" && (
              <tbody>
                {productData?.brand && (
                  <tr className={`details`}>
                    <td className={``}>Brand</td>
                    <td className={``}>{productData?.brand}</td>
                  </tr>
                )}

                {productData?.certification && (
                  <tr className={`details`}>
                    <td className={``}>Certification</td>
                    <td className={``}>{productData?.certification}</td>
                  </tr>
                )}

                {productData?.modular && (
                  <tr className={`details`}>
                    <td className={``}>Modular</td>
                    <td className={``}>{productData?.modular}</td>
                  </tr>
                )}

                {productData?.wattage && (
                  <tr className={`details`}>
                    <td className={``}>Wattage</td>
                    <td className={``}>{productData?.wattage}</td>
                  </tr>
                )}
              </tbody>
            )}

            {productData.category === "Graphics Card" && (
              <tbody>
                {productData?.graphicsMemory && (
                  <tr className={`details`}>
                    <td className={``}>Graphics Memory</td>
                    <td className={``}>{productData?.graphicsMemory}</td>
                  </tr>
                )}

                {productData?.gpuArchitecture && (
                  <tr className={`details`}>
                    <td className={``}>GPU Architecture</td>
                    <td className={``}>{productData?.gpuArchitecture}</td>
                  </tr>
                )}

                {productData?.manufacturer && (
                  <tr className={`details`}>
                    <td className={``}>Manufacturer</td>
                    <td className={``}>{productData?.manufacturer}</td>
                  </tr>
                )}

                {productData?.fanCount && (
                  <tr className={`details`}>
                    <td className={``}>Fan Count</td>
                    <td className={``}>{productData?.fanCount}</td>
                  </tr>
                )}

                {productData?.gpuClockSpeed && (
                  <tr className={`details`}>
                    <td className={``}>GPU Clock Speed</td>
                    <td className={``}>{productData?.gpuClockSpeed}</td>
                  </tr>
                )}

                {productData?.graphicsRAMType && (
                  <tr className={`details`}>
                    <td className={``}>Graphics RAM Type</td>
                    <td className={``}>{productData?.graphicsRAMType}</td>
                  </tr>
                )}

                {productData?.itemWeight && (
                  <tr className={`details`}>
                    <td className={``}>Item Weight</td>
                    <td className={``}>{productData?.itemWeight}</td>
                  </tr>
                )}

                {productData?.memoryClockSpeed && (
                  <tr className={`details`}>
                    <td className={``}>Memory Clock Speed</td>
                    <td className={``}>{productData?.memoryClockSpeed}</td>
                  </tr>
                )}

                {productData?.outputInterface && (
                  <tr className={`details`}>
                    <td className={``}>Output Interface</td>
                    <td className={``}>{productData?.outputInterface}</td>
                  </tr>
                )}
              </tbody>
            )}
          </table>
        </div>
      </section>
    </Container>
  );
};

export default ProductDetails;
