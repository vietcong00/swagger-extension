import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"
import { ToolModel } from "./ToolModel"
import { ERegexUrl } from "@/shared/constants"
import config from "@/shared/config"

export const SwaggerModel = types
  .compose(
    ToolModel,
    types.model({
      autoInitUI: types.optional(types.boolean, config.cr.common.autoInitUI),
      recaptchaSiteKey: types.optional(types.string, config.cr.common.recaptchaSiteKey),
      loginWithOtp: types.optional(types.boolean, config.cr.common.loginWithOtp),
      otpCode: types.optional(types.string, ""),
      platformAdminEmail: types.optional(types.string, config.cr.platform_admin.username),
      platformAdminPassword: types.optional(types.string, config.cr.platform_admin.password),
      platformAdminTenant: types.optional(types.string, config.cr.platform_admin.tenant),
      msspEmail: types.optional(types.string, config.cr.mssp.username),
      msspPassword: types.optional(types.string, config.cr.mssp.password),
      msspTenant: types.optional(types.string, config.cr.mssp.tenant),
      organizationEmail: types.optional(types.string, config.cr.organization.username),
      organizationPassword: types.optional(types.string, config.cr.organization.password),
      organizationTenant: types.optional(types.string, config.cr.organization.tenant),
    }),
  )
  .named("SwaggerModel")
  .views((self) => ({}))
  .actions(withSetPropAction)
  .actions((self) => ({
    setAutoInitUI: (value: boolean) => {
      self.autoInitUI = value
    },
    autoExecute: () => {
      console.log("SwaggerModel autoExecute")
    },
  }))

export type SwaggerInstance = Instance<typeof SwaggerModel>
export type SwaggerSnapshotOut = SnapshotOut<typeof SwaggerModel>
export type SwaggerSnapshotIn = SnapshotIn<typeof SwaggerModel>
export type SwaggerSnapshot = SnapshotOut<typeof SwaggerModel>

export const SWAGGER_MODEL_DEFAULT: SwaggerSnapshot = {
  autoInitUI: config.cr.common.autoInitUI,
  recaptchaSiteKey: config.cr.common.recaptchaSiteKey,
  loginWithOtp: config.cr.common.loginWithOtp,
  matchRegexUrls: config.cr.common.matchRegexUrls,
  otpCode: "",
  platformAdminEmail: config.cr.platform_admin.username,
  platformAdminPassword: config.cr.platform_admin.password,
  platformAdminTenant: config.cr.platform_admin.tenant,
  msspEmail: config.cr.mssp.username,
  msspPassword: config.cr.mssp.password,
  msspTenant: config.cr.mssp.tenant,
  organizationEmail: config.cr.organization.username,
  organizationPassword: config.cr.organization.password,
  organizationTenant: config.cr.organization.tenant,
}
