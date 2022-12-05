import React from "react";
import Image from "next/image";
import MaleImage from "../../public/assets/male-clothing.jpg";
import femaleImage from "../../public/assets/female-clothing.jpg";

function Categories() {
  return (
    <div className="mt-20 h-full w-full items-center justify-center ">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="mb-4 flex h-16  items-center justify-center rounded-md bg-primaryRed text-sm font-medium uppercase text-white">
            {"men's clothing"}
          </div>
          <Image
            src={MaleImage}
            alt=""
            width={200}
            height={400}
            className="rounded-[20px]"
          />
        </div>
        <div className="mt-12 flex flex-col-reverse">
          <div className="mt-4 flex h-16  items-center justify-center rounded-md bg-primaryRed  text-sm font-medium uppercase text-white">
            {"men's clothing"}
          </div>
          <Image
            src={femaleImage}
            alt=""
            width={200}
            height={400}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
