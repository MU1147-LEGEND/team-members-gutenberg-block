import {
	DndContext,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { isBlobURL } from "@wordpress/blob";
import {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	RichText,
	store as blockEditorStore,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Button,
	Icon,
	PanelBody,
	SelectControl,
	Spinner,
	TextControl,
	TextareaControl,
	ToolbarButton,
	Tooltip,
	withNotices,
} from "@wordpress/components";
import { usePrevious } from "@wordpress/compose";
import { useSelect } from "@wordpress/data";
import { useEffect, useRef, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { ReactComponent as Delete } from "../delete.svg";
import SortableItem from "./sortable-item";

function Edit({
	attributes,
	setAttributes,
	noticeOperations,
	noticeUI,
	isSelected,
}) {
	const { name, bio, url, id, alt, socialLinks } = attributes;
	const titleRef = useRef();
	const prevUrl = usePrevious(url);
	const prevSelected = usePrevious(isSelected);
	const [selectedLink, setSelectedLink] = useState();
	const sensors = useSensors(useSensor(PointerSensor));

	const imageObject = useSelect(
		(select) => (id ? select("core").getMedia(id) : null),
		[id],
	);

	const imageSizes = useSelect((select) => {
		return select(blockEditorStore).getSettings().imageSizes;
	}, []);

	const getImageSizeOptions = () => {
		if (!imageObject) return [];

		const options = [];
		const sizes = imageObject.media_details?.sizes;

		for (const key in sizes) {
			const size = sizes[key];
			const imageSize = imageSizes.find((size) => size.slug === key);
			if (imageSize) {
				options.push({
					label: imageSize.name,
					value: size.source_url,
				});
			}
		}
		return options;
	};

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

	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	const onDeleteImage = () => {
		setAttributes({ url: undefined, id: undefined, alt: "" });
	};

	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
	};

	const onChangeImageSize = (newUrl) => {
		setAttributes({ url: newUrl });
	};

	const addNewSocialLink = () => {
		setAttributes({
			socialLinks: [...socialLinks, { icon: "wordpress", link: "" }],
		});
		setSelectedLink(socialLinks.length);
	};

	const updateSocialItem = (type, value) => {
		const updatedSocialLinks = [...socialLinks];

		updatedSocialLinks[selectedLink][type] = value;
		setAttributes({ socialLinks: updatedSocialLinks });
	};

	const removeSocialItem = () => {
		const updatedSocialLinks = [...socialLinks];

		updatedSocialLinks.splice(selectedLink, 1);
		setAttributes({ socialLinks: updatedSocialLinks });

		// setAttributes({
		// 	socialLinks: [
		// 		...socialLinks.slice(0, selectedLink),
		// 		...socialLinks.slice(selectedLink + 1),
		// 	],
		// });
		setSelectedLink();
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;
	};

	useEffect(() => {
		if (!id && isBlobURL(url)) {
			setAttributes({
				url: undefined,
				alt: "",
			});
		}
	}, []);

	// focusing and select whole text the title input when the block is selected
	useEffect(() => {
		if (url && !prevUrl) {
			titleRef.current.focus();
			document.execCommand("selectAll", false, null);
		}
	}, [url, prevUrl]);

	// Clear selected social link when block is deselected
	useEffect(() => {
		if (prevSelected && !isSelected) {
			setSelectedLink();
		}
	}, [isSelected, prevSelected]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Image Settings", "sp-team-member")}>
					{id && (
						<SelectControl
							label={__("Image Size", "sp-team-member")}
							options={getImageSizeOptions()}
							value={url}
							onChange={onChangeImageSize}
						/>
					)}
					{url && !isBlobURL(url) && (
						<TextareaControl
							label={__("Alt Text", "sp-team-member")}
							value={alt}
							onChange={onChangeAlt}
							help={__(
								"Alt text describes your image to people who can't see it. It's also used by search engines and screen readers. If the image is purely decorative, you can leave this blank.",
								"sp-team-member",
							)}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__("Replace Image", "")}
						onSelect={onSelectImage}
						onSelectURL={onSelectUrl}
						onError={onUploadError}
						accept="image/*"
						allowedTypes={["image"]}
						mediaId={id}
						mediaURL={url}
					/>
					<ToolbarButton>
						<Delete onClick={onDeleteImage} />
					</ToolbarButton>
				</BlockControls>
			)}
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
					onError={onUploadError}
					accept="image/*"
					allowedTypes={["image"]}
					disableMediaButtons={!!url}
					notices={noticeUI}
				/>
				<RichText
					ref={titleRef}
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

				<div className={`wp-block-create-block-sp-team-member-social-links`}>
					<ul>
						<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
							<SortableContext
								items={socialLinks.map(
									(socialLink) => `${socialLink.icon}-${socialLink.link}`,
								)}
								strategy={verticalListSortingStrategy}
							>
								{socialLinks.map((socialLink, index) => (
									<SortableItem
										key={`${socialLink.icon}-${socialLink?.link}`}
										id={`${socialLink.icon}-${socialLink?.link}`}
										socialLink={socialLink}
										index={index}
										selectedLink={selectedLink}
										setSelectedLink={setSelectedLink}
									/>
								))}
							</SortableContext>
						</DndContext>

						{socialLinks.map((socialLink, index) => (
							<li
								key={index}
								className={selectedLink === index ? "is-selected" : null}
							>
								<button
									aria-label={__("Edit Social Link", "sp-team-member")}
									onClick={() => setSelectedLink(index)}
								>
									<Icon icon={socialLink.icon} />
								</button>
							</li>
						))}
						{/* loop end */}
						{isSelected && (
							<li className="wp-block-create-block-sp-team-member-add-icon-li">
								<Tooltip text={__("Add Social Link", "sp-team-member")}>
									<button
										aria-label={__("Add Social Link", "sp-team-member")}
										onClick={addNewSocialLink}
									>
										<Icon icon="plus" />
									</button>
								</Tooltip>
							</li>
						)}
					</ul>
				</div>
				{selectedLink !== undefined && (
					<div className="wp-block-create-block-sp-team-member-link-form">
						<TextControl
							label={__("Icon", "sp-team-member")}
							placeholder="Icon"
							value={socialLinks[selectedLink]?.icon}
							onChange={(icon) => {
								updateSocialItem("icon", icon);
							}}
						/>
						<TextControl
							label={__("URL", "sp-team-member")}
							placeholder="URL"
							value={socialLinks[selectedLink]?.link}
							onChange={(link) => {
								updateSocialItem("link", link);
							}}
						/>
						<Button isDestructive onClick={removeSocialItem}>
							{__("Remove Link", "sp-team-member")}
						</Button>
					</div>
				)}
			</div>
		</>
	);
}

export default withNotices(Edit);
