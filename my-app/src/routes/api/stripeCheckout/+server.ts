import type { RequestHandler } from "@sveltejs/kit";
import Stripe from "stripe";

const SECREAT_STRIPE_KEY ="sk_test_51Oy4vnSBHpAPnnz8Cpwa9zy4fQvclGZIQix5p4cJMisQnXfgwhmtzUHakjWIf5u7JJfNZzWlqvR5w5Wu5gws79LE00u32hw8hX";
const stripe = new Stripe(SECREAT_STRIPE_KEY, {
   apiVersion: "2023-10-16"
})


export const POST: RequestHandler = async({request}) =>{
  
        const data = await request.json();
        const items = data.items;

        const lineItems: any = [];
        items.forEach((item: any) => {
            lineItems.push({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.name,
                        images: [item.image]
                    },
                    unit_amount: item.price * 100 // converting to cents
                },
                quantity: item.quantity
            });
        });

        const session = await stripe.checkout.sessions.create({
            
            line_items: lineItems,
            
            mode: 'payment',
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
            
        });

        return new Response(
            JSON.stringify({ url: session.url }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
            
        );
   
    
}