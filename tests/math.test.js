const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math')

test('calculate total with the tip',()=>{
 const total = calculateTip(10, .3)
expect(total).toBe(13)
})

test('calculate total with a default tip',()=>{
    const total = calculateTip(10)
    expect(total).toBe(12)
})

test('should convert fehrenheit to celsius', ()=>{
  const temp = fahrenheitToCelsius(32)
  expect(temp).toBe(0)
})

test('should convert celsius to fahrenheit', ()=>{
  const temp = celsiusToFahrenheit(0)
  expect(temp).toBe(32)
})

// test('test async demo',(done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         done()
//     },2000)
//     })

test('should add 2 numbers',(done)=>{
    add(2,10).then((sum)=>{
        expect(sum).toBe(12)
        done()
    })
})

test('should add 2 numbers using async/await', async()=>{
   const sum = await add(20,20)
   expect(sum).toBe(40)
})