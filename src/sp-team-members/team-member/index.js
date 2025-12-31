import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import save from "./save";
import { select } from "@wordpress/data";

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
		socialLinks: {
			type: "array",
			default: [
				{ link: "https:facebook.com", icon: "facebook" },
				{ link: "https:twitter.com", icon: "twitter" },
				{ link: "https:linkedin.com", icon: "linkedin" },
			],
			source: "query",
			selector: ".wp-block-create-block-sp-team-member-social-links ul li",
			query:{
				icon:{
					source:"attribute",
					attribute:"data-icon"
				},
				link:{
					source:"attribute",
					selector:"a",
					attribute:"href"
				}
			}
		},
	},

	edit: Edit,
	save: save,
});
