import React from "react";
import { FlagType } from "../types";
import FlagItem from "../FlagItem/FlagItem";
import {
  Wrapper,
  GeneralWrapper,
  SettingWrapper,
  AlertsWrapper,
  SectionTitle,
  FlagsContainer,
} from "./Flags.styled";
// Flags component renders the main sections of the data;
// Each section renders "FlagItem" as a reusable component;

interface Props {
  data: {
    general: FlagType[];
    settings: FlagType[];
    alerts: FlagType[];
  };
  updateItem: (params: any) => void;
}
const Flags = (props: Props) => {
  return (
    <Wrapper>
      <GeneralWrapper>
        <SectionTitle>General</SectionTitle>
        <FlagsContainer>
          {props.data &&
            props.data.general.map((item: FlagType) => (
              <FlagItem
                {...item}
                updateItem={props.updateItem}
                section="general"
                key={item.name}
              />
            ))}
        </FlagsContainer>
      </GeneralWrapper>
      <SettingWrapper>
        <SectionTitle>Settings</SectionTitle>
        <FlagsContainer>
          {props.data &&
            props.data.settings.map((item: FlagType) => (
              <FlagItem
                {...item}
                updateItem={props.updateItem}
                section="settings"
                key={item.name}
              />
            ))}
        </FlagsContainer>
      </SettingWrapper>
      <AlertsWrapper>
        <SectionTitle>Alerts</SectionTitle>
        <FlagsContainer>
          {props.data &&
            props.data.alerts.map((item: FlagType) => (
              <FlagItem
                {...item}
                updateItem={props.updateItem}
                section="alerts"
                key={item.name}
              />
            ))}
        </FlagsContainer>
      </AlertsWrapper>
    </Wrapper>
  );
};

export default Flags;
