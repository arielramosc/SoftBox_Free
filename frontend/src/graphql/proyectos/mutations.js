import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`

    mutation CrearProyecto(
        $nombre: String!, 
        $presupuesto: Float!, 
        $objetivo: String!
        $objetivoEsp: String!
    ) {
        crearProyecto(
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            objetivo: $objetivo
            objetivoEsp: $objetivoEsp
        ) {
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

const EDITAR_PROYECTO = gql`

    mutation EditarProyecto(
        $_id: String, 
        $nombre: String, 
        $presupuesto: Float, 
        $estado: Enum_EstadoProyecto, 
        $fase: Enum_FaseProyecto, 
        $objetivo: [String]
    ) {
        editarProyecto(
            _id: $_id, 
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            estado: $estado, 
            fase: $fase, 
            objetivo: $objetivo
        ) {
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

export { CREAR_PROYECTO, EDITAR_PROYECTO };