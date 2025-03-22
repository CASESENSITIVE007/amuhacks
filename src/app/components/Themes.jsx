import { University } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

function Themes() {
  return (
    <div
      id="themes"
      className="min-h-screen flex flex-col items-center justify-center text-white md:w-3/4 mx-auto"
    >
      <h1 className="text-5xl font-serif mb-10">THEMES</h1>

      <div className="space-y-10">
        <div className="flex justify-around gap-8">
          <span className="size-50 flex-col flex items-center justify-center bg-gray-950 rounded-2xl p-4">
            <University size={48} />
            <h1>Education</h1>
          </span>
          <span className="size-50 flex-col flex items-center justify-center bg-gray-950 rounded-2xl p-4">
            <HeartPulse size={48} />
            <h1>HealthCare</h1>
          </span>
          <span className="size-50 flex-col flex items-center justify-center bg-gray-950 rounded-2xl p-4">
            <CircleDollarSign size={48} />
            <h1>Finance</h1>
          </span>
        </div>

        <div className="flex justify-around gap-8">
          <span className="size-50 flex-col flex items-center justify-center bg-gray-950 rounded-2xl p-4">
            <University size={48} />
            <h1>Education</h1>
          </span>
          <span className="size-50 flex-col flex items-center justify-center bg-gray-950 rounded-2xl p-4">
            <HeartPulse size={48} />
            <h1>Health Care</h1>
          </span>
          <span className="size-50 flex-col flex items-center justify-center bg-gray-950 rounded-2xl p-4">
            <CircleDollarSign size={48} />
            <h1>Finance</h1>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Themes;
