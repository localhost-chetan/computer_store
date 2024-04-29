import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser } from "@/lib/actions/user.actions";
import { UserType } from "@/lib/mongodb/models/User/type/userTypes";
import { clerkClient } from "@clerk/nextjs";

const POST = async (request: NextRequest) => {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SIGNING_SECRET = process.env.WEBHOOK_SIGNING_SECRET;

  if (!WEBHOOK_SIGNING_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SIGNING_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await request.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SIGNING_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  // Create User in Mongodb database
  if (eventType === "user.created") {
    const {
      id,
      email_addresses = [],
      username,
      first_name,
      last_name,
      image_url,
      phone_numbers,
    } = evt.data;

    const user: UserType = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      userName: username as string,
      fullName: `${first_name} ${last_name}`,
      phoneNumber: phone_numbers[0]?.phone_number || null,
      avatar: image_url,
    };

    const newUser = await createUser(user);

    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: { userId: newUser._id },
      });
    }

    return NextResponse.json({ message: "new User created", user: newUser });
  }
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new NextResponse("", { status: 200 });
};

export { POST };
