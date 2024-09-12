import config from "@/shared/config"
import { useStores } from "@/shared/models"
import { SwaggerUIX } from "@/shared/website/swagger/swagger-ui"
import withStorage from "@/shared/withStorage"
import { Button, Input, Space } from "antd"
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Otp } from "../Otp/Otp"

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
        platformAdminEmail: _platformAdminEmail,
        platformAdminPassword: _platformAdminPassword,
        platformAdminTenant: _platformAdminTenant,
        msspEmail: _msspEmail,
        msspPassword: _msspPassword,
        msspTenant: _msspTenant,
        organizationEmail: _organizationEmail,
        organizationPassword: _organizationPassword,
        organizationTenant: _organizationTenant,
        setProp,
      },
    },
  } = useStores()
  const [platformAdminEmail, setPlatformAdminEmail] = useState(_platformAdminEmail)
  const [platformAdminPassword, setPlatformAdminPass] = useState(_platformAdminPassword)
  const [platformAdminTenant, setPlatformAdminTenant] = useState(_platformAdminTenant)

  const [msspEmail, setMsspEmail] = useState(_msspEmail)
  const [msspPassword, setMsspPass] = useState(_msspPassword)
  const [msspTenant, setMsspTenant] = useState(_msspTenant)

  const [organizationEmail, setOrganizationEmail] = useState(_organizationEmail)
  const [organizationPassword, setOrganizationPass] = useState(_organizationPassword)
  const [organizationTenant, setOrganizationTenant] = useState(_organizationTenant)

  const onLoginAsPlatformAdmin = () => {
    highlightAccountType("platform-admin")
    swaggerUI.login(platformAdminTenant, platformAdminEmail, platformAdminPassword)
  }

  const onLoginWithApiAccessToken = () => {
    highlightAccountType("api-access-token")

    swaggerUI.loginWithApiAccessToken(platformAdminTenant, platformAdminEmail, platformAdminPassword)
  }

  const onLoginAsMssp = () => {
    highlightAccountType("mssp")
    swaggerUI.login(msspTenant, msspEmail, msspPassword)
  }

  const onLoginAsOrganization = () => {
    highlightAccountType("organization")
    swaggerUI.login(organizationTenant, organizationEmail, organizationPassword)
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
          <p>Platform Admin</p>
          <Input
            placeholder="Email"
            value={platformAdminEmail}
            onChange={(e) => {
              setPlatformAdminEmail(e.target.value)
              setProp("platformAdminEmail", e.target.value)
            }}
          />
          <Input
            placeholder="Password"
            value={platformAdminPassword}
            onChange={(e) => {
              setPlatformAdminPass(e.target.value)
              setProp("platformAdminPassword", e.target.value)
            }}
          />
          <Input
            placeholder="Tenant"
            value={platformAdminTenant}
            onChange={(e) => {
              setPlatformAdminTenant(e.target.value)
              setProp("platformAdminTenant", e.target.value)
            }}
          />
          <div className="flex items-center account platform-admin" style={{marginLeft: '10px', padding: '0 10px'}}>
            <Button type="primary" onClick={onLoginAsPlatformAdmin}>
              Login as Platform Admin
            </Button>
          </div>
          <div className="flex items-center account api-access-token" style={{marginLeft: '10px', padding: '0 10px'}}>
          <Button type="primary" onClick={onLoginWithApiAccessToken}>
              Login with Api access token
          </Button>
        </div>
        </div>
        {/* <Otp /> */}
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <p>MSSP</p>
          <Input
            placeholder="Email"
            value={msspEmail}
            onChange={(e) => {
              setMsspEmail(e.target.value)
              setProp("msspEmail", e.target.value)
            }}
          />
          <Input
            placeholder="Password"
            value={msspPassword}
            onChange={(e) => {
              setMsspPass(e.target.value)
              setProp("msspPassword", e.target.value)
            }}
          />
          <Input
            placeholder="Tenant"
            value={msspTenant}
            onChange={(e) => {
              setMsspTenant(e.target.value)
              setProp("msspTenant", e.target.value)
            }}
          />
          <div className="flex items-center account mssp" style={{marginLeft: '10px', padding: '0 10px'}}>
            <Button type="primary" onClick={onLoginAsMssp}>
              Login as MSSP
            </Button>
          </div>
        </div>
        {/* <Otp /> */}
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <p>Organization</p>
          <Input
            placeholder="Email"
            value={organizationEmail}
            onChange={(e) => {
              setOrganizationEmail(e.target.value)
              setProp("organizationEmail", e.target.value)
            }}
          />
          <Input
            placeholder="Password"
            value={organizationPassword}
            onChange={(e) => {
              setOrganizationPass(e.target.value)
              setProp("organizationPassword", e.target.value)
            }}
          />
          <Input
            placeholder="Tenant"
            value={organizationTenant}
            onChange={(e) => {
              setOrganizationTenant(e.target.value)
              setProp("organizationTenant", e.target.value)
            }}
          />
          <div className="flex items-center account organization" style={{marginLeft: '10px', padding: '0 10px'}}>
            <Button type="primary" onClick={onLoginAsOrganization}>
              Login as Organization
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
