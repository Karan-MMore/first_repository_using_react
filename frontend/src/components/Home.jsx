import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

// import productList from './productList';
export default function Home() {
  const [resp, setResp] = useState([]);

  const callApi = async () => {
    const productData = await axios.get(
      "https://fakestoreapi.com/products?limit=15"
    );
    setResp(productData.data);
  };
  // console.log(resp)
  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <div className="home_main_div"></div>
      <div className=" container px-6 m-auto pt-4 pb-4">
        <h1 className=" text-4xl text-center Merriweather text-gray-700">Handpicked For You</h1>
        <div className=" grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 pt-4">
          {resp.map((product) => {
            console.log(product);
            const { title, price, image } = product;
            return (
              <>
                {/* <productList product={product} /> */}
                <div className="col-span-4 lg:col-span-3">
                  <div className="overflow-hidden  bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure>
                      <img
                        src={image}
                        alt="card image"
                        className="aspect-video p-3 "
                        style={{ aspectRatio: " 1 / 1" }}
                      />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                      <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                          {title.slice(0,27)}...
                        </h3>
                      </header>
                      <p className=" text-black">$ {price}</p>
                      <button className="inline-flex mt-2 items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                  {/*<!-- End Basic blog card --> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
   

    </>
  );
}
