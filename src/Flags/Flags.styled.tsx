import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: industry, sans-serif;
  padding: 16px;
  background-color: black;
  color: white;
  display: grid;
  row-gap: 16px;
  grid-template-columns: min-content min-content 1fr;
  grid-template-areas:
    "general general general"
    "settings alerts ."
    "settings alerts .";
`;

export const GeneralWrapper = styled.div`
  grid-area: general;
  display: grid;
  gap: 8px;
  padding: 8px;
`;

export const SettingWrapper = styled.div`
  grid-area: settings;
  display: grid;
  gap: 8px;
  padding: 8px;
`;

export const AlertsWrapper = styled.div`
  grid-area: alerts;
  display: grid;
  gap: 8px;
  padding: 8px;
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

export const FlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
