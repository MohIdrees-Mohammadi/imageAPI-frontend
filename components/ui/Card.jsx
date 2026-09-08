import { FiUsers, FiBriefcase, FiTrendingUp } from "react-icons/fi";

const Card = ({ icon, number, text }) => {
  return (
    <div className="group w-[162px] h-[151px] rounded-2xl border border-white/10 bg-[#1c232d]/80 flex flex-col items-center justify-center">

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-[#293477] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Number */}
      <h2 className="text-white text-[30px] font-bold leading-none">
        {number}
      </h2>

      {/* Text */}
      <p className="text-gray-400 text-[11px] mt-2">
        {text}
      </p>

    </div>
  );
};

export default Card;