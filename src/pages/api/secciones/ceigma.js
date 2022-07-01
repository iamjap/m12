
export default function handler(req, res) {
  res.status(200).json([
    {
      grado: 'MATERNAL',
      seccion: 'A',
      docente: 'JOSEFA ROJAS'
    },
    {
      grado: 'PRIMER NIVEL',
      seccion: 'B',
      docente: 'MARIANELA GARCIA'
    },
    {
      grado: 'SEGUNDO NIVEL',
      seccion: 'C',
      docente: 'CARLA MIRANDA'
    },
    {
      grado: 'SEGUNDO NIVEL',
      seccion: 'D',
      docente: 'MILAGROS SALAS'
    },
    {
      grado: 'TERCER NIVEL',
      seccion: 'E',
      docente: 'YORASIX CALDERON'
    },
    {
      grado: 'TERCER NIVEL',
      seccion: 'F',
      docente: 'ROSA TOVAR'
    },
  ])
}
