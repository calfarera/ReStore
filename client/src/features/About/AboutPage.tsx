// Import React's Components
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// Import Material-UI
import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import Agent from '../../app/API/Agent';

// Codes
export default function AboutPage() {
    // State Conditions
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    // const navigate = useNavigate();
    
    // Validation Error Function
    function getValidationError() {
        Agent.TestErrors.getValidationError()
            .then(() => console.log('Should not see this'))
            .catch(error => setValidationErrors(error));
    }

    return (
    <> 
        <Container>
            <Typography gutterBottom variant='h2'>
                Errors for Testing Purposes
            </Typography>

            <ButtonGroup fullWidth>
                <Button variant='contained' onClick={
                    () => Agent.TestErrors.get400Error().catch(error => console.log(error))}>
                    Test 400 Error
                </Button>
                
                <Button variant='contained' onClick={
                    () => Agent.TestErrors.get401Error().catch(error => console.log(error))}>
                    Test 401 Error
                </Button>
                
                <Button variant='contained' onClick={
                    () => Agent.TestErrors.get404Error().catch(error => console.log(error))}>
                    Test 404 Error
                </Button>
                
                <Button variant='contained' onClick={
                    () => Agent.TestErrors.get500Error().catch(error => console.log(error))}>
                    Test 500 Error
                </Button>
                
                <Button variant='contained' onClick={getValidationError}>
                    {/* () => Agent.TestErrors.getValidationError().catch(error => console.log(error))}>  */}
                    Test Validations Error
                </Button>
            </ButtonGroup>

            {validationErrors.length > 0 && 
                <Alert severity='error' >
                    <AlertTitle>
                        Validation Errors
                    </AlertTitle>
                    <List>
                        {validationErrors.map(error => (
                            <ListItem key={error} >
                                <ListItemText >
                                    {error}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container>
    </>
  )
}