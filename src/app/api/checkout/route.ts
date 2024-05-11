import { ProductDataType } from "@/context/CartContext";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.BASE_URL!,
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "*Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

const POST = async (request: NextRequest) => {
  try {
    const { cartItems, customer } = await request.json();

    if (!cartItems || !customer) {
      return new NextResponse(`Not enough data to checkout`, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: [`card`],
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      shipping_options: [
        {
          shipping_rate: "shr_1PF2VJSDZDh4Tc5XRuaqV51m",
        },
        {
          shipping_rate: "shr_1PF2TeSDZDh4Tc5XCPlNr7Lj",
        },
      ],
      line_items: cartItems.map((item: ProductDataType) => {
        return {
          price_data: {
            currency: "INR",
            product_data: {
              name: item.productName,
              metadata: {
                productId: item.productId,
              },
            },
            unit_amount: item.price * 83.5 * 100,
          },
          quantity: item.quantity,
        };
      }),
      client_reference_id: customer.clerkId,
      cancel_url: `${process.env.BASE_URL}/cart`,
    });

    return NextResponse.json(session, { headers: corsHeaders });
  } catch (error) {
    return new NextResponse(`Internal Server Error`, { status: 500 });
  }
};

export { POST };
