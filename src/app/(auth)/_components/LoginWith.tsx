import Image from "next/image";

const LoginWith = () => {
  return (
    <>
      <li className="flex items-center gap-x-3">
        <div className="w-full h-0.5 bg-gray-300 rounded-md"></div>
        <p className="text-zinc-800 text-xs md:text-base">atau</p>
        <div className="w-full h-0.5 bg-gray-300 rounded-md"></div>
      </li>
      <div className="flex gap-x-3">
        <button
          type="submit"
          className="w-full flex justify-center border rounded-md p-1 py-1.5"
        >
          <Image
            src="/googleIcon.svg"
            className="w-7 md:w-9"
            width={0}
            height={0}
            alt="Google logo's"
          />
        </button>
        <button className="w-full flex justify-center border rounded-md p-1 py-1.5">
          <Image
            src="/githubLogo.svg"
            className="w-7 md:w-9"
            width={0}
            height={0}
            alt="Google logo's"
          />
        </button>
      </div>
    </>
  );
};

export default LoginWith;
