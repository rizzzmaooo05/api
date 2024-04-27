import express from 'express'
import { createClient } from '@supabase/supabase-js'

const app = express()

const supabaseUrl = 'https://yoaooonjlnahhcgxdyxr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvYW9vb25qbG5haGhjZ3hkeXhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDIxMjE3MSwiZXhwIjoyMDI5Nzg4MTcxfQ.os_Y6SoXOUOx1rZ1QjAvkVdx_Dx9Yh1Mou2uM4yBPKk'
const db = createClient(supabaseUrl, supabaseKey)

app.get('/', async (req, res) => {
  const getData = await db.from('books').select()

  res.send(getData.data)
})

app.listen(6969, () => {
  console.log('server jalan')
})