import React, { useState, useEffect } from 'react';
//import { fetchItems, addItem, updateItem, deleteItem } from '../api';
import { fetchItems, } from '../api';

const Films = () => {
    const [items, setItems] = useState([]);
    //const [name, setName] = useState('');

    const loadItems = async () => {
        const res = await fetchItems();
        setItems(res.data);
    };

    useEffect(() => {
        loadItems();
    }, []);

    // const handleAdd = async () => {
    //     if (name) {
    //         await addItem({ name });
    //         setName('');
    //         loadItems();
    //     }
    // };

    // const handleUpdate = async (id) => {
    //     const newName = prompt('Enter new name:');
    //     if (newName) {
    //         await updateItem(id, { name: newName });
    //         loadItems();
    //     }
    // };
    //
    // const handleDelete = async (id) => {
    //     await deleteItem(id);
    //     loadItems();
    // };

    return (
        <div>
            {/*<h1>CRUD Items</h1>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={name}*/}
            {/*    onChange={(e) => setName(e.target.value)}*/}
            {/*    placeholder="Add new item"*/}
            {/*/>*/}
            {/*<button onClick={handleAdd}>Add</button>*/}
            <ul>
                {items.map(item => (
                    <li key={item.title}>
                        {item.title}
                        {item.year}
                        {/*<button onClick={() => handleUpdate(item._id)}>Edit</button>*/}
                        {/*<button onClick={() => handleDelete(item._id)}>Delete</button>*/}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Films;
