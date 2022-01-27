import React from "react";
import FlagItem from "../FlagItem/FlagItem";
import { FlagType } from "../types";
import { SubFlagsWrapper } from "./SubFlags.styled";

interface Props {
  subflags: FlagType[];
  section: string;
  updateItem: (param: any) => void;
  flag_id?: number;
}

const SubFlags = (props: Props) => {
  return (
    <SubFlagsWrapper>
      {props.subflags.map((item) => (
        <FlagItem
          {...item}
          flag_id={props.flag_id}
          isSubflag
          section={props.section}
          updateItem={props.updateItem}
          key={item.name}
        />
      ))}
    </SubFlagsWrapper>
  );
};

export default SubFlags;
