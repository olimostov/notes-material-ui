import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Button, FormControlLabel } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});
export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('private');

  const handleSubmit = e => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true);
    }
    if (details == '') {
      setDetailsError(true);
    }
    if (title && details) {
      console.log('title, details :>> ', title, details, category);
      // setTitle('');
      // setDetails('');
    }
  };

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={e => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='primary'
          className={classes.field}
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={e => setDetails(e.target.value)}
          label='Details'
          variant='outlined'
          color='primary'
          multiline
          rows={4}
          className={classes.field}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onClick={e => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              value='private'
              label='Private'
            />
            <FormControlLabel
              control={<Radio />}
              value='shared'
              label='Shared'
            />
          </RadioGroup>
        </FormControl>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
