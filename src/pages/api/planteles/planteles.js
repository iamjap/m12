// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{
    nombre: 'CEI OTTONIEL',
    director: 'value value',
    nivel: 'INICIAL'
  },
  {
    nombre: 'E B B GRAN MARISCAL DE AYACUHO',
    director: 'MARÍA ROMERO',
    nivel: 'PRIMARIA'
  },
  {
    nombre: 'LICEO VERITAS',
    director: 'JOSE MORILLO',
    nivel: 'MEDIA'
  }])
}
