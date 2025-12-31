import { RichText, useBlockProps } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";

const save = ({ attributes }) => {
	const { name, bio, url, alt, id, socialLinks } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
			)}

			{name && <RichText.Content tagName="h4" value={name} />}
			{bio && <RichText.Content tagName="p" value={bio} />}
			{socialLinks && socialLinks.length > 0 && (
				<div className="wp-block-create-block-sp-team-member-social-links">
					<ul>
						{socialLinks.map((socialLink, index) => (
							<li key={index} data-icon={socialLink.icon}>
								<a href={socialLink.link} target="_blank">
									<Icon icon={socialLink.icon} />
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default save;
