import Image from "next/image";

function Page({ params }) {
  return (
    <div className = 'bg-black w-full h-screen flex items-center justify-center'>
      <h1 className = 'text-white font-bold text-9xl'>{params.id}</h1>
    </div>
  );
}

export default Page;
