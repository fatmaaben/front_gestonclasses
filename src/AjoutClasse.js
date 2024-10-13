import React, { useState } from 'react';

const AjoutClasse = ({ fetchClasses }) => {
    const [nomClasse, setNomClasse] = useState('');
    const [niveauClasse, setNiveauClasse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:9091/api/classe/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nomClasse, niveauClasse }),
        });

        if (response.ok) {
            alert('تمت الإضافة بنجاح');
         
            setNomClasse('');
            setNiveauClasse('');
           
            fetchClasses();
        } else {
            alert('حدث خطأ عند إضافة القسم ');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nomClasse}
                onChange={(e) => setNomClasse(e.target.value)}
                placeholder="الإسم"
                required
            />
            <input
                type="text"
                value={niveauClasse}
                onChange={(e) => setNiveauClasse(e.target.value)}
                placeholder="المستوى"
                required
            />
            <button type="submit">إضافة </button>
        </form>
    );
};

export default AjoutClasse;
