import React, { useState } from "react";
import Switch from "react-switch";
import { FlagType } from "../types";
import FlagIcon from "../common/FlagIcon";
import SubFlags from "../SubFlags/SubFlags";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Box, Field, NameText } from "./FlagItem.styled";
// FlagItem renders information of each flag, with user interfaction that calls updateItem function;
// If a FlagItem has subflags, it renders a SubFlags component

interface FlagItemProps extends FlagType {
  updateItem: (param: any) => void;
  isSubflag?: boolean;
  section: string;
  subflag_id?: number;
  flag_id?: number;
}

const FlagItem = (props: FlagItemProps) => {
  const [isExpanded, setIsExpaned] = useState(false);
  const [isOn, setIsOn] = useState(props.isOn);

  const handleToggle = (value: boolean) => {
    setIsOn(value);
    setIsExpaned(false);
    props.updateItem({
      flag_id: props.flag_id,
      section: props.section,
      subflag_id: props.subflag_id,
      field: { isOn: value },
    });
  };

  const handleInputChange = (option: any) => {
    props.updateItem({
      flag_id: props.flag_id,
      section: props.section,
      subflag_id: props.subflag_id,
      field: {
        inputNotes: {
          ...props.inputNotes,
          input: option.value,
        },
      },
    });
  };

  return (
    <Box isSubflag={props.isSubflag}>
      <Field>
        <FlagIcon name={props.name} />
        <NameText>{props.name}</NameText>
      </Field>
      <Field>
        {props.inputNotes && (
          <Dropdown
            options={props.inputNotes.options}
            onChange={handleInputChange}
            value={props.inputNotes.input}
            placeholder="Select an option"
          />
        )}
        <Switch
          className="react-switch"
          checked={isOn}
          onChange={handleToggle}
          handleDiameter={15}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={30}
          data-testid="switch"
        />
        {props.subflags.length > 0 && (
          <FlagIcon
            name={isExpanded ? "up" : "down"}
            onClick={() => {
              isOn && setIsExpaned(!isExpanded);
            }}
            isDisabled={!isOn}
            color={isOn ? "#008800" : "grey"}
          />
        )}
      </Field>
      {props.subflags.length > 0 && isExpanded && (
        <SubFlags
          subflags={props.subflags}
          section={props.section}
          updateItem={props.updateItem}
          flag_id={props.flag_id}
        />
      )}
    </Box>
  );
};

export default FlagItem;
