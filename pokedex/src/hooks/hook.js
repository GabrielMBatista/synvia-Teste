import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


export const useProtectedPage = () => {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            history.push("/register");
        }else{
            history.push("/profile");
        }
    }, [history]);
};


const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const clearFields = () => {
        setForm(initialState);
    };

    return [form, onChange, clearFields];
};
export default useForm;


