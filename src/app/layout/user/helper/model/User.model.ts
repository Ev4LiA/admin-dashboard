export class UserModel {
  uuid: string;
  userName: string;
  email: string;
  emailVerified: boolean
  phoneNumber: string;
  firstName: string;
  lastName: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string;
  // Allow other user to see ur profile
  privacy: boolean;
  // Role of user (Reader, Admin)
  role: string;
}
