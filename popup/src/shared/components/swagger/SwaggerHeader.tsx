import { useStores } from "@/shared/models"
import { SwaggerUIX } from "@/shared/website/swagger/swagger-ui"
import withStorage from "@/shared/withStorage"
import { Button, Input } from "antd"
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"

type Props = {
  swaggerUI: SwaggerUIX
}

export const SwaggerHeaderComponent: FC<Props> = observer((props: Props) => {
  const { swaggerUI } = props

  const {
    website: {
      swaggerTool: {
        autoExecute,
        autoInitUI,
        adminIamUserId: _adminIamUserId = undefined,
        adminEmail: _adminEmail = undefined,
        adminId: _adminId = undefined,
        performerIamUserId: _performerIamUserId = undefined,
        performerEmail: _performerEmail = undefined,
        performerId: _performerId = undefined,
        userIamUserId: _userIamUserId = undefined,
        userEmail: _userEmail = undefined,
        userId: _userId = undefined,
        setProp,
      },
    },
  } = useStores()
  const [adminIamUserId, setAdminIamUserId] = useState(_adminIamUserId)
  const [adminEmail, setAdminEmail] = useState(_adminEmail)
  const [adminId, setAdminId] = useState(_adminId)

  const [performerIamUserId, setPerformerIamUserId] = useState(_performerIamUserId)
  const [performerEmail, setPerformerEmail] = useState(_performerEmail)
  const [performerId, setPerformerId] = useState(_performerId)

  const [userIamUserId, setUserIamUserId] = useState(_userIamUserId)
  const [userEmail, setUserEmail] = useState(_userEmail)
  const [userId, setUserId] = useState(_userId)

  const onLoginAsAdmin = () => {
    highlightAccountType("admin")
    swaggerUI.login(adminIamUserId, adminEmail, adminId, "administrator")
  }

  const onLoginWithApiAccessToken = () => {
    highlightAccountType("api-access-token")

    // swaggerUI.loginWithApiAccessToken(
    //   adminIamUserId,
    //   adminEmail,
    //   adminId,
    // )
  }

  const onLoginAsPerformer = () => {
    highlightAccountType("performer")
    swaggerUI.login(performerIamUserId, performerEmail, performerId, "performer")
  }

  const onLoginAsUser = () => {
    highlightAccountType("user")
    swaggerUI.login(userIamUserId, userEmail, userId, "user")
  }

  const highlightAccountType = (type: string) => {
    const accountElements = document.querySelectorAll(".account") as NodeListOf<HTMLElement>
    accountElements.forEach((element) => {
      element.style.background = "none" // hoặc 'transparent'
    })

    const loggedInElement = document.querySelector(`.${type}`) as HTMLElement | null
    if (loggedInElement) {
      loggedInElement.style.background = "coral"
    }
  }

  return (
    <div className="flex flex-column items-center">
      <div className="flex items-center">
        <div className="flex items-center">
          <p>Admin</p>
          <Input
            placeholder="Admin Iam User ID"
            value={adminIamUserId}
            onChange={(e) => {
              setAdminIamUserId(e.target.value)
              setProp("adminIamUserId", e.target.value)
            }}
          />
          <Input
            placeholder="Admin email"
            value={adminEmail}
            onChange={(e) => {
              setAdminEmail(e.target.value)
              setProp("adminEmail", e.target.value)
            }}
          />
          <Input
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => {
              setAdminId(e.target.value)
              setProp("adminId", e.target.value)
            }}
          />
          <div
            className="flex items-center account admin-account"
            style={{ marginLeft: "10px", padding: "0 10px" }}
          >
            <Button type="primary" onClick={onLoginAsAdmin}>
              Login as Admin
            </Button>
          </div>
          <div
            className="flex items-center account api-access-token"
            style={{ marginLeft: "10px", padding: "0 10px" }}
          >
            <Button type="primary" onClick={onLoginWithApiAccessToken}>
              Login with Api access token
            </Button>
          </div>
        </div>
        {/* <Otp /> */}
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <p>Performer</p>
          <Input
            placeholder="Performer Iam User ID"
            value={performerIamUserId}
            onChange={(e) => {
              setPerformerIamUserId(e.target.value)
              setProp("performerIamUserId", e.target.value)
            }}
          />
          <Input
            placeholder="Performer email"
            value={performerEmail}
            onChange={(e) => {
              setPerformerEmail(e.target.value)
              setProp("performerEmail", e.target.value)
            }}
          />
          <Input
            placeholder="Performer ID"
            value={performerId}
            onChange={(e) => {
              setPerformerId(e.target.value)
              setProp("performerId", e.target.value)
            }}
          />
          <div
            className="flex items-center account performer-account"
            style={{ marginLeft: "10px", padding: "0 10px" }}
          >
            <Button type="primary" onClick={onLoginAsPerformer}>
              Login as Performer
            </Button>
          </div>
        </div>
        {/* <Otp /> */}
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <p>User</p>
          <Input
            placeholder="User Iam User ID"
            value={userIamUserId}
            onChange={(e) => {
              setUserIamUserId(e.target.value)
              setProp("userIamUserId", e.target.value)
            }}
          />
          <Input
            placeholder="User email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value)
              setProp("userEmail", e.target.value)
            }}
          />
          <Input
            placeholder="User ID"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value)
              setProp("userId", e.target.value)
            }}
          />
          <div
            className="flex items-center account user-account"
            style={{ marginLeft: "10px", padding: "0 10px" }}
          >
            <Button type="primary" onClick={onLoginAsUser}>
              Login as User
            </Button>
          </div>
        </div>
        {/* <Otp /> */}
      </div>
    </div>
  )
})

SwaggerHeaderComponent.defaultProps = {}

export default withStorage(SwaggerHeaderComponent)
