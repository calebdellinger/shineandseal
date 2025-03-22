import { Slider } from "@/components/BeforeAndAfter";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-center items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold text-[#2563EB]">Wash Away</h1>
        <h1 className="text-4xl font-extrabold text-amber-400 italic">
          Seal the Day
        </h1>
      </div>
      <Slider />
      
    </div>
  );
}
