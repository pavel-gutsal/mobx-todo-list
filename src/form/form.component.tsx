import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './form.styles.css';
import { Button } from '@mui/material';
import { useStores } from '../Store/StoreContext';
import { toJS } from 'mobx'


export const Form = () => {
  const { todoList } = useStores();
  console.log(toJS(todoList))
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(Date()),
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  const descriptionHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const submitHandler = () => {
    if (title === '' || description === '' || !value) {
      return;
    };

    const newTodo = {
      id: uuidv4(),
      deadline: value?.toString(),
      title,
      description,
      completed: false,
    }

    todoList.addTodo(newTodo);

    setValue(dayjs(Date()));
    setTitle('');
    setDescription('');
  }

  return (
    <form className='form'>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        onChange={titleHandler}
        value={title}
      />
      <TextField
        id="outlined-basic"
        label="description"
        variant="outlined"
        onChange={descriptionHandler}
        value={description}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="deadline"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button onClick={submitHandler} >
        Submit
      </Button>
    </form>
  );
}