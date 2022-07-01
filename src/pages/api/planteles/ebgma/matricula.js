
export default function handler(req, res) {
  res.status(200).json([
    {
      grado: 'PRIMERO',
      seccion: 'A',
      masculino: '13',
      femenino: '13',
      total: '26',
    },
    {
      grado: 'PRIMERO',
      seccion: 'B',
      masculino: '11',
      femenino: '15',
      total: '26',
    },
    {
      grado: 'SEGUNDO',
      seccion: 'A',
      masculino: '5',
      femenino: '7',
      total: '12',
    },
    {
      grado: 'SEGUNDO',
      seccion: 'B',
      masculino: '8',
      femenino: '9',
      total: '17',
    },
    {
      grado: 'TERCERO',
      seccion: 'A',
      masculino: '8',
      femenino: '6',
      total: '14',
    },
    {
      grado: 'TERCERO',
      seccion: 'B',
      masculino: '12',
      femenino: '7',
      total: '19',
    },
    {
      grado: 'CUARTO',
      seccion: 'A',
      masculino: '13',
      femenino: '8',
      total: '21',
    },
    {
      grado: 'CUARTO',
      seccion: 'B',
      masculino: '18',
      femenino: '7',
      total: '25',
    },
    {
      grado: 'QUINTO',
      seccion: 'A',
      masculino: '10',
      femenino: '12',
      total: '22',
    },
    {
      grado: 'QUINTO',
      seccion: 'B',
      masculino: '11',
      femenino: '15',
      total: '26',
    },
    {
      grado: 'SEXTO',
      seccion: 'A',
      masculino: '8',
      femenino: '16',
      total: '24',
    },
    {
      grado: 'SEXTO',
      seccion: 'B',
      masculino: '11',
      femenino: '12',
      total: '23',
    },    
  ])
}
