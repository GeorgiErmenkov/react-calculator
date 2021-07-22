import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Paper, Typography } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
    height: 600,
    marginTop: 50
  },
  grid: {
    backgroundColor: 'rgb(111,111,110,0.2)',
    borderColor: 'grey',
    borderWidth: '0.1px',
    borderRadius: 8,
    border: 'double',
    '& .MuiGrid-item': {
      borderColor: 'grey',
      borderWidth: '0.1px',
      border: 'double',
      borderRadius: 8,
    },
  },
  paper: {
    backgroundColor: 'rgb(200,200,200,0.2)',
    borderRadius: 8,
  },
  mainDisplay: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  historyDisplay: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
  }
}))

function App() {
  const c = useStyles();
  const [currentValue, setCurrentValue] = useState(0);
  const [prevValue, setPrevValue] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [wasClicked, setWasClicked] = useState(false);

  const helperFunctions = {
    number: function (num) {
      if (currentValue === 0) {
        setCurrentValue(num)
      } else {
        setCurrentValue(prev => Number(`${prev}${num}`))
      }
    },
    AC: function () {
      setCurrentValue(0);
      setPrevValue(0);
      setSymbol('');
      setWasClicked(false);
    },
    plusMinus: function () {
      const value = currentValue * (-1);
      setCurrentValue(value)
    },
    percentage: function () {
      return setCurrentValue(prev => prev / 100)

    },
    addition: function () {
      if (!wasClicked) {
        setPrevValue(currentValue)
        setSymbol('+')
        setWasClicked(true)
      } else {
        setPrevValue(prev => eval(`${prev}${symbol}${currentValue}`))
        setSymbol('+')
      }
      setCurrentValue(0)
    },
    multiplication: function () {
      if (!wasClicked) {
        setPrevValue(currentValue)
        setSymbol('*')
        setWasClicked(true)
      } else {
        setPrevValue(prev => eval(`${prev}${symbol}${currentValue}`))
        setSymbol('*')
      }
      setCurrentValue(0)
    },
    substraction: function () {
      if (!wasClicked) {
        setPrevValue(currentValue)
        setSymbol('-')
        setWasClicked(true)
      } else {
        setPrevValue(prev => eval(`${prev}${symbol}${currentValue}`))
        setSymbol('-')
      }
      setCurrentValue(0)
    },
    division: function () {
      if (!wasClicked) {
        setPrevValue(currentValue)
        setSymbol('/')
        setWasClicked(true)
      } else {
        setPrevValue(prev => eval(`${prev}${symbol}${currentValue}`))
        setSymbol('/')
      }
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
          setWasClicked(false)
          break;
        case '-':
          setCurrentValue(prev => prevValue - prev)
          setSymbol('')
          setPrevValue(currentValue)
          setWasClicked(false)
          break;
        case '/':
          setCurrentValue(prev => prevValue / prev)
          setSymbol('')
          setPrevValue(currentValue)
          setWasClicked(false)
          break;
        case '*':
          setCurrentValue(prev => prevValue * prev)
          setSymbol('')
          setPrevValue(currentValue)
          setWasClicked(false)
          break;
        default:
          setPrevValue(currentValue)
      }
    },
  }

  console.log(currentValue);
  return (
    <Container className={c.container}>
        <Paper elevation={10} className={c.paper}>
          <Grid container direction='row' alignItems='center' justify='center' className={c.grid}>
            <Grid item xs={12} className={c.historyDisplay}>
              <Typography variant='subtitle2' color='secondary'>Previous:{prevValue}{symbol}</Typography>
            </Grid>
            <Grid item xs={12} className={c.mainDisplay}>
              <Typography variant='h5'>{currentValue}</Typography>
            </Grid>
            <Grid item xs={12} style={{ border: 'hidden'}}>
              <Grid container alignItems='center' justify='center' className={c.grid}>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.AC}>
                    <b>AC</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.plusMinus}>
                    <b>+/-</b>
                  </Button>
                </Grid>
                <Grid item xs={3} >
                  <Button onClick={helperFunctions.percentage}>
                    <b>%</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.division}>
                    <b>/</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => { helperFunctions.number(7)} }>
                    <b>7</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(8)} }>
                    <b>8</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(9)} }>
                    <b>9</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.multiplication}>
                    <b>x</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(4)} }>
                    <b>4</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(5)} }>
                    <b>5</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(6)} }>
                    <b>6</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.substraction}>
                    <b>-</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(1)} }>
                    <b>1</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(2)} }>
                    <b>2</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                <Button onClick={() => { helperFunctions.number(3)} }>
                    <b>3</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.addition}>
                    <b>+</b>
                  </Button>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => { helperFunctions.number(0)} } style={{ width: '100%'}}>
                    <b>0</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.dot}>
                    <b>,</b>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={helperFunctions.equal}>
                    <b>=</b>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
    </Container>
  );
}

export default App;
