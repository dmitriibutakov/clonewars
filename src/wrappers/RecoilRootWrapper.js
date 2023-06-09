"use client"

import React from "react"
import { RecoilRoot } from "recoil"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function RecoilRootWrapper({ children }) {
  return (
    <RecoilRoot>
      {children}
      <ToastContainer theme="dark" />
    </RecoilRoot>
  )
}

export default RecoilRootWrapper
