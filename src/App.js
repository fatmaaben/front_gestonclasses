import React, { useEffect, useState } from 'react';
import AjoutClasse from './AjoutClasse';
import ListeClasses from './ListeClasses';
import './App.css';

const App = () => {
    const [classes, setClasses] = useState([]);

    const fetchClasses = async () => {
        const response = await fetch('http://localhost:9091/api/classe/all');
        const data = await response.json();
        setClasses(data);
    };

    const supprimerClasse = async (nomClasse) => { 
        const response = await fetch(`http://localhost:9091/api/classe/delete/${nomClasse}`, { 
            method: 'DELETE',
        });
        if (response.ok) {
            alert('تم الحذف بنجاح');
            fetchClasses(); 
        } else {
            alert('خطأ في حذف القسم');
        }
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    return (
        <div>
            <h1>إدارة الأقسام</h1>
            <AjoutClasse fetchClasses={fetchClasses} />
            <ListeClasses classes={classes} fetchClasses={fetchClasses} supprimerClasse={supprimerClasse} />
        </div>
    );
};

export default App;
