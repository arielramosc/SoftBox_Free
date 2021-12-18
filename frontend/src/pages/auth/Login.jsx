import React, { useEffect } from 'react';
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from "../../graphql/autenticacion/mutations";


const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const { form, formData, updateFormData } = useFormData();

    const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
        useMutation(LOGIN);

    const submitForm = (e) => {
        e.preventDefault();

        login({
            variables: formData,
        });
    };

    useEffect(() => {
        if (dataMutation) {
            if (dataMutation.login.token) {
                setToken(dataMutation.login.token);
                navigate('/');
            }
        }
    }, [dataMutation, setToken, navigate]);

    return (
        <div>
            <h1 >Iniciar sesión</h1>
            <br />
            <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <p><Input name='correo' type='email' label='Correo' required={true} /></p>
                <br />
                <p><Input name='contrasena' type='password' 
                
                label='Contraseña' required={true} /></p>
                <br />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Iniciar Sesión'
                />
                
            </form>
            <br />
            <span>¿No tienes una cuenta?</span>
            <Link to='/auth/registro'>
                <span>  Regístrate</span>
            </Link>
            {/*<TextInput
    
    style={{
      color:"black",
      fontSize:18,
      marginVertical:25,
      width:'50%',
      marginHorizontal:"25%"
    }}
/>*/}


        </div>
    );
};

export default Login;