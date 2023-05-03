import { Tabs } from "antd";
import styled from "styled-components";

export const StyledTabs = styled(Tabs)`
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: center;
`;

export const TabsLi = styled(Tabs.TabPane)`
  font-size: 0.7rem;
  width: 100%;
  text-decoration: none;
  color: white;
  list-style-type: none;
  padding: 0px 20px;
  justify-content: center;
  &:hover {
    color: #ffcb65;
  }
`;
