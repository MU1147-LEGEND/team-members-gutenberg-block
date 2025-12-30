import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";
import "./style.scss";
import "./team-member/";
import { ReactComponent as Icon } from "./teamwork.svg";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	icon: <Icon />,
});
