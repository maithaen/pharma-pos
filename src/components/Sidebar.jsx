import React, { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
//icons
import { IoHomeOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { BsCapsulePill } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

export default function MainSideLeft(props) {
  const { openSidebar } = props;

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const handleSubmenuClick = (index) => {
    setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  // Accordion
  const accordion = [
    {
      name: "Home",
      icon: <IoHomeOutline size={20} />,
    },
    {
      name: "Sales",
      icon: <BiCart size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Reports",
      icon: <TbReportAnalytics size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Items",
      icon: <BsCapsulePill size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Suppliers",
      icon: <BiNotepad size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Employees",
      icon: <FaRegAddressCard size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Customers",
      icon: <MdManageAccounts size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Settings",
      icon: <IoIosSettings size={20} />,
      subMenu: ["submenuS 1", "submenuS 2", "usersetting"],
    },
    {
      name: "Help",
      icon: <MdHelpOutline size={20} />,
      subMenu: ["submenuS 1", "submenuS 2"],
    },
    {
      name: "Log Out",
      icon: <CiLogin size={20} />,
    },
  ];

  return (
    <ScrollShadow className="h-[90vh] overflow-y-auto">
      <aside
        className={`${
          openSidebar
            ? "sm:w-60 lg:w-80 overflow-hidden transition-all duration-200 rounded-sm h-screen"
            : "w-0 xl:w-80 overflow-hidden transition-all duration-200 rounded-sm"
        }`}
      >
        <div
          className={`menu menu-lg px-4 py bg-base-200 sm:w-60 lg:w-80 rounded-box top-0 shadow-2xl min-h-[950px]`}
        >
          <div className="flex-1">
            <ul>
              {accordion.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <a onClick={() => handleAccordionClick(index)}>
                    {item.icon}
                    {item.name}
                    {item.subMenu == null ? (
                      <></>
                    ) : activeAccordion === index ? (
                      <GoChevronDown size={20} />
                    ) : (
                      <GoChevronLeft size={20} />
                    )}
                  </a>
                  {item.subMenu == null ? (
                    <></>
                  ) : (
                    activeAccordion === index && (
                      <ul className="pl-4 space-y-2 menu menu-lg bg-base-200 rounded-box">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={`${subItem}-${subIndex}`} onClick={() => handleSubmenuClick(subItem)}>
                            {activeSubmenu === subItem ? (
                              <a className="active">{subItem}</a>
                            ) : (
                              <a>{subItem}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </ScrollShadow>
  );
}
