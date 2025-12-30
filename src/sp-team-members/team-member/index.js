import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/sp-team-member", {
	title: __("Sp Team Member", "sp-team-member"),
	description: __("Block for individual team member.", "sp-team-member"),
	category: "text",
	icon: "admin-users",
	parent: ["create-block/sp-team-members"],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		bio: {
			type: "string",
			source: "html",
			selector: "p",
		},
		id: {
			type: "number",
		},
		alt: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "alt",
			default: "",
		},
		url: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src",
		},
	},

	edit: Edit,
	save: save,
});
