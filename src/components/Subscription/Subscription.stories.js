import React from "react"
import { Primary } from "../MyButton/MyButton.stories"
import { Large } from "../TextInput/TextInput.stories"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Form/Subscription"
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)
