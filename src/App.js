import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Paper, TextField, Typography } from '@material-ui/core';
import { useCallback, useEffect, useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
    height: 600,
    marginTop: 50
  },
  grid: {
    backgroundColor: 'rgb(111,111,110,0.14)',
    '& .MuiGrid-item': {
      borderColor: 'grey',
      borderWidth: '0.1px',
      border: 'double'
    },
    paper: {
      backgroundColor: 'rgb(111,111,110,0.3)'
    },
  }
}))

function App() {
  const c = useStyles();
  const inputRef = useRef(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [prevValue, setPrevValue] = useState(null);
  const [symbol, setSymbol] = useState(null)

  const helperFunctions = {
    AC: function () {
      setCurrentValue(0);
      setPrevValue(0);
    },
    plusMinus: function () {
      const value = currentValue * (-1);
      setCurrentValue(value)
    },
    percentage: function () {
      return setCurrentValue(prev => prev / 100)

    },
    addition: function () {
      setPrevValue(currentValue)
      setSymbol('+')
      setCurrentValue(0)
    },
    multiplication: function () {
      setPrevValue(currentValue)
      setSymbol('*')
      setCurrentValue(0)
    },
    substraction: function () {
      setPrevValue(currentValue)
      setSymbol('-')
      setCurrentValue(0)
    },
    division: function () {
      setPrevValue(currentValue)
      setSymbol('/')
      setCurrentValue(0)
    },
    dot: function () {
        const str = String(currentValue)
        if (str.match(/\./g) === null) {
          setCurrentValue(prev => `${prev}.`)
        }
    },
    equal: function () {
      switch (symbol) {
        case '+':
          setCurrentValue(prev => prevValue + prev)
          setSymbol('')
          setPrevValue(currentValue)
          break;
        case '-':
          setCurrentValue(prev => prevValue - prev)
          setSymbol('')
          setPrevValue(currentValue)
          break;
        case '/':
          setCurrentValue(prev => prevValue / prev)
          setSymbol('')
          setPrevValue(currentValue)
          break;
        case '*':
          setCurrentValue(prev => prevValue * prev)
          setSymbol('')
          setPrevValue(currentValue)
          break;
        default:
          setPrevValue(currentValue)
      }
    },
  }

  console.log(currentValue);
  return (
    <div>
      <Container className={c.container}>
        <Typography gutterBottom variant='h6'>Previous:{prevValue}{symbol}</Typography>
        <Paper elevation={8} className={c.paper}>
          <Grid container direction='row' alignItems='center' justify='center' className={c.grid}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" variant="outlined" fullWidth ref={inputRef} value={currentValue} />
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems='center' justify='center' className={c.grid}>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.AC}>
                    AC
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.plusMinus}>
                    +/-
                  </Button>
                </Grid>
                <Grid item xs={3} >
                  <Button onClick={helperFunctions.percentage}>
                    %
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.division}>
                    \
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(7) :
                      setCurrentValue(prev => Number(`${prev}7`))
                  }}>
                    7
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(8) :
                      setCurrentValue(prev => Number(`${prev}8`))
                  }}>
                    8
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(9) :
                      setCurrentValue(prev => Number(`${prev}9`))
                  }}>
                    9
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.multiplication}>
                    x
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(4) :
                      setCurrentValue(prev => Number(`${prev}4`))
                  }}>
                    4
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(5) :
                      setCurrentValue(prev => Number(`${prev}5`))
                  }}>
                    5
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(6) :
                      setCurrentValue(prev => Number(`${prev}6`))
                  }}>
                    6
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.substraction}>
                    -
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(1) :
                      setCurrentValue(prev => Number(`${prev}1`))
                  }}>
                    1
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(2) :
                      setCurrentValue(prev => Number(`${prev}2`))
                  }}>
                    2
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(3) :
                      setCurrentValue(prev => Number(`${prev}3`))
                  }}>
                    3
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.addition}>
                    +
                  </Button>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button style={{ width: '100%' }} onClick={() => {
                    currentValue === 0 ?
                      setCurrentValue(0) :
                      setCurrentValue(prev => Number(`${prev}0`))
                  }}>
                    0
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.dot}>
                    ,
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.equal}>
                    =
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
