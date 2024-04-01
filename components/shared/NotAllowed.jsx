import Image from "next/image";

const NotAllowed = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/not-allowed.png"
        width={250}
        height={250}
        alt="not allowed"
        priority
      />
      <div className="w-full">
        <h1 className="text-4xl font-black text-gray-600 text-center mb-5">
          Access blocked!asd
        </h1>
      </div>
    </div>
  );
};

export default NotAllowed;
