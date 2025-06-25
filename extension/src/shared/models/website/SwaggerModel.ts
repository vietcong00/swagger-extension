import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"
import { ToolModel } from "./ToolModel"
import config from "@/shared/config"

export const SwaggerModel = types
  .compose(
    ToolModel,
    types.model({
      autoInitUI: types.optional(types.boolean, config.cr.common.autoInitUI),
      recaptchaSiteKey: types.optional(types.string, config.cr.common.recaptchaSiteKey),
      loginWithOtp: types.optional(types.boolean, config.cr.common.loginWithOtp),
      otpCode: types.optional(types.string, ""),
      adminIamUserId: types.optional(types.string, config.cr.admin.iamUserId),
      adminEmail: types.optional(types.string, config.cr.admin.email),
      adminId: types.optional(types.string, config.cr.admin.accountId),
      performerIamUserId: types.optional(types.string, config.cr.performer.iamUserId),
      performerEmail: types.optional(types.string, config.cr.performer.email),
      performerId: types.optional(types.string, config.cr.performer.accountId),
      userIamUserId: types.optional(types.string, config.cr.user.iamUserId),
      userEmail: types.optional(types.string, config.cr.user.email),
      userId: types.optional(types.string, config.cr.user.accountId),
      loginChannel: types.optional(types.string, "web"),
      deviceId: types.optional(types.string, "device-id"),
      appInstanceCode: types.optional(types.string, "yebisuUserApp1"),
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
  adminIamUserId: config.cr.admin.iamUserId,
  adminEmail: config.cr.admin.email,
  adminId: config.cr.admin.accountId,
  performerIamUserId: config.cr.performer.iamUserId,
  performerEmail: config.cr.performer.email,
  performerId: config.cr.performer.accountId,
  userIamUserId: config.cr.user.iamUserId,
  userEmail: config.cr.user.email,
  userId: config.cr.user.accountId,
  loginChannel: "web",
  deviceId: "device-id",
  appInstanceCode: "yebisuUserApp1",
}
