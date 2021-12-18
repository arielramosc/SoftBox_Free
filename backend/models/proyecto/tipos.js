import { gql } from 'apollo-server-express';

const tiposProyecto = gql`

type Proyecto {
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: Usuario!
        objetivo: String!
        objetivoEsp: String!
        avances: [Avance] 
        inscripciones: [Inscripcion] 
    }

    type Query {
        
        Proyectos: [Proyecto]

        Proyecto(
            _id: String!
        ): Proyecto

        ProyectosPorLider(
            lider: String!
        ): [Proyecto]
    }

    type Mutation {
        
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            
            objetivo: String!
            objetivoEsp: String!
        ): Proyecto

        editarProyecto(
            _id: String
            nombre: String
            presupuesto: Float
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            objetivo: String
        ): Proyecto
    }
`;

export { tiposProyecto };