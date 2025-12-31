import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { __ } from "@wordpress/i18n";
import { Icon } from "@wordpress/components";

const SortableItem = (props) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: props.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<li
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className={props.selectedLink === props.index ? "is-selected" : null}
		>
			<button
				aria-label={__("Edit Social Link", "sp-team-member")}
				onClick={() => props.setSelectedLink(props.index)}
			>
				<Icon icon={props.socialLink.icon} />
			</button>
		</li>
	);
};

export default SortableItem;
