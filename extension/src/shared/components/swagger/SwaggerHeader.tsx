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
        loginChannel: _loginChannel = undefined,
        deviceId: _deviceId = undefined,
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

  const [loginChannel, setLoginChannel] = useState(_loginChannel)
  const [deviceId, setDeviceId] = useState(_deviceId)

  const onLoginAsAdmin = () => {
    highlightAccountType("admin")
    swaggerUI.login(
      adminIamUserId,
      adminEmail,
      adminId,
      "administrator",
      false,
      loginChannel,
      deviceId,
    )
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
    swaggerUI.login(
      performerIamUserId,
      performerEmail,
      performerId,
      "performer",
      false,
      loginChannel,
      deviceId,
    )
  }

  const onLoginAsUser = () => {
    highlightAccountType("user")
    swaggerUI.login(userIamUserId, userEmail, userId, "user", false, loginChannel, deviceId)
  }

  const highlightAccountType = (type: string) => {
    // Reset all account elements first
    const allAccountElements = document.querySelectorAll(".account") as NodeListOf<HTMLElement>
    allAccountElements.forEach((element) => {
      element.style.background = "none"
    })

    // Then highlight the selected account elements
    const selectedElements = document.querySelectorAll(
      `.${type}-account`,
    ) as NodeListOf<HTMLElement>
    selectedElements.forEach((element) => {
      element.style.background = "coral"
    })
  }

  return (
    <div style={{ width: "100%" }}>
      <div className="flex" style={{ gap: "10px", marginBottom: "10px" }}>
        {/* Column 1: Common inputs */}
        <div style={{ width: "20%" }}>
          <Input
            placeholder="Login Channel"
            value={loginChannel}
            onChange={(e) => {
              setLoginChannel(e.target.value)
              setProp("loginChannel", e.target.value)
            }}
            style={{ marginBottom: "10px" }}
          />
          <Input
            placeholder="Device ID"
            value={deviceId}
            onChange={(e) => {
              setDeviceId(e.target.value)
              setProp("deviceId", e.target.value)
            }}
          />
        </div>

        {/* Column 2: Account Types */}
        <div style={{ width: "15%" }}>
          <div
            className="account admin-account"
            style={{ marginBottom: "10px", height: "32px", lineHeight: "32px" }}
          >
            Admin
          </div>
          <div
            className="account performer-account"
            style={{ marginBottom: "10px", height: "32px", lineHeight: "32px" }}
          >
            Performer
          </div>
          <div className="account user-account" style={{ height: "32px", lineHeight: "32px" }}>
            User
          </div>
        </div>

        {/* Column 3: Account Inputs */}
        <div style={{ width: "45%", display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Admin inputs */}
          <div className="flex" style={{ gap: "10px" }}>
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
          </div>

          {/* Performer inputs */}
          <div className="flex" style={{ gap: "10px" }}>
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
          </div>

          {/* User inputs */}
          <div className="flex" style={{ gap: "10px" }}>
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
          </div>
        </div>

        {/* Column 4: Buttons */}
        <div style={{ width: "5%", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <div className="account admin-account" style={{ marginBottom: "5px" }}>
              <Button type="primary" onClick={onLoginAsAdmin}>
                Admin
              </Button>
            </div>
            <div className="account api-access-token">
              <Button type="primary" onClick={onLoginWithApiAccessToken}>
                Temp User
              </Button>
            </div>
          </div>
          <div className="account performer-account">
            <Button type="primary" onClick={onLoginAsPerformer}>
              Performer
            </Button>
          </div>
          <div className="account user-account">
            <Button type="primary" onClick={onLoginAsUser}>
              User
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})

SwaggerHeaderComponent.defaultProps = {}

export default withStorage(SwaggerHeaderComponent)
