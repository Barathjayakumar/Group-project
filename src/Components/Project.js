import React from 'react'

export default function Project() {
  return (
    <div>
        <div className='pro' >
        <form >
        <label>Project Name:</label>
        <input type='text' placeholder='Enter Project Name' onChange=""/>
        <label>Description:</label>
        <textarea></textarea>
        <label>Advance Amount:</label>
        <input type='number' placeholder='Adance Amount:' />
        <label>Total Amount:</label>
        <input type='number' placeholder='Total Amount' />
        <button>Submit</button>
        </form>
        </div>
    </div>
  )
}
