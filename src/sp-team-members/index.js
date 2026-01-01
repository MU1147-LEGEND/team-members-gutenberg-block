import { registerBlockType, createBlock } from "@wordpress/blocks";

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
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/image"],
				isMultiBlock: true,

				transform: (attributes) => {
					const innerBlocks = attributes.map(({ url, id, alt }) => {
						return createBlock("create-block/sp-team-member", {
							url,
							id,
							alt,
							name: alt,
							socialLinks: [{ icon: "facebook" }],
						});
					});

					return createBlock(
						"create-block/sp-team-members",
						{ columns: attributes.length > 2 ? 2 : attributes.length },
						innerBlocks
					);
				},
			},
		],
	},
});
