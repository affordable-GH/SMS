import Image from "next/image";
import Link from "next/link";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        {/* LEFT */}
        <div className=" w-[14%] md:w-[8%] lg:w-[16%] bg-gray-800 "> 

          <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
          
            <Image src="/logo.jpeg" alt="logo" width={32} height={32} /> 
            <span className="hidden bold lg:block bg-gray-800 text-white p-2"> Aamusted</span>
          </Link>
        </div>
        
        
        {/* Right */}
        <div className="w-[86%] md:W-[92%] lg:w-[84%] ">

        </div>
        
        
        
    </div>
  ); 
}