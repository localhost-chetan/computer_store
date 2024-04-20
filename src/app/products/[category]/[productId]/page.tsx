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
    `http://${process.env.BASE_URL}/api/products/${category}/${productId}`
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
        className={`flex flex-col sm:px-10 md:px-18 lg:flex-row gap-x-4 py-7 lg:px-5`}
      >
        <ImageSlider productData={productData} />

        {/* Details */}
        <div
          className={`w-full bg-slate-100 dark:bg-gray-900 px-5 py-8 lg:py-4 md:px-5 space-y-6 shadow-lg shadow-gray-200 dark:shadow-slate-800`}
        >
          {/* Product Title */}
          <div className={`flex items-center justify-between gap-x-3`}>
            <h2
              className={`font-extrabold text-lime-950 dark:text-lime-100 line-clamp-3 text-xl sm:text-[1.4rem] md:text-xxl lg:text-2xl tracking-wide text-pretty`}
            >
              {productData.name}
            </h2>

            <div className={`flex gap-x-2 items-center`}>
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
            ></PriceConvertor>

            <p className={`text-slate-500 text-md line-through`}>
              {Math.floor(productData?.price * 80).toLocaleString()}
            </p>
          </div>

          {/* Description */}
          <span className="sr-only">{productData.name} description</span>
          <p
            className={`text-sm md:text-base text-slate-800 dark:text-gray-200 text-pretty tracking-wide`}
          >
            {productData.description}
          </p>

          <ProductAssuranceCOD />

          {/* Cart/Purchase buttons */}
          <div
            className={`flex flex-row items-center justify-evenly gap-x-10 scale-95 sm:scale-100 md:justify-start md:gap-6 pt-4`}
          >
            <span className="sr-only">Add to cart button</span>
            <Tooltip
              content={`Click here to add product to the cart`}
              color={`primary`}
            >
              <AddToCart
                color={`primary`}
                variant={`shadow`}
                radius={`sm`}
                showIcon={true}
              >
                Add to Cart
              </AddToCart>
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
                showIcon={false}
              ></BuyNow>
            </Tooltip>
          </div>

          {/* Extra info */}
          <section
            className={`mt-5 border-solid border-1.5 dark:border-gray-700 border-slate-400 flex flex-col justify-start w-fit drop-shadow-xl dark:shadow-gray-900 shadow-slate-200`}
          >
            <div className={`flex gap-4 items-center px-5 py-4`}>
              {/* icon */}
              <TbTruckDelivery size={30} />
              {/* text */}
              <div className={`flex flex-col gap-y-1 line-clamp-2`}>
                <p className={`font-bold`}>Free Delivery</p>
                <Link
                  href={`#`}
                  className={`text-xs md:text-sm text-slate-600 dark:text-gray-400 underline underline-offset-2`}
                >
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>

            <hr
              className={`border-1.5 dark:border-gray-700 border-slate-400`}
            />

            <div className={`flex gap-4 items-center px-5 py-4`}>
              {/* icon */}
              <RiLoopLeftLine size={30} />

              {/* text */}
              <div>
                <p className={`font-bold`}>Return Delivery</p>
                <p
                  className={`text-xs md:text-sm text-slate-600 dark:text-gray-400 underline underline-offset-2 flex gap-x-1 items-center`}
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
            className={`border-b-small border-solid dark:border-slate-500 border-gray-700`}
          />

          {/*Tech Specifications*/}

          <h3 className={`text-xl font-bold`}>Tech Specifications</h3>

          <table className={`flex flex-col`}>
            {productData.category === "AIO Liquid Cooler" && (
              <tbody>
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

                {productData?.itemWeightKg && (
                  <tr className={`details`}>
                    <td className={``}>Weight</td>
                    <td className={``}>{productData?.itemWeightKg}</td>
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
          </table>
        </div>
      </section>
    </Container>
  );
};

export default ProductDetails;
