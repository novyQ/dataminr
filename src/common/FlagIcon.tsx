import React from "react";

import {
  FaStickyNote,
  FaRegClock,
  FaChartBar,
  FaBell,
  FaBullhorn,
  FaCamera,
  FaClipboardList,
  FaUserFriends,
  FaUserPlus,
  FaUserSlash,
  FaUserEdit,
  FaUsers,
  FaExclamationTriangle,
  FaList,
  FaExclamationCircle,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

import { IconWrapper } from "./FlagIcon.styled";

interface Props {
  name: string;
  onClick?: () => void;
  isDisabled?: boolean;
  color?: string;
}
const FlagIcon = (props: Props) => {
  const renderSwitch = (param: string) => {
    switch (param) {
      case "case management":
        return <FaStickyNote />;
      case "map timeline":
        return <FaRegClock />;
      case "views & briefing":
        return <FaChartBar />;
      case "notifications":
        return <FaBell />;
      case "mass communication":
        return <FaBullhorn />;
      case "traffic cameras":
        return <FaCamera />;
      case "audit log":
        return <FaClipboardList />;
      case "users":
        return <FaUserFriends />;
      case "users add":
        return <FaUserPlus />;
      case "users delete":
        return <FaUserSlash />;
      case "users edit":
        return <FaUserEdit />;
      case "max users":
        return <FaUsers />;
      case "alert Manager":
        return <FaExclamationTriangle />;
      case "alert rules":
        return <FaList />;
      case "down":
        return <FaAngleDown />;
      case "up":
        return <FaAngleUp />;
      default:
        return <FaExclamationCircle />;
    }
  };

  return (
    <IconWrapper
      onClick={props.onClick}
      isDisabled={props.isDisabled}
      color={props.color}
    >
      {renderSwitch(props.name)}
    </IconWrapper>
  );
};

export default FlagIcon;
