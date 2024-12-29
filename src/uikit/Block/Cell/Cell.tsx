import "./Cell.sass";

import { type FC, type ReactNode } from "react";

import { Icon, Card, Text, Caption } from "@/uikit";

interface CellProps {
  icon: ReactNode;
  after: ReactNode;
  title: ReactNode;
  text: ReactNode;
}

const Cell: FC<CellProps> = (props) => {
  return (
    <Card className="Cell">
      <div className="Cell__content">
        <Icon className="Cell__icon" src={props.icon} size="42" />
        <div className="Cell__typography">
          <Text className="Cell__title" weight="2">
            {props.title}
          </Text>
          <Caption className="Cell__text" weight="2" opacity>
            {props.text}
          </Caption>
        </div>
      </div>
      {props.after && <div className="Cell_after">{props.after}</div>}
    </Card>
  );
};

export default Cell;
