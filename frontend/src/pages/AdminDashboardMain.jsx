import { useEffect, useState } from "react";
// import styles from "../../styles/styles";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/styles";

const AdminDashboardMain = () => {
  const adminOrders = [
    {
      _id: "1",
      cart: [{ qty: 2 }, { qty: 3 }],
      totalPrice: 30,
      status: "Delivered",
      createdAt: "2022-01-01T10:30:00Z",
    },
    {
      _id: "2",
      cart: [{ qty: 1 }, { qty: 4 }],
      totalPrice: 45,
      status: "Processing",
      createdAt: "2022-01-02T11:45:00Z",
    },
    // Add more sample orders as needed
  ];
  const sellers = [
    { id: 1, name: "Seller 1" },
    { id: 2, name: "Seller 2" },
    // Add more sample sellers as needed
  ];

  const adminEarning =
    adminOrders &&
    adminOrders.reduce((acc, item) => acc + item.totalPrice * 0.1, 0);
  const adminBalance = adminEarning?.toFixed(2);

  return (
    <>
      <div className="w-full p-4">
        <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
        <div className="w-full block lg:flex items-center justify-between">
          <div className="w-full mb-4 lg:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Earning
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            &#8377;{adminBalance}
            </h5>
          </div>

          <div className="w-full mb-4 lg:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <MdBorderClear size={30} className="mr-2" fill="#00000085" />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Sellers
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
              {sellers && sellers.length}
            </h5>
            <Link to="/admin-sellers">
              <h5 className="pt-4 pl-2 text-[#077f9c]">View Sellers</h5>
            </Link>
          </div>

          <div className="w-full mb-4 lg:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Orders
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
              {adminOrders && adminOrders.length}
            </h5>
            <Link to="/admin-orders">
              <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
            </Link>
          </div>
        </div>

        <br />
        <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
        <div className="w-full min-h-[45vh] bg-white rounded overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Items Qty
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
              </tr>
            </thead>
            <tbody>
              {adminOrders.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{item._id}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {item.cart.reduce((acc, item) => acc + item.qty, 0)}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    ${item.totalPrice.toFixed(2)}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-no-wrap ${
                      item.status === "Delivered"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardMain;
