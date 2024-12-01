import Image from "next/image";

const LoginWith = () => {
  return (
    <>
      <li className="flex items-center gap-x-3">
        <div className="w-full h-0.5 bg-gray-300 rounded-md"></div>
        <p className="text-zinc-800">atau</p>
        <div className="w-full h-0.5 bg-gray-300 rounded-md"></div>
      </li>
      <li className="flex gap-x-3">
        <div className="w-full flex justify-center border rounded-md p-1 py-1.5">
          <Image
            src="/googleIcon.svg"
            width={30}
            height={30}
            alt="Google logo's"
          />
        </div>
        <div className="w-full flex justify-center border rounded-md p-1 py-1.5">
          <Image
            src="/githubLogo.svg"
            width={30}
            height={30}
            alt="Google logo's"
          />
        </div>
      </li>
    </>
  );
};

export default LoginWith;
