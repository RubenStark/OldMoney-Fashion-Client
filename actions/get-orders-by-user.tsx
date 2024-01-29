import { Order } from "@/types";
import { useUser } from "@clerk/nextjs";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

const getOrders = async (): Promise<Order[]> => {
  const { user } = useUser();
  const userId = user?.id;
  const res = await fetch(`${URL}/${userId}`);
  return res.json();
};

export default getOrders;
