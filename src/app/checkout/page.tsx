const Checkout1 = () => {
  return (
    <div>
      <div className="bg-red-500 w-full h-80 relative">
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-80 gap-5">
          <p className="text-3xl font-bold">Checkout</p>
          <p>{"Home > Checkout"}</p>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-1/2    p-5 flex flex-col justify-start ">
          <div className="self-center flex flex-col w-4/5 gap-y-5">
            <h1 className="text-2xl font-semibold">Billing Details</h1>
            <div className="flex flex-row gap-x-3">
              <div className="flex flex-col w-full">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border rounded h-10 border-black"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="border rounded h-10 border-black"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Company Name(Optional)</label>
              <input type="text" className="border rounded h-10 border-black" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Country/Region</label>
              <input type="text" className="border rounded h-10 border-black" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Street address</label>
              <input type="text" className="border rounded h-10 border-black" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Town / City</label>
              <input type="text" className="border rounded h-10 border-black" />
            </div>
          </div>
        </div>
        <div className="bg-cream w-1/2">
          <p>Product</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout1;
