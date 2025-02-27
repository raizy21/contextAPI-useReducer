import { useState } from 'react';
import { useDucks } from '../context/context';
import EditForm from './EditForm';

const DuckCard = ({ duck }) => {
    const [editing, setEditing] = useState(false);
    const { duckDispatch } = useDucks();
    const { imgUrl, name, quote, id } = duck;
    const handleDelete = () => {
        duckDispatch({ type: 'DUCK_DELETED', payload: id });
    };

    if (editing) return <EditForm {...duck} setEditing={setEditing} />;

    return (
        <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md flex-flex-col'>
            <figure className='rounded-t-md overflow-hidden w-full h-96'>
                <img className='w-full h-full' src={imgUrl} alt={name} />
            </figure>
            <div className='flex flex-col p-6 pt-2 bg-slate-800 h-40'>
                <h2 className='text-3xl border-b-2 mb-4 border-b-gray-400'>
                    {name}
                </h2>
                <p>{quote}</p>
            </div>
            <div className='flex justify-end bg-slate-800 rounded-b-md pb-4 pr-4 gap-2'>
                <button
                    onClick={handleDelete}
                    className='bg-red-600 p-2 rounded-lg font-bold'
                >
                    Delete Duck
                </button>
                <button
                    onClick={() => setEditing(true)}
                    className='bg-green-600 p-2 rounded-lg font-bold'
                >
                    Edit Duck
                </button>
            </div>
        </div>
    );
};

export default DuckCard;
