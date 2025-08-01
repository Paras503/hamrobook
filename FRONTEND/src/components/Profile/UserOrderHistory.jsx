import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
const API_BASE_URL = "https://backend-bice-sigma-99.vercel.app";

const UserOrderHistory = () => {
  const [OrderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const headers = {
          id: localStorage.getItem("id") || "",
          authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        };

        const response = await axios.get(
          API_BASE_URL+ "/order/get-order-history",
          { headers }
        );
        console.log("Order History Data:", response.data); // Debugging
        setOrderHistory(response.data.data || []);
      } catch (error) {
        console.error("Error fetching order history:", error);
        setOrderHistory([]);
      }
    };
    fetchOrderHistory();
  }, []);

  if (OrderHistory.length === 0) {
    return (
      <div className="h-[80vh] p-4 text-zinc-100">
        <div className="h-[100%] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
            No Order History
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9961/9961218.png"
            alt="No Order History"
            className="h-[20vh] mb-8"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100%] p-0 md:p-4 text-zinc-100">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Your Order History
      </h1>

      <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
        <div className="w-[3%] text-center">Sr.</div>
        <div className="w-[22%]">Books</div>
        <div className="w-[45%]">Description</div>
        <div className="w-[9%]">Price</div>
        <div className="w-[16%]">Status</div>
        <div className="w-none md:w-[5%] hidden md:block">Mode</div>
      </div>

      {OrderHistory.map((items, i) => (
        <div
          key={items._id || i}
          className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 transition-all duration-300"
        >
          <div className="w-[3%] text-center">{i + 1}</div>

          <div className="w-[22%]">
            <Link
              to={items.book ? `/view-book-details/${items.book._id}` : "#"}
              className="hover:text-blue-300"
            >
              {items.book ? items.book.title : "Unknown Book"}
            </Link>
          </div>

          <div className="w-[45%]">
            <h1>{items.book?.desc?.slice(0, 50) || "No description available"}...</h1>
          </div>

          <div className="w-[9%]">
            <h1>&#8377; {items.book?.price || "N/A"}</h1>
          </div>

          <div className="w-[16%]">
            <h1 className="font-semibold">
              {items.status === "Order placed" ? (
                <span className="text-yellow-500">{items.status}</span>
              ) : items.status === "Canceled" ? (
                <span className="text-red-500">{items.status}</span>
              ) : (
                items.status || "Pending"
              )}
            </h1>
          </div>

          <div className="w-none md:w-[5%] hidden md:block">
            <h1 className="text-sm text-zinc-400">COD</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOrderHistory;