import '../index.css';
import AddFunds from './procedureForms/AddFunds';
import AddPatient from './procedureForms/AddPatient';
import AddStaffToDept from './procedureForms/AddStaffToDept';
import AssignDoctorToAppointment from './procedureForms/AssignDoctorToAppointment';
import AssignNurseToRoom from './procedureForms/AssignNurseToRoom';
import AssignRoomToPatient from './procedureForms/AssignRoomToPatient';
import BookAppointment from './procedureForms/BookAppointment';
import CompleteAppointment from './procedureForms/CompleteAppointment';
import CompleteOrders from './procedureForms/CompleteOrders';
import ManageDepartment from './procedureForms/manageDepartment';
import PlaceOrder from './procedureForms/PlaceOrder';
import RecordSymptom from './procedureForms/RecordSymptom';
import ReleaseRoom from './procedureForms/releaseRoom';
import RemovePatient from './procedureForms/RemovePatient';
import RemoveStaffFromDept from './procedureForms/RemoveStaffFromDept';

const ProcedureInputForms = ({ type, onClose, onSuccess }) => {
    const PROCEDURE_INPUT_FORMS = {
        'Add funds': AddFunds,
        'Add patient': AddPatient,
        'Add staff': AddStaffToDept,
        'Assign doctor': AssignDoctorToAppointment,
        'Assign nurse': AssignNurseToRoom,
        'Assign room': AssignRoomToPatient,
        'Book appointment': BookAppointment,
        'Complete appointment': CompleteAppointment,
        'Complete orders': CompleteOrders,
        'Manage department': ManageDepartment,
        'Place order': PlaceOrder,
        'Record symptom': RecordSymptom,
        'Release room': ReleaseRoom,
        'Remove patient': RemovePatient,
        'Remove staff from dept': RemoveStaffFromDept
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
