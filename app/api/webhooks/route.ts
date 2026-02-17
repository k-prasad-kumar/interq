import { verifyWebhook } from "@clerk/backend/webhooks";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const evt = await verifyWebhook(request);

    // Handle specific event types
    if (evt.type === "user.created") {
      // Handle user creation
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      // Clerk sends an array of emails. We usually want the primary one.
      // The safe way is to grab the first one if it exists.
      const primaryEmail = email_addresses[0]?.email_address;

      // Combine names safely
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      await prisma.user.create({
        data: {
          clerkId: id,
          email: primaryEmail,
          name: name,
          imageUrl: image_url,
        },
      });
    } else if (evt.type === "user.updated") {
      // Handle user updates
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      // Clerk sends an array of emails. We usually want the primary one.
      // The safe way is to grab the first one if it exists.
      const primaryEmail = email_addresses[0]?.email_address;

      // Combine names safely
      const name = `${first_name || ""} ${last_name || ""}`.trim();
      await prisma.user.update({
        where: { clerkId: id as string },
        data: {
          email: primaryEmail,
          name: name,
          imageUrl: image_url,
        },
      });
    }

    return new Response("Success", { status: 200 });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }
}
