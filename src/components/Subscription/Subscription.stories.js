import React from "react"
import { Primary } from "../MyButton/MyButton.stories"
import { Large } from "../TextInput/TextInput.stories"

export default {
  title: "Form/Subscription"
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)
