import { useRouter } from "next/router";
import { LANG_DROPDOWN } from "../../constant";

export default function LangDropDown() {
  const route = useRouter();

  return (
    <select
      className="h-fit outline-0 bg-transparent focus:bg-[#e8eaed] focus:text-black focus:outline-[10px] focus:outline-[#e8eaed] focus:outline"
      onChange={(e) => {
        route.push("/", undefined, {
          locale: e.target.value,
        });
      }}
      value={route.locale}  
    >
      {LANG_DROPDOWN.map((lang) => (
        <option value={lang.value} key={lang.id}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
