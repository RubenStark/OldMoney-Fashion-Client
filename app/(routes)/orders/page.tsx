"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import Image from "next/image";
import getOrders from "@/actions/get-orders-by-user";
import { Order, OrderItem } from "@/types";
export const revalidate = 0;

const OrdersPage = async () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const orders: Order[] = await getOrders();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Ordenes</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {!orders && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}

              {orders?.map((order) => (
                <div key={order.id}>
                  <h3>
                    <span className="font-semibold text-black">Order ID:</span>{" "}
                    <span className="text-sm text-gray-500">{order.id}</span>
                  </h3>
                  <h3>
                    <span className="font-semibold text-black">
                      Codigo de seguimiento:
                    </span>{" "}
                    <span className="text-sm text-gray-500">
                      {order.shippedCode}
                    </span>
                  </h3>
                  <ul>
                    {order.orderItems.map((orderItem) => (
                      <OrderCard key={orderItem.id} data={orderItem} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

function OrderCard({ data }: { data: OrderItem }) {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.product.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.product.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.product.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default OrdersPage;
