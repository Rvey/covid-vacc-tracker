import React from 'react'

export default function MailConfirmation() {
  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input className="appearance-none bg-transparent color-white border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email confirmation"  />
        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
          Comfirm
        </button>
      </div>
    </div>

  )
}
