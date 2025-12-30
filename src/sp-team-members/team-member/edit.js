import {
	MediaPlaceholder,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { Spinner } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { name, bio, url, id, alt } = attributes;
	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: "" });
			return;
		}

		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	const onSelectUrl = (newUrl) => {
		setAttributes({ url: newUrl, id: undefined, alt: "" });
	};

	return (
		<div {...useBlockProps()}>
			{url && (
				<div
					className={`wp-block-create-block-sp-team-member-img${
						isBlobURL(url) ? " is-loading" : ""
					}`}
				>
					<img src={url} alt={alt} />
					{isBlobURL(url) && <Spinner />}
				</div>
			)}
			<MediaPlaceholder
				icon="admin-users"
				onSelect={onSelectImage}
				onSelectURL={onSelectUrl}
				onError={(val) => console.log(val)}
				accept="image/*"
				allowedTypes={["image"]}
				disableMediaButtons={!!url}
			/>
			<RichText
				placeholder={__("Name", "sp-team-member")}
				tagName="h4"
				onChange={onChangeName}
				value={name}
				allowedFormats={[]}
			/>
			<RichText
				placeholder={__("Bio", "sp-team-member")}
				tagName="p"
				onChange={onChangeBio}
				value={bio}
				allowedFormats={[]}
			/>
		</div>
	);
}
