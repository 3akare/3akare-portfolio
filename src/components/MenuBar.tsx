import { ReactElement, useContext } from "react";
import { AppleLogo, Battery, Wifi, Search, ControlCenter, Siri } from "../assets/Logos";
import { MenuContext } from "../context/MenuProvider";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

// Define the return type for the helper function
type DateTime = {
  day: string;
  month: string;
  dateNum: number;
  hours: string;
  minutes: string;
};

const getCurrentDateTime = (): DateTime => {
  const date = new Date();
  const day = weeks[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return { day, month, dateNum, hours, minutes };
};

// Props type for components like AppIcons and MenuItems
type MenuItemsProps = {
  items: string[];
};

const AppIcons: React.FC = () => (
  <ul className="hidden md:flex flex-row items-center gap-4 text-sm font-medium">
    <li><Battery width={24} height={24} /></li>
    <li><Wifi width={24} height={24} /></li>
    <li><Search width={18} height={18} /></li>
    <li><ControlCenter width={18} height={18} /></li>
    <li><Siri width={18} height={18} /></li>
    <li className="flex flex-row gap-4">
      <CurrentDateTime />
    </li>
  </ul>
);

const CurrentDateTime: React.FC = () => {
  const { day, month, dateNum, hours, minutes } = getCurrentDateTime();
  return (
    <>
      <p>{`${day} ${dateNum} ${month}`}</p>
      <p>{`${hours}:${minutes}`}</p>
    </>
  );
};

const MenuItems: React.FC<MenuItemsProps> = ({ items }) => (
  <ul className="flex-row gap-5 items-center hidden md:flex">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

function MenuBar(): ReactElement {
  const { title } = useContext(MenuContext);

  if (!title) {
    throw new Error("MenuContext is not provided. Ensure MenuProvider is wrapped around MenuBar.");
  }

  return (
    <header>
      <nav className="fixed inset-0 h-6 w-screen text-white text-base bg-orange-500 flex items-center backdrop-filter backdrop-blur-lg border-y-black border-opacity-15 border-x-0 border-[1px] bg-opacity-20 px-8 justify-between z-10">
        <section className="flex flex-row gap-5 items-center text-sm font-medium">
          <span className="flex flex-row items-center gap-5">
            <AppleLogo width={22} height={22} />
            <p className="font-bold">{title}</p>
          </span>
          <MenuItems items={["File", "Edit", "View", "Go", "Window", "Help"]} />
        </section>
        <AppIcons />
      </nav>
    </header>
  );
}

export default MenuBar;
