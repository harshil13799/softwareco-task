import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface EstimationItem {
  title: string;
  description: string;
  unit: string;
  quantity: number;
  price: number;
  margin: number;
}

const EstimationForm: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<EstimationItem[]>([{
    title: '',
    description: '',
    unit: '',
    quantity: 0,
    price: 0,
    margin: 0,
  }]);

  const handleChange = (index: number, field: keyof EstimationItem, value: string | number) => {
    const newItems:any = [...items];
    newItems[index][field] = field === 'quantity' || field === 'price' || field === 'margin'
      ? Number(value) : value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { title: '', description: '', unit: '', quantity: 0, price: 0, margin: 0 }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateTotal = (item: EstimationItem) => {
    const base = item.quantity * item.price;
    return base + (base * item.margin / 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Estimation submitted');
    navigate('/estimations');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">New Estimation</h1>
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <input
              type="text"
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Unit"
              value={item.unit}
              onChange={(e) => handleChange(index, 'unit', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleChange(index, 'quantity', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleChange(index, 'price', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Margin (%)"
              value={item.margin}
              onChange={(e) => handleChange(index, 'margin', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <p className="mb-2">Total: ₹{calculateTotal(item).toFixed(2)}</p>
            <button type="button" onClick={() => handleRemoveItem(index)} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Item</button>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Estimation</button>
      </form>
    </div>
  );
};

export default EstimationForm;
