export default function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      className="w-full py-[15px] px-4 rounded-[11px] focus:outline-none bg-white shadow-[0px 0px 8px 0px #72706B0F] border border-[#E2ECF4] font-sans font-normal text-soft-blue text-xsm placeholder:text-[#CFCFC9]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}
