import "@components/ChecklistItem.css";

export type Task = {
	id: string;
	text?: string;
	checked?: boolean;
};

export type ChecklistItemProps = {
	checkListItemId: string;
	checkListItemText?: string;
	checkboxId: string;
	checked?: boolean;
	onTaskUpdate: (task: Task) => void;
	onTaskRemove: (id: string) => void;
};

export const ChecklistItem = ({
	checkListItemId,
	checkListItemText,
	checkboxId,
	checked,
	onTaskUpdate,
	onTaskRemove,
}: ChecklistItemProps) => {
	const labelStyle = {
		textDecorationLine: checked ? "line-through" : "none",
		color: checked ? "#424242" : undefined
	};
	const checklistItemName = `checkbox-${checkboxId}`;

	const updateTask = (task: Task) => {
		onTaskUpdate(task);
	};

	const removeTask = () => {
		onTaskRemove(checkListItemId);
	};

	return (
		<div id={checkListItemId} className="check-list-item-box" key={checkListItemId}>
			<input
				id={checkboxId}
				className="check-list-item-checkbox"
				type="checkbox"
				name={checklistItemName}
				onChange={
					(event) => updateTask({
						id: checkListItemId,
						checked: event.target.checked,
					})
				}
			/>
			<input
				className="check-list-item-text"
				style={labelStyle}
				type="text"
				defaultValue={checkListItemText ?? ""}
				onChange={
					(event) => updateTask({
						id: checkListItemId,
						text: event.target.value,
					})
				}
			/>
			<button className="remove-task-button" onClick={removeTask}>X</button>
		</div>
	);
};
