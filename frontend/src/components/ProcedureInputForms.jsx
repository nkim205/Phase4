import '../index.css';
import AddFunds from './procedureForms/AddFunds';
import AddPatient from './procedureForms/AddPatient';
import AddStaffToDept from './procedureForms/AddStaffToDept';
import AssignNurseToRoom from './procedureForms/AssignNurseToRoom';
import BookAppointment from './procedureForms/BookAppointment';
import PlaceOrder from './procedureForms/PlaceOrder';
import RecordSymptom from './procedureForms/RecordSymptom';

const ProcedureInputForms = ({ type, onClose, onSuccess }) => {
    const PROCEDURE_INPUT_FORMS = {
        'Add funds': AddFunds,
        'Add patient': AddPatient,
        'Add staff': AddStaffToDept,
        'Assign nurse': AssignNurseToRoom,
        'Book appointment': BookAppointment,
        'Place order': PlaceOrder,
        'Record symptom': RecordSymptom
    }

    const InputForm = PROCEDURE_INPUT_FORMS[type];

    return (
        <InputForm
            onClose={onClose}
            onSuccess={onSuccess}
        ></InputForm>
    );
};

export default ProcedureInputForms;
