import '../index.css';
import AddFunds from './procedureForms/AddFunds';
import AddPatient from './procedureForms/AddPatient';

const ProcedureInputForms = ({ type, onClose }) => {
    const PROCEDURE_INPUT_FORMS = {
        'Add funds': AddFunds,
        'Add patient': AddPatient
    }

    const InputForm = PROCEDURE_INPUT_FORMS[type];

    console.log(type);
    console.log(InputForm);

    return (
        <InputForm
            onClose={onClose}
        ></InputForm>
    );
};

export default ProcedureInputForms;
