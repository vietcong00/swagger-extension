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
        appInstanceCode: _appInstanceCode = undefined,
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
  const [appInstanceCode, setAppInstanceCode] = useState(_appInstanceCode)
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
      appInstanceCode,
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
      appInstanceCode,
    )
  }

  const onLoginAsUser = () => {
    highlightAccountType("user")
    swaggerUI.login(
      userIamUserId,
      userEmail,
      userId,
      "user",
      false,
      loginChannel,
      deviceId,
      appInstanceCode,
    )
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
    <div style={{ width: "100%", display: "flex", gap: "20px" }}>
      {/* Column 1: Common Settings */}
      <div
        style={{
          width: "200px",
          paddingRight: "20px",
          borderRight: "1px solid #e8e8e8",
        }}
      >
        <div>
          <Input
            placeholder="Login Channel"
            value={loginChannel}
            onChange={(e) => {
              setLoginChannel(e.target.value)
              setProp("loginChannel", e.target.value)
            }}
          />
        </div>
        <div>
          <Input
            placeholder="Device ID"
            value={deviceId}
            onChange={(e) => {
              setDeviceId(e.target.value)
              setProp("deviceId", e.target.value)
            }}
          />
        </div>
        <div>
          <Input
            placeholder="App Instance Code"
            value={appInstanceCode}
            onChange={(e) => {
              setAppInstanceCode(e.target.value)
              setProp("appInstanceCode", e.target.value)
            }}
          />
        </div>
      </div>

      {/* Column 2: Account Settings */}
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        {/* Admin Row */}
        <div
          className="flex items-center"
          style={{
            marginBottom: "10px",
            gap: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          <div className="account admin-account" style={{ width: "80px" }}>
            Admin
          </div>
          <div style={{ flex: 1, display: "flex", gap: "10px" }}>
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
          <Button type="primary" onClick={onLoginAsAdmin}>
            Admin
          </Button>
        </div>

        {/* Performer Row */}
        <div
          className="flex items-center"
          style={{
            marginBottom: "10px",
            gap: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          <div className="account performer-account" style={{ width: "80px" }}>
            Performer
          </div>
          <div style={{ flex: 1, display: "flex", gap: "10px" }}>
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
          <Button type="primary" onClick={onLoginAsPerformer}>
            Performer
          </Button>
        </div>

        {/* User Row */}
        <div
          className="flex items-center"
          style={{
            gap: "10px",
            paddingBottom: "10px",
          }}
        >
          <div className="account user-account" style={{ width: "80px" }}>
            User
          </div>
          <div style={{ flex: 1, display: "flex", gap: "10px" }}>
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
          <Button type="primary" onClick={onLoginAsUser}>
            User
          </Button>
        </div>
      </div>
    </div>
  )
})

SwaggerHeaderComponent.defaultProps = {}

export default withStorage(SwaggerHeaderComponent)
