import React from 'react';


const ListeClasses = ({ classes, fetchClasses, supprimerClasse }) => {
    return (
        <div>
            <h2>قائمة الأقسام</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>الإسم</th>
                        <th>المستوى</th>
                        <th>إجراء</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classe) => (
                        <tr key={classe.nomClasse}>
                            <td>{classe.nomClasse}</td>
                            <td>{classe.niveauClasse}</td>
                            <td>
                                <button className="button-modifier" onClick={() => alert(`Modification de la classe : ${classe.nomClasse}`)}>
                                تعديل
                                </button>
                                <button className="button-supprimer" onClick={() => supprimerClasse(classe.nomClasse)}>
                                حذف
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeClasses;
