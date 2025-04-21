import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Container, keyframes } from '@mui/material';
import { useTranslation } from 'react-i18next';

const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

function Reviews() {
    const { t } = useTranslation();
    const testimonials = t('reviews.testimonials', { returnObjects: true });

    return (
        <Box
            sx={{
                marginBottom: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'text.primary'
                    }}
                >
                    {t('reviews.title')}
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: 3,
                        p: 2
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            animation: `${scrollAnimation} 50s linear infinite`,
                            '&:hover': {
                                animationPlayState: 'paused'
                            },
                            width: 'fit-content'
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <Card
                                key={`${testimonial.id}-${index}`}
                                sx={{
                                    width: 300,
                                    m: 1,
                                    bgcolor: 'rgb(22, 26, 35)',
                                    backgroundImage: 'none',
                                    flexShrink: 0,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 6
                                    }
                                }}
                            >
                                <CardContent>
                                    <Box sx={{ bgcolor: 'rgb(22, 26, 35)', display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Avatar
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            sx={{ width: 48, height: 48, mr: 2 }}
                                        />
                                        <Box>
                                            <Typography variant="h6" component="h3">
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" color="text.primary">
                                        {testimonial.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Reviews;
