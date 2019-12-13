import React, { useState } from 'react';
import { FormControl, Input, InputAdornment, IconButton, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/Send';

const useStyle = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));


const App = () => {
  const classes = useStyle();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput(`Hello ${input}`);
  };

  return (
    <div data-testid="form">
      <h3>Material Form</h3>
      <FormControl className={classes.root}>
        <InputLabel htmlFor="adornment-send-title" data-testid="label">
          Enter Name
        </InputLabel>
        <Input
          id="adornment-send-title"
          type="text"
          value={input}
          onChange={handleChange}
          inputProps={{
            'data-testid': 'nameInput'
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="submit answer"
                onClick={handleSubmit}
                data-testid="submit"
              >
                <Send className={classes.iconColor} />
              </IconButton>
            </InputAdornment>
          }
        />
        
      </FormControl>
      <p data-testid="output">{output}</p>
    </div>
  );
};

export default App;