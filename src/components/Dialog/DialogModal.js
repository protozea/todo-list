import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './DialogModal.css';

const DialogModal = ({
    isOpen,
    handleOpenDialog,
    handleSetFieldValue,
    formData,
    handleSetTodoOnSubmit
}) => {
    return (
        <Dialog open={isOpen} onClose={handleOpenDialog}>            
            <DialogTitle>{formData.isEdit ? "Изменение" : "Новая задача"}</DialogTitle>            
            <DialogContent>
                <form onSubmit={handleSetTodoOnSubmit}>
                    <TextField
                        label="Название"
                        variant='outlined'
                        onChange={(e) => handleSetFieldValue('todoName', e.target.value)}
                        value={formData.todoName} 
                    />       

                    <TextField
                        label="Текст"
                        variant='outlined'
                        onChange={(e) => handleSetFieldValue('todoNote', e.target.value)}
                        value={formData.todoNote}
                        multiline 
                        rows={4}
                    />

                    <DialogActions>
                        <Button color="primary" onClick={handleOpenDialog}>Закрыть</Button>
                        <Button disabled={!formData.todoName} type="submit" color="primary">{formData.isEdit ? "Сохранить" : "Добавить"}</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DialogModal;
