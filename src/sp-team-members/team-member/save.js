import {
	MediaPlaceholder,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const { name, bio, url, alt } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && <img src={url} alt={alt} />}
			<RichText.Content tagName="h4" value={name} />
			<RichText.Content tagName="p" value={bio} />
		</div>
	);
};

export default save;
