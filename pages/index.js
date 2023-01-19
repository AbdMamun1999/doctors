import { Inter } from '@next/font/google'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  
    </>
  )
}
