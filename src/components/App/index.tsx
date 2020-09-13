import React, {useState} from 'react';

import useStyles from "./style";
import {Button, Grid, Paper, Typography, TextField} from "@material-ui/core";
import {SyncAlt, Copyright} from '@material-ui/icons';
import {RomanNumerals} from "../../utils/RomanNumerals";

function App() {
  const classes = useStyles();

  type CustomDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

  const [romanInput, setRomanInput] = useState<string>('');
  const [arabicInput, setArabicInput] = useState<string>('');
  const [direction, setDirection] = useState<CustomDirection>('column');

  const changeDirectionHandler = () => {
      if (direction === 'column') {
          setDirection('column-reverse');
      } else {
          setDirection('column');
      }
  };

  const changeRomanInputHandler = (e: any) => {
      setRomanInput(e.target.value);
      const result = RomanNumerals.fromRoman(e.target.value) || '';
      setArabicInput(result.toString());
  };
  const changeArabicInputHandler = (e: any) => {
      if (e.target.value !== '0') {
          setArabicInput(e.target.value);
          const result = RomanNumerals.toRoman(parseInt(e.target.value));
          setRomanInput(result);
      } else {
          setArabicInput('');
      }
  };

  return (
    <div className={classes.main}>
        <Paper elevation={5} className={classes.paper}>
            <div id="con-header" className={classes.header}>
                <Typography variant='h5' color='primary'>
                    Roman Numerals Converter
                </Typography>
            </div>
            <Grid
                container
                data-testid="Grid-body"
                direction={direction}
                className={classes.body}
            >
                <Grid item xs={12} className={classes.textFieldItem}>
                    <TextField
                        label="Roman"
                        value={romanInput}
                        className={classes.numberTextField}
                        onChange={(e)=> changeRomanInputHandler(e)}
                        InputProps={{ id: 'roman-input', readOnly: (direction === 'column-reverse') }}
                        InputLabelProps={{ htmlFor: 'roman-input' }}
                    />
                </Grid>
                <Grid item xs={12} className={classes.switchButtonItem}>
                    <Button
                        id="switch-button"
                        variant="contained"
                        fullWidth={true}
                        classes={{root: classes.switchButton}}
                        onClick={() => changeDirectionHandler()}
                    >
                        <SyncAlt />
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.textFieldItem}>
                    <TextField
                        label="Arabic"
                        value={arabicInput}
                        className={classes.numberTextField}
                        onChange={(e)=> changeArabicInputHandler(e)}
                        InputProps={{ id: 'arabic-input', readOnly: (direction === 'column') }}
                        InputLabelProps={{ htmlFor: 'arabic-input' }}
                    />
                </Grid>
            </Grid>
            <div id="con-footer" className={classes.footer}>
                <Copyright fontSize="small"/>
                <Typography variant='caption' color='primary'>
                    Created by K2
                </Typography>
            </div>
        </Paper>
    </div>
  );
}

export default App;
