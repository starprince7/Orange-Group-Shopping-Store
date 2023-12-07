import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Product } from "@/hook/useProducts";
import { useFetch } from "@/hook/usefetch";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function DetailsPage() {
  const {
    query: { id },
  } = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<Product>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const result = await response.json();
        setDetails(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    id && fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <div className="sm:flex items-center px-5 pb-10">
        <div className=" sm:w-1/2">
          <img src={details.image} alt="Product image" />
        </div>
        <div className="sm:w-1/2 pl-14 pr-5 space-y-4 text-white bg-zinc-900 h-[100vh] grid content-center">
          <div>
            <h3 className="font-semibold mb-2 underline capitalize">
              {details.category}
            </h3>
            <h3 className="font-bold text-3xl">{details.title}</h3>
            <p className="text-xl font-semibold my-3">${details.price}</p>
            <textarea
              rows={5}
              className={`text-sm bg-inherit w-full block my-2 ${
                !isUpdating && "outline-none"
              } py-5`}
              onFocus={() => setIsUpdating(true)}
              defaultValue={details.description}
            ></textarea>
            {isUpdating && (
              <button
                onClick={() => {
                  setIsUpdating(false);
                }}
                className="px-14 py-3 font-semibold rounded-lg uppercase my-3 bg-gray-300 text-black"
              >
                update
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
