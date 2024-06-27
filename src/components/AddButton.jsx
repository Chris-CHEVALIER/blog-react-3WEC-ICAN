import { Button } from "antd";
import { Tooltip } from "antd";

export default function AddButton(props) {
  return (
    <Tooltip title={props.children}>
      <Button
        type="primary"
        onClick={props.handleClick}
        icon={props.icon}
        disabled={props.disabled}
        size="large"
        shape="round"
      >
        {props.children}
      </Button>
    </Tooltip>
  );
}
