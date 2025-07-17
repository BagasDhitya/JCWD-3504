import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface ICoffe {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
}

export default function CoffeCard({ id, name, description, price, image }: ICoffe) {
    return (
        <Card key={id} className='rounded-xl shadow-lg overflow-hidden'>
            <CardMedia
                component="img"
                height="160"
                className='w-40 h-40'
                image={image}
                alt={name}
            />
            <CardContent>
                <div className='mb-10'>
                    <Typography
                        variant='h6'
                        className='text-yellow-900 font-bold'
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant='body2'
                        className='text-yellow-800'
                    >
                        {description}
                    </Typography>
                </div>
                <Typography
                    className='mt-2'
                >
                    Rp {price.toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    )
}