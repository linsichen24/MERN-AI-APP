import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value,handleChange, isSurpriseMe, handleSurpriseNme }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {/*
          当 isSurpriseMe 为真时，渲染一个按钮元素，该按钮具有 Surprise me 的文本内容，可以被点击触发 handleSurpriseNme 函数的执行 
        */}
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseNme}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">
              Surprise me
            </button>
        )}
      </div>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-4 focus:ring[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        />
    </div>
  )
}

export default FormField