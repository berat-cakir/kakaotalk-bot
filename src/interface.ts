export interface ConfigInterface {
  userId: string;
  email: string;
  password: string;
  deviceUuid: string;
  deviceName: string;
}

export interface RulesInterface {
  verificationTimeMinutes: number;
  messageDeleteSeconds: number;
}
