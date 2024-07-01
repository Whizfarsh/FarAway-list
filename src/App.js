import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./stats";

export default function App() {
	const [items, setItems] = useState([]);
	function handleAddItems(item) {
		// adding itens
		setItems((items) => [...items, item]);
		console.log(items);
	}

	// deleting an item
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	// updating the list
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);

		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

// export default App;
