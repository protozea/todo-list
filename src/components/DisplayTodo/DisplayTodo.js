import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './DisplayTodo.css';

const DisplayTodo = ({
    isOpen,
    formData,
    handleCloseButton,
    handleEditTodo,
    handleRemoveTodo
}) => {
    return (
        <Dialog open={isOpen} onClose={handleCloseButton}>            
            <DialogTitle>
                <div className="display-todo-title"><h3>{formData.todoName}</h3></div>
            </DialogTitle>            
            
            <DialogContent>
                <div>
                        
                    <div>{formData.todoNote}</div>
                </div>           
            </DialogContent>

            <DialogActions>
                <div className="display-buttons-wrapper">
                    <Button color="secondary" variant="outlined" onClick={handleRemoveTodo}>Удалить</Button>
                    <div>
                        <Button color="primary" onClick={handleCloseButton}>Закрыть</Button>
                        <Button color="primary" onClick={handleEditTodo}>Изменить</Button>
                    </div>                 
                </div>
            </DialogActions>

        </Dialog>
    )
}

export default DisplayTodo;
