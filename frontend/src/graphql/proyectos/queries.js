import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
    query ConsutaProyectos {
        Proyectos {
            _id
            nombre
            objetivo {
                descripcion
                tipo
            }
            presupuesto
            fechaInicio
            fechaFin
            lider {
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

const GET_PROYECTO = gql`
    query Proyecto($_id: String!) {
        Proyecto(_id: $_id) {
            _id
            nombre
            objetivo
            objetivoEsp
            presupuesto
            fechaInicio
            fechaFin
            lider {
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

export { GET_PROYECTOS, GET_PROYECTO };