import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
    const orders = useLoaderData();
    return (
        <div>
            <h1>Orders Component: {orders.length}</h1>
        </div>
    );
};

export default Orders;
