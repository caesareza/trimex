import React from 'react'

type IAlert = {
  message: string
}

const Alert = ({ message }: IAlert) => (
  <div className="p-5 container mx-auto">
    <p className="p-3 bg-amber-100 border border-amber-200 text-amber-600 rounded">
      {message}
    </p>
  </div>
)

export default Alert
